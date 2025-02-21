
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#FF4405] pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <p className="text-sm mb-4 uppercase tracking-wider">ADVERTISING MADMAN'S CONFESSIONAL BOMBSHELL...</p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
          "WHY IS THIS SHARK TANK INVESTOR GIVING AWAY HIS $7.8 BILLION DOLLAR CLIENT GETTING 'UNICORN FUNNEL' IN HIS CONTROVERSIAL BESTSELLING BOOK"
        </h1>
        
        <p className="text-xl mb-8">
          Shark Tank Investor Agrees To Give Away 10,000 Copies Of His #1<br />
          Bestselling Book Just To Prove His "Secret Selling System" Works
        </p>

        {/* Video placeholder - you would need to implement actual video functionality */}
        <div className="max-w-2xl mx-auto mb-8 aspect-video bg-black/20 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
        </div>

        <Button 
          size="lg"
          className="bg-black hover:bg-black/90 text-white text-lg px-8 py-6 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
        >
          RUSH ME A FREE COPY
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="mt-4 text-sm opacity-80">
          * LIMITED STOCK OF THIS BOOK AS OF FEBRUARY 21 IS LOW
        </p>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <img src="/lovable-uploads/f6b0a3dc-7488-4a78-be2b-516dc4cad3ae.png" alt="Forbes" className="h-8 brightness-0 invert opacity-80" />
          <img src="/lovable-uploads/bad030fb-a2d1-435e-835a-f791c466ad8c.png" alt="Inc" className="h-8 brightness-0 invert opacity-80" />
          <img src="/lovable-uploads/069cbe00-64ff-428a-a248-b4593a2f17b2.png" alt="Entrepreneur" className="h-8 brightness-0 invert opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
