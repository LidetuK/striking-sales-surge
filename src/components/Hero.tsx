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

        <h6 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mt-4">
          Giving away 10,000 copies of his #1 bestselling book. This gesture aims to demonstrate the effectiveness of his '7 Secret Strategies to Achieve Unprecedented Abundance in Your Life. Simply, to prove his point that these strategies WORK!
        </h6>

        <div className="relative flex items-center justify-center mt-6">
          <img 
            src="/lovable-uploads/download (1).png" 
            alt="Main Feature" 
            className="rounded-lg shadow-xl w-4/5 md:w-3/4 lg:w-2/3"
          />
        </div>

        <Button 
          size="lg"
          className="bg-black hover:bg-black/90 text-white text-lg px-12 py-6 mt-6 font-bold uppercase rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg"
          onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
        >
          RUSH ME A FREE COPY
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <p className="mt-4 text-sm opacity-80 font-bold">
          HURRY! STOCK OF THIS BOOK AS OF FEBRUARY 21 IS LOW
        </p>

        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-80 mb-32">
          <img src="/lovable-uploads/logo.png" alt="Forbes" className="h-24" />
        </div>
      </div>

      {/* Curved Wave Section - Now properly separated */}
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