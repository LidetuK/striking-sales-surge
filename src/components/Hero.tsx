
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight mb-8 animate-fade-in">
            The Secret Selling System That Generated Over
            <span className="text-primary"> $7.8 Billion</span> in Revenue
          </h1>
          
          <div className="flex justify-center mb-12">
            <img 
              src="/lovable-uploads/795cb83b-120a-4c29-b425-8a6c120e28af.png"
              alt="Sell Like Crazy Book"
              className="w-64 md:w-80 h-auto shadow-2xl transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white text-lg px-8 py-6 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Your Free Copy – Just Cover Shipping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
            <img src="/lovable-uploads/f6b0a3dc-7488-4a78-be2b-516dc4cad3ae.png" alt="Forbes" className="h-8 object-contain" />
            <img src="/lovable-uploads/bad030fb-a2d1-435e-835a-f791c466ad8c.png" alt="Inc" className="h-8 object-contain" />
            <img src="/lovable-uploads/069cbe00-64ff-428a-a248-b4593a2f17b2.png" alt="Entrepreneur" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
