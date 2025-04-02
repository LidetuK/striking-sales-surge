
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check, FileText, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Success = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sessionData, setSessionData] = useState<any>(null);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSessionData = async () => {
      if (!sessionId) return;
      
      try {
        // This would typically call a function to verify the session
        // We're simulating this for now
        setTimeout(() => {
          // Mock data - in production you'd get this from your backend
          const mockSessionData = {
            productType: Math.random() > 0.5 ? "digital" : "physical",
            customerName: "Customer",
            customerEmail: "customer@example.com"
          };
          setSessionData(mockSessionData);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error verifying session:", error);
        setIsLoading(false);
      }
    };

    fetchSessionData();
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">Invalid Order</h1>
        <p className="text-gray-600 mb-8">We couldn't find your order details.</p>
        <Button onClick={() => window.location.href = "/"}>Return to Homepage</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {isLoading ? (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Verifying your order...</p>
        </div>
      ) : (
        <div className="text-center max-w-lg">
          <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-green-600 mb-4">Order Successful!</h1>
          <p className="text-xl mb-2">Thank You For Your Order</p>
          
          {sessionData?.productType === "digital" ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center text-green-600 mb-4">
                <FileText className="h-8 w-8 mr-2" />
                <span className="font-semibold">Digital Copy</span>
              </div>
              <p className="text-gray-600">
                Your digital copy of "Elevate Higher" has been sent to your email address. Please check your inbox (and spam folder) for the download link.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-blue-700">Check your email now!</p>
                <p className="text-sm text-blue-600">
                  We've sent your digital book to the email address you provided. If you don't see it, please check your spam/junk folder.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-center text-green-600 mb-4">
                <Truck className="h-8 w-8 mr-2" />
                <span className="font-semibold">Physical Book</span>
              </div>
              <p className="text-gray-600">
                Your physical copy of "Elevate Higher" will be shipped to your address shortly. We've sent a confirmation email with your order details.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="font-medium text-yellow-700">Shipping Information</p>
                <p className="text-sm text-yellow-600">
                  USA & Canada: Your book will be delivered within 14-25 business days.<br />
                  Europe: Your book will be delivered within 14-30 business days.
                </p>
              </div>
            </div>
          )}
          
          <div className="bg-gray-100 p-4 rounded-lg my-8">
            <p className="font-medium">Order Reference</p>
            <p className="text-sm text-gray-500 break-all">{sessionId}</p>
          </div>
          
          <Button onClick={() => window.location.href = "/"} className="px-8">
            Return to Homepage
          </Button>
        </div>
      )}
    </div>
  );
};

export default Success;
