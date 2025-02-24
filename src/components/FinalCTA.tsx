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
    <section className="py-20 bg-[#FFB700] text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-7xl font-extrabold uppercase tracking-wide leading-tight text-white-600">
        Don't Miss This Opportunity to Transform Your Business
        </h1>
        
        <div className="mb-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0" />
              <span className="text-lg">{benefit}</span>
            </div>
          ))}
        </div>

        
        <button
            className="bg-red-600 hover:bg-red-700 text-white text-2xl px-16 py-8 mt-8 font-bold uppercase rounded-xl transform transition-all duration-300 hover:scale-110 shadow-xl"
            onClick={() =>
              document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Claim Your Free Copy
          </button>

        <p className="mt-6 text-lg opacity-90">
          Limited Time Offer - Act Now While Supplies Last!
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
