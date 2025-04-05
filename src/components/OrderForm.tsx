import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock, CreditCard, Shield, Book, Mail, User, MapPin, DollarSign, Check } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import BookPopup from "./ui/BookPopup";
import BookCoverPopup from "./ui/BookCoverPopup";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

type ProductType = "digital" | "physical" | "swaggerism" | "bundle";
type Region = "us_canada" | "europe" | "other";
type BookCover = "softcover" | "hardcover";

const OrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showBookPopup, setShowBookPopup] = useState(false);
  const [showCoverPopup, setShowCoverPopup] = useState(false);
  const [productType, setProductType] = useState<ProductType>("digital");
  const [region, setRegion] = useState<Region>("us_canada");
  const [bookCover, setBookCover] = useState<BookCover>("softcover");
  const [formData, setFormData] = useState<ShippingAddress & { email: string }>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [freeSwaggerism, setFreeSwaggerism] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [activeSection, setActiveSection] = useState(1);

  useEffect(() => {
    const storedClaimTime = localStorage.getItem('swaggerismClaimTime');
    if (storedClaimTime && localStorage.getItem('swaggerismFreeOffer') === 'true') {
      const claimTime = parseInt(storedClaimTime);
      const now = new Date().getTime();
      const elapsedSeconds = Math.floor((now - claimTime) / 1000);
      
      if (elapsedSeconds < 300) {
        setFreeSwaggerism(true);
        setTimeLeft(300 - elapsedSeconds);
        
        if (productType !== "swaggerism") {
          setProductType("swaggerism");
        }
        
        const timer = setInterval(() => {
          setTimeLeft(prev => {
            if (prev <= 1) {
              clearInterval(timer);
              setFreeSwaggerism(false);
              localStorage.removeItem('swaggerismClaimTime');
              localStorage.setItem('swaggerismFreeOffer', 'false');
              toast.error("Time's up! The free offer has expired.");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
        
        return () => clearInterval(timer);
      } else {
        setFreeSwaggerism(false);
        localStorage.removeItem('swaggerismClaimTime');
        localStorage.setItem('swaggerismFreeOffer', 'false');
      }
    }
  }, [productType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "productType") {
      setProductType(value as ProductType);
    } else if (name === "region") {
      setRegion(value as Region);
    } else if (name === "bookCover") {
      if (value === "hardcover") {
        setShowCoverPopup(true);
      } else {
        setBookCover(value as BookCover);
      }
    }
  };

  const handleSwitchToSoftcover = () => {
    setBookCover("softcover");
    setShowCoverPopup(false);
    toast.success("Your selection has been updated to softcover.");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  const getShippingCost = () => {
    if (productType === "digital") return 0;
    if (productType === "bundle") return 0; // Free shipping for bundle
    return region === "us_canada" ? 14.97 : 14.99;
  };

  const getProductPrice = () => {
    if (productType === "digital") return 0; // Digital copy is now free
    if (freeSwaggerism && productType === "swaggerism") return 0;
    
    switch (productType) {
      case "physical":
        return 29.99;
      case "swaggerism":
        return 25.99;
      case "bundle":
        return 53.98;
      default:
        return 0;
    }
  };

  const getTotalPrice = () => {
    return getProductPrice() + getShippingCost();
  };

  const getProductName = () => {
    switch (productType) {
      case "digital":
        return "Elevate Higher - Digital Copy (FREE)";
      case "physical":
        return `Elevate Higher - Physical Book (${bookCover})`;
      case "swaggerism":
        return freeSwaggerism 
          ? "Swaggerism My Religion - FREE COPY (Limited Time Offer)" 
          : "Swaggerism My Religion - Physical Book (Pre-Order)";
      case "bundle":
        return "Book Bundle: Elevate Higher + Swaggerism My Religion";
      default:
        return "Elevate Higher";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast.error("Please fill out all required fields");
        setIsLoading(false);
        return;
      }

      if (productType !== "digital" && (!formData.address || !formData.city || !formData.state || !formData.zipCode)) {
        toast.error("Please fill out all shipping details");
        setIsLoading(false);
        return;
      }

      console.log("Submitting form data:", { productType, region, bookCover, ...formData });
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          productType,
          region,
          bookCover,
          isFreeSwaggerism: freeSwaggerism,
          customerEmail: formData.email,
          customerName: `${formData.firstName} ${formData.lastName}`,
          shippingAddress: {
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
          },
        },
      });

      console.log("Response from Edge Function:", { data, error });

      if (error) {
        console.error('Error creating checkout session:', error);
        toast.error("Something went wrong. Please try again.");
        setIsLoading(false);
        return;
      }

      if (freeSwaggerism && productType === "swaggerism") {
        localStorage.removeItem('swaggerismClaimTime');
        localStorage.setItem('swaggerismFreeOffer', 'false');
        setFreeSwaggerism(false);
      }

      if (productType === "digital") {
        toast.success("Your free digital copy has been sent to your email!");
        setIsLoading(false);
        return;
      }

      if (data?.url) {
        console.log("Redirecting to Stripe checkout:", data.url);
        
        window.open(data.url, '_blank');
        
        setTimeout(() => {
          if (!document.hasFocus()) {
            toast.info("Checkout opened in a new tab");
          } else {
            toast.info("Redirecting to checkout...");
            window.location.href = data.url;
          }
        }, 500);
        
      } else {
        console.error("No checkout URL returned:", data);
        toast.error("Unable to process your order. Please try again.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error("An unexpected error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  const renderSectionHeader = (number: number, title: string, isActive: boolean) => (
    <div 
      className={`flex items-center mb-4 ${isActive ? 'text-primary' : 'text-gray-500'}`}
      onClick={() => setActiveSection(number)}
    >
      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
        isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
      }`}>
        {number}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );

  return (
    <>
      <section id="order" className="py-10 md:py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          {freeSwaggerism && productType === "swaggerism" && (
            <div className="mb-8 p-4 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">LIMITED TIME OFFER</h3>
              <p className="text-lg">
                Complete your order in the next <span className="font-bold text-yellow-300 text-2xl">{formatTime(timeLeft)}</span> and get your FREE copy of Swaggerism!
              </p>
            </div>
          )}
        
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <img 
                src={productType === "swaggerism" ? "/2222222222.png" : 
                     productType === "bundle" ? "/lovable-uploads/Screenshot_2025-02-28_231038-removebg-preview.png" : 
                     "/lovable-uploads/Elevate Higher Book Mockup 5.jpg"} 
                alt={getProductName()}
                className="mx-auto md:mx-0 w-full max-w-3xl h-[600px] object-cover shadow-lg rounded-lg"
              />
              <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-6">
                Discover the Secrets to <span className="text-primary">Success</span>
              </h3>
              <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
                {productType === "bundle" 
                  ? "Transform your life with our complete book collection. Choose your preferred option below!"
                  : "This book will transform your mindset and help you achieve greatness. Choose your preferred format below!"}
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg p-4 md:p-8">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">
                Order Your Copy Now
              </h2>
              <p className="text-lg md:text-xl text-gray-600 text-center mb-6">
                Complete the form below to get your copy
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {renderSectionHeader(1, "Personal Information", activeSection === 1)}
                {activeSection === 1 && (
                  <div className="space-y-4 border p-4 rounded-lg bg-gray-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="flex mt-1">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
                            <User className="h-4 w-4 text-gray-500" />
                          </span>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="rounded-l-none"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="flex mt-1">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
                            <User className="h-4 w-4 text-gray-500" />
                          </span>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="rounded-l-none"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="flex mt-1">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
                          <Mail className="h-4 w-4 text-gray-500" />
                        </span>
                        <Input
                          id="email"
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-l-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        type="button" 
                        onClick={() => setActiveSection(2)}
                        className="bg-primary hover:bg-primary-hover text-white"
                      >
                        Continue to Book Format
                      </Button>
                    </div>
                  </div>
                )}

                {renderSectionHeader(2, "Book Format", activeSection === 2)}
                {activeSection === 2 && (
                  <div className="space-y-4 border p-4 rounded-lg bg-gray-50">
                    <div className="mb-4">
                      <Label className="text-base font-medium mb-2 block">Select Your Preferred Format</Label>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            productType === "digital" ? "border-primary bg-primary/10" : "border-gray-200"
                          }`}
                          onClick={() => setProductType("digital")}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 mt-1 ${
                              productType === "digital" ? "border-primary" : "border-gray-300"
                            }`}>
                              {productType === "digital" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                            </div>
                            <div>
                              <h4 className="font-medium text-base">Digital Copy</h4>
                              <p className="text-green-600 font-medium">FREE</p>
                              <p className="text-xs text-gray-500 mt-1">Instant access to Elevate Higher</p>
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            productType === "physical" ? "border-primary bg-primary/10" : "border-gray-200"
                          }`}
                          onClick={() => setProductType("physical")}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 mt-1 ${
                              productType === "physical" ? "border-primary" : "border-gray-300"
                            }`}>
                              {productType === "physical" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                            </div>
                            <div>
                              <h4 className="font-medium text-base">Physical Book</h4>
                              <p className="text-lg font-medium text-primary">$29.99</p>
                              <p className="text-xs text-gray-500 mt-1">Elevate Higher</p>
                            </div>
                          </div>
                        </div>

                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            productType === "swaggerism" ? "border-primary bg-primary/10" : "border-gray-200"
                          }`}
                          onClick={() => setProductType("swaggerism")}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 mt-1 ${
                              productType === "swaggerism" ? "border-primary" : "border-gray-300"
                            }`}>
                              {productType === "swaggerism" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                            </div>
                            <div>
                              <h4 className="font-medium text-base">Swaggerism</h4>
                              <div>
                                {freeSwaggerism ? (
                                  <span className="text-green-600 font-medium">FREE</span>
                                ) : (
                                  <>
                                    <span className="text-sm line-through text-gray-400 mr-1">$35.99</span>
                                    <span className="text-lg font-medium text-primary">$25.99</span>
                                  </>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Pre-Order (July 15)</p>
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            productType === "bundle" ? "border-green-500 bg-green-50" : "border-gray-200"
                          }`}
                          onClick={() => setProductType("bundle")}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 mt-1 ${
                              productType === "bundle" ? "border-green-500" : "border-gray-300"
                            }`}>
                              {productType === "bundle" && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                            </div>
                            <div>
                              <h4 className="font-medium text-base">Book Bundle</h4>
                              <div>
                                <span className="text-sm line-through text-gray-400 mr-1">$59.98</span>
                                <span className="text-lg font-medium text-green-600">$53.98</span>
                              </div>
                              <p className="text-xs text-green-600 font-medium mt-1">FREE SHIPPING</p>
                              <div className="mt-1 text-xs bg-green-600 text-white rounded-full py-0.5 px-2 inline-block">SAVE 10%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {productType === "physical" && (
                      <div className="mt-4">
                        <Label className="text-base font-medium mb-2 block">Book Cover Type</Label>
                        <RadioGroup 
                          defaultValue={bookCover} 
                          onValueChange={(value) => {
                            if (value === "hardcover") {
                              setShowCoverPopup(true);
                            } else {
                              setBookCover(value as BookCover);
                            }
                          }}
                          className="flex gap-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="softcover" id="softcover" />
                            <Label htmlFor="softcover">Softcover</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="hardcover" id="hardcover" />
                            <Label htmlFor="hardcover">Hardcover</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    )}
                    
                    <div className="flex justify-between mt-4">
                      <Button 
                        type="button" 
                        onClick={() => setActiveSection(1)}
                        variant="outline"
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => {
                          if (productType === "digital") {
                            setActiveSection(4);
                          } else {
                            setActiveSection(3);
                          }
                        }}
                        className="bg-primary hover:bg-primary-hover text-white"
                      >
                        {productType === "digital" ? "Skip to Summary" : "Continue to Shipping"}
                      </Button>
                    </div>
                  </div>
                )}

                {renderSectionHeader(3, "Shipping Details", activeSection === 3)}
                {activeSection === 3 && productType !== "digital" && (
                  <div className="space-y-4 border p-4 rounded-lg bg-gray-50">
                    <div>
                      <Label className="text-base font-medium mb-2 block">Shipping Region</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            region === "us_canada" ? "border-primary bg-primary/10" : "border-gray-200"
                          }`}
                          onClick={() => setRegion("us_canada")}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 mt-1 ${
                              region === "us_canada" ? "border-primary" : "border-gray-300"
                            }`}>
                              {region === "us_canada" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                            </div>
                            <div>
                              <h4 className="font-medium text-base">USA & Canada</h4>
                              <p className="text-sm text-gray-600">Shipping: ${productType === "bundle" ? "FREE" : "14.97"}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            region === "europe" ? "border-primary bg-primary/10" : "border-gray-200"
                          }`}
                          onClick={() => setRegion("europe")}
                        >
                          <div className="flex items-start">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 mt-1 ${
                              region === "europe" ? "border-primary" : "border-gray-300"
                            }`}>
                              {region === "europe" && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                            </div>
                            <div>
                              <h4 className="font-medium text-base">Europe</h4>
                              <p className="text-sm text-gray-600">Shipping: ${productType === "bundle" ? "FREE" : "14.99"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Shipping Address</Label>
                      <div className="flex mt-1">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50">
                          <MapPin className="h-4 w-4 text-gray-500" />
                        </span>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          className="rounded-l-none"
                          required
                          placeholder="Street address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <Button 
                        type="button" 
                        onClick={() => setActiveSection(2)}
                        variant="outline"
                      >
                        Back
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => setActiveSection(4)}
                        className="bg-primary hover:bg-primary-hover text-white"
                      >
                        Continue to Summary
                      </Button>
                    </div>
                  </div>
                )}

                {renderSectionHeader(4, "Order Summary", activeSection === 4)}
                {activeSection === 4 && (
                  <div className="space-y-4 border p-4 rounded-lg bg-gray-50">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Your Order Details</h3>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Product:</span>
                          <span>{getProductName()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center border-b pb-2 mb-2">
                          <span>Price:</span>
                          <span className="font-bold">${getProductPrice().toFixed(2)}</span>
                        </div>
                        
                        {productType !== "digital" && (
                          <div className="flex justify-between items-center">
                            <span>Shipping:</span>
                            {productType === "bundle" ? (
                              <span className="text-green-600 font-medium">FREE</span>
                            ) : (
                              <span>${getShippingCost().toFixed(2)}</span>
                            )}
                          </div>
                        )}
                        
                        <div className="border-t mt-2 pt-2 flex justify-between items-center">
                          <span className="font-bold">Total:</span>
                          <span className="font-bold text-xl text-primary">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        
                        {productType === "swaggerism" && (
                          <div className="mt-2 text-sm text-amber-600">
                            <p>* Pre-order ships July 15, 2023</p>
                          </div>
                        )}
                        
                        {productType === "bundle" && (
                          <div className="mt-2 text-sm text-amber-600">
                            <p>* Elevate Higher ships immediately; Swaggerism ships July 15</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mt-6">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 mr-1" />
                        <span>Secure Checkout</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        <span>Money-Back Guarantee</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <Button 
                          type="button" 
                          onClick={() => setActiveSection(productType === "digital" ? 2 : 3)}
                          variant="outline"
                          className="md:w-1/3"
                        >
                          Back
                        </Button>
                        <Button 
                          type="submit"
                          disabled={isLoading}
                          className={`md:w-2/3 py-3 md:py-4 text-base md:text-lg font-bold rounded-lg shadow-md ${
                            freeSwaggerism && productType === "swaggerism" 
                              ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white" 
                            : productType === "digital"
                              ? "bg-green-600 hover:bg-green-700 text-white"
                            : productType === "bundle" 
                              ? "bg-green-600 hover:bg-green-700 text-white" 
                              : "bg-primary hover:bg-primary-hover text-white"
                          }`}
                        >
                          {isLoading ? "Processing..." : 
                           productType === "digital" ? "GET FREE ACCESS NOW" :
                           freeSwaggerism && productType === "swaggerism" ? "CLAIM YOUR FREE COPY NOW" :
                           productType === "swaggerism" ? "PRE-ORDER NOW" :
                           productType === "bundle" ? "GET BOTH BOOKS NOW" :
                           "COMPLETE ORDER NOW"}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <BookPopup isOpen={showBookPopup} onClose={() => setShowBookPopup(false)} />
      
      <BookCoverPopup 
        isOpen={showCoverPopup} 
        onClose={() => setShowCoverPopup(false)} 
        onSwitch={handleSwitchToSoftcover} 
      />
    </>
  );
};

export default OrderForm;
