
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Transform your business with proven sales strategies",
  "Generate unlimited leads and sales on autopilot",
  "Close high-ticket deals with confidence",
  "Build a powerful sales team that delivers results"
];

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Don't Miss This Opportunity to Transform Your Business
        </h2>
        
        <div className="mb-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          className="bg-black hover:bg-black/90 text-white text-xl px-8 py-6 rounded-lg transform transition-all duration-300 hover:scale-105"
          onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
        >
          CLAIM MY FREE COPY NOW
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <p className="mt-6 text-lg opacity-90">
          Limited Time Offer - Act Now While Supplies Last!
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
