
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // You can verify the session with your backend if needed
    if (sessionId) {
      // Simple timeout to simulate verification
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
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
          <p className="text-gray-600 mb-8">
            Your FREE copy of "Elevate Higher" is on its way! We've sent a confirmation email with your order details.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
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
