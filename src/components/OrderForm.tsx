
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Lock, CreditCard, Shield } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import BookPopup from "./ui/BookPopup";
import BookCoverPopup from "./ui/BookCoverPopup";

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

  useEffect(() => {
    // Check if there's an active free claim
    const storedClaimTime = localStorage.getItem('swaggerismClaimTime');
    if (storedClaimTime && localStorage.getItem('swaggerismFreeOffer') === 'true') {
      const claimTime = parseInt(storedClaimTime);
      const now = new Date().getTime();
      const elapsedSeconds = Math.floor((now - claimTime) / 1000);
      
      // If less than 5 minutes have passed since claiming
      if (elapsedSeconds < 300) {
        setFreeSwaggerism(true);
        setTimeLeft(300 - elapsedSeconds);
        
        // Auto-select swaggerism if we're in free mode
        if (productType !== "swaggerism") {
          setProductType("swaggerism");
        }
        
        // Start the countdown
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
        // Offer expired
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
    if (freeSwaggerism && productType === "swaggerism") return 0;
    
    switch (productType) {
      case "digital":
        return 9.99;
      case "physical":
        return 29.99;
      case "swaggerism":
        return 25.99;
      case "bundle":
        return 53.98;
      default:
        return 9.99;
    }
  };

  const getTotalPrice = () => {
    return getProductPrice() + getShippingCost();
  };

  const getProductName = () => {
    switch (productType) {
      case "digital":
        return "Elevate Higher - Digital Copy";
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
      // Validate form data
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast.error("Please fill out all required fields");
        setIsLoading(false);
        return;
      }

      // Additional validation for physical orders
      if (productType !== "digital" && (!formData.address || !formData.city || !formData.state || !formData.zipCode)) {
        toast.error("Please fill out all shipping details");
        setIsLoading(false);
        return;
      }

      console.log("Submitting form data:", { productType, region, bookCover, ...formData });
      
      // Call the Supabase Edge Function
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

      // If it was a free Swaggerism claim and successful, clear the claim data
      if (freeSwaggerism && productType === "swaggerism") {
        localStorage.removeItem('swaggerismClaimTime');
        localStorage.setItem('swaggerismFreeOffer', 'false');
        setFreeSwaggerism(false);
      }

      // Redirect to Stripe Checkout
      if (data?.url) {
        console.log("Redirecting to Stripe checkout:", data.url);
        
        // Use window.open for a more reliable redirect in a new tab
        window.open(data.url, '_blank');
        
        // If window.open is blocked, fallback to direct assignment
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
            {/* Book Image & Description */}
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

            {/* Order Form */}
            <div className="bg-white shadow-xl rounded-lg p-4 md:p-8">
              <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">
                Order Your Copy Now
              </h2>
              <p className="text-lg md:text-xl text-gray-600 text-center mb-4 md:mb-6">
                Choose Your Preferred Option
              </p>

              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {/* Product Type Selection */}
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                    productType === "digital" ? "border-primary bg-primary/10" : "border-gray-200"
                  }`} onClick={() => setProductType("digital")}>
                    <h3 className="font-semibold mb-2">Digital Copy</h3>
                    <p className="text-lg font-bold text-primary">$9.99</p>
                    <p className="text-xs text-gray-500 mt-1">Elevate Higher</p>
                  </div>
                  
                  <div className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                    productType === "physical" ? "border-primary bg-primary/10" : "border-gray-200"
                  }`} onClick={() => setProductType("physical")}>
                    <h3 className="font-semibold mb-2">Physical Book</h3>
                    <p className="text-lg font-bold text-primary">$29.99</p>
                    <p className="text-xs text-gray-500 mt-1">Elevate Higher</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className={`border rounded-lg p-4 text-center cursor-pointer transition-all ${
                    productType === "swaggerism" ? "border-primary bg-primary/10" : "border-gray-200"
                  }`} onClick={() => setProductType("swaggerism")}>
                    <h3 className="font-semibold mb-2">Swaggerism</h3>
                    <div>
                      {freeSwaggerism ? (
                        <span className="text-lg font-bold text-green-600">FREE</span>
                      ) : (
                        <>
                          <span className="text-sm line-through text-gray-400 mr-1">$35.99</span>
                          <span className="text-lg font-bold text-primary">$25.99</span>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Pre-Order (July 15)</p>
                  </div>
                  
                  <div className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all ${
                    productType === "bundle" ? "border-green-500 bg-green-50" : "border-gray-200"
                  }`} onClick={() => setProductType("bundle")}>
                    <h3 className="font-semibold mb-1">Book Bundle</h3>
                    <div>
                      <span className="text-sm line-through text-gray-400 mr-1">$59.98</span>
                      <span className="text-lg font-bold text-green-600">$53.98</span>
                    </div>
                    <p className="text-xs text-green-600 font-medium mt-1">FREE SHIPPING</p>
                    <div className="mt-1 text-xs bg-green-600 text-white rounded-full py-0.5 px-2 inline-block">SAVE 10%</div>
                  </div>
                </div>

                {/* Invisible select for form submission */}
                <select 
                  name="productType" 
                  value={productType}
                  onChange={handleSelectChange}
                  className="hidden"
                >
                  <option value="digital">Digital Copy</option>
                  <option value="physical">Physical Copy</option>
                  <option value="swaggerism">Swaggerism Pre-Order</option>
                  <option value="bundle">Book Bundle</option>
                </select>

                {/* Book Cover Selection (only for physical) */}
                {productType === "physical" && (
                  <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">Book Cover Type</label>
                    <select 
                      name="bookCover" 
                      value={bookCover}
                      onChange={handleSelectChange}
                      className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                    >
                      <option value="softcover">Softcover</option>
                      <option value="hardcover">Hardcover</option>
                    </select>
                  </div>
                )}

                {/* Region Selection (only for physical but not bundle) */}
                {(productType === "physical" || productType === "swaggerism") && (
                  <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">Shipping Region</label>
                    <select 
                      name="region" 
                      value={region}
                      onChange={handleSelectChange}
                      className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                    >
                      <option value="us_canada">USA & Canada (${getShippingCost()})</option>
                      <option value="europe">Europe (${getShippingCost()})</option>
                    </select>
                  </div>
                )}

                {/* Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 md:mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 md:mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                    required
                  />
                </div>

                {/* Shipping Address Fields (only for physical products) */}
                {productType !== "digital" && (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1 md:mb-2">Shipping Address</label>
                      <input 
                        type="text" 
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1 md:mb-2">City</label>
                        <input 
                          type="text" 
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 md:mb-2">State/Province</label>
                        <input 
                          type="text" 
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 md:mb-2">ZIP/Postal Code</label>
                        <input 
                          type="text" 
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="w-full px-3 md:px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Order Summary</h3>
                  <div className="flex justify-between">
                    <span>{getProductName()}</span>
                    <span>${getProductPrice().toFixed(2)}</span>
                  </div>
                  {(productType === "physical" || productType === "swaggerism") && (
                    <div className="flex justify-between mt-1">
                      <span>Shipping & Handling</span>
                      <span>${getShippingCost().toFixed(2)}</span>
                    </div>
                  )}
                  {productType === "bundle" && (
                    <div className="flex justify-between mt-1 text-green-600 font-medium">
                      <span>Shipping & Handling</span>
                      <span>FREE</span>
                    </div>
                  )}
                  <div className="border-t my-2 pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                {/* Security Icons */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-sm text-gray-600 my-4 md:my-6">
                  <div className="flex items-center">
                    <Lock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>256-bit SSL Encryption</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>Money-Back Guarantee</span>
                  </div>
                </div>

                {/* Order Button */}
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 md:py-4 text-base md:text-lg font-bold rounded-lg shadow-md ${
                    freeSwaggerism ? "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white" :
                    productType === "bundle" 
                      ? "bg-green-600 hover:bg-green-700 text-white" 
                      : "bg-primary hover:bg-primary-hover text-white"
                  }`}
                >
                  {isLoading ? "Processing..." : 
                   freeSwaggerism ? "CLAIM YOUR FREE COPY NOW" :
                   productType === "digital" ? "GET INSTANT ACCESS NOW" :
                   productType === "swaggerism" ? "PRE-ORDER NOW" :
                   productType === "bundle" ? "GET BOTH BOOKS NOW" :
                   "ORDER MY BOOK NOW"}
                </Button>

                <p className="text-center text-xs md:text-sm text-gray-600 mt-2 md:mt-4">
                  {productType === "digital" 
                    ? "You'll receive an email with your digital copy immediately after payment" 
                    : productType === "swaggerism"
                    ? "Your pre-order will ship on July 15th, after payment is processed"
                    : productType === "bundle"
                    ? "Elevate Higher ships immediately; Swaggerism pre-order ships July 15th"
                    : "Your book will be shipped to the address above after payment"}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book Popup - for future marketing purposes */}
      <BookPopup isOpen={showBookPopup} onClose={() => setShowBookPopup(false)} />
      
      {/* Hardcover Out of Stock Popup */}
      <BookCoverPopup 
        isOpen={showCoverPopup} 
        onClose={() => setShowCoverPopup(false)} 
        onSwitch={handleSwitchToSoftcover} 
      />
    </>
  );
};

export default OrderForm;
