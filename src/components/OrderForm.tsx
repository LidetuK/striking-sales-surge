import { Button } from "@/components/ui/button";
import { Lock, CreditCard, Shield } from "lucide-react";

const OrderForm = () => {
  return (
    <section id="order" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Book Image & Description */}
          <div className="text-center md:text-left">
            
            <img 
  src="/lovable-uploads/download (1).png" 
  alt="Your Book Title" 
  className="mx-auto md:mx-0 w-320 md:w-896 h-auto shadow-lg rounded-lg"
/>

            <h3 className="text-2xl font-semibold mt-6">
              Discover the Secrets to <span className="text-primary">Success</span>
            </h3>
            <p className="text-gray-600 mt-4">
              This book will transform your mindset and help you achieve greatness.
              Grab your **FREE copy** today—just cover shipping & handling!
            </p>
          </div>

          {/* Order Form */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-4xl font-bold text-center mb-4">
              Claim Your FREE Copy Now
            </h2>
            <p className="text-xl text-gray-600 text-center mb-6">
              Just Cover Shipping & Handling
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Shipping Address</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">City</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">State</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ZIP Code</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Security Icons */}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 my-6">
                <div className="flex items-center">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Money-Back Guarantee</span>
                </div>
              </div>

              {/* Order Button */}
              <Button 
                type="submit"
                className="w-full py-4 text-lg font-bold bg-primary hover:bg-primary-hover rounded-lg shadow-md"
              >
                YES! RUSH ME MY FREE COPY
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
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
