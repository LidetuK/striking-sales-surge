import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#FFB700] pt-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#000000]">
          A renowned serial entrepreneur, business investor, life guru,
        </p>
        <p className="text-sm mt-2 uppercase tracking-wider italic">
          style maverick, humanitarian, and philanthropist is generously 
        </p>

        {/* Main headline with structured alignment */}
        <div className="space-y-2">
          <p className="text-6xl sm:text-7xl md:text-7xl font-bold leading-[1.3]">
            GIVING AWAY 10,000 COPIES
          </p>
          <p className="text-6xl sm:text-7xl md:text-7xl font-bold leading-[1.3]">
            OF HIS #1 BESTSELLING BOOK
          </p>
        </div>

        {/* Alignment fix section */}
        <div className="space-y-2 mt-6">
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
            This Gesture Aims To Demonstrate The 
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
           Effectiveness of his '7 Secret Strategies
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
           To Achieve Unprecedented Abundance 
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
          
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
          in Your Life' Simply to Prove His Point
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
          
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3]">
         That These Strategies WORK!
          </p>
        </div>

        <div className="relative flex items-center justify-center mt-6">
          <img 
            src="/lovable-uploads/download (1).png" 
            alt="Main Feature" 
            className="rounded-lg shadow-xl w-[90%] md:w-[85%] lg:w-[80%]"
          />
        </div>

        <Button 
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white text-2xl px-16 py-8 mt-8 font-bold uppercase rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
        >
          RUSH ME A FREE COPY
          <ArrowRight className="ml-2 h-6 w-6" />
        </Button>

        <p className="mt-4 text-sm opacity-80 font-bold">
          HURRY! STOCK OF THIS BOOK AS OF FEBRUARY 21 IS LOW
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-80 mb-32">
          <img 
            src="/lovable-uploads/Screenshot_2025-02-24_162919-removebg-preview.png" 
            alt="Forbes" 
            className="h-32 md:h-40"
          />
        </div>
      </div>

      {/* Curved Wave Section */}
      <div className="absolute -bottom-0 left-1 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 320"
          className="relative w-full h-[180px] md:h-[280px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,320L48,304C96,288,192,256,288,245.3C384,235,480,245,576,250.7C672,256,768,256,864,250.7C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="duration-300 ease-in-out"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
