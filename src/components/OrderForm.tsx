
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, CreditCard, Shield } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const OrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ShippingAddress & { email: string }>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form data
      if (!formData.firstName || !formData.lastName || !formData.email || 
          !formData.address || !formData.city || !formData.state || !formData.zipCode) {
        toast.error("Please fill out all required fields");
        setIsLoading(false);
        return;
      }

      console.log("Submitting form data:", formData);
      
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: {
          price: 995, // $9.95 in cents
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

      // Redirect to Stripe Checkout
      if (data?.url) {
        console.log("Redirecting to Stripe checkout:", data.url);
        window.location.href = data.url;
      } else {
        console.error("No checkout URL returned:", data);
        toast.error("Unable to process your order. Please try again.");
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="order" className="py-10 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Book Image & Description */}
          <div className="text-center md:text-left">
            <img 
              src="/lovable-uploads/Elevate Higher Book Mockup 5.jpg" 
              alt="Your Book Title" 
              className="mx-auto md:mx-0 w-full max-w-3xl h-[600px] object-cover shadow-lg rounded-lg"
            />
            <h3 className="text-xl md:text-2xl font-semibold mt-4 md:mt-6">
              Discover the Secrets to <span className="text-primary">Success</span>
            </h3>
            <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-base">
              This book will transform your mindset and help you achieve greatness.
              Grab your <strong>FREE copy</strong> today—just cover shipping & handling!
            </p>
          </div>

          {/* Order Form */}
          <div className="bg-white shadow-xl rounded-lg p-4 md:p-8">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 md:mb-4">
              Claim Your FREE Copy Now
            </h2>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-4 md:mb-6">
              Just Cover Shipping & Handling
            </p>

            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
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
                  <label className="block text-sm font-medium mb-1 md:mb-2">State</label>
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
                  <label className="block text-sm font-medium mb-1 md:mb-2">ZIP Code</label>
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
                className="w-full py-3 md:py-4 text-base md:text-lg font-bold bg-primary hover:bg-primary-hover rounded-lg shadow-md"
              >
                {isLoading ? "Processing..." : "YES! RUSH ME MY FREE COPY"}
              </Button>

              <p className="text-center text-xs md:text-sm text-gray-600 mt-2 md:mt-4">
                By clicking above, you agree to pay shipping & handling of $9.95
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
