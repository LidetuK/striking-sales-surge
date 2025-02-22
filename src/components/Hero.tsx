import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#FFB700] pt-16 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-[#FFD700]">
          EXCLUSIVE OFFER FOR 2024 - AN AMAZON BESTSELLER
        </p>
        <p className="text-sm mt-2 uppercase tracking-wider italic">
          ADVERTISING MADMAN’S CONFESSIONAL BOMBSHELL...
        </p>
        
        <h6 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mt-4">
          A renowned serial entrepreneur, business investor, life guru, style maverick, humanitarian, and philanthropist is generously <br />
          giving away 10,000 copies of his #1 bestselling book. This gesture aims to demonstrate the effectiveness of his '7 Secret Strategies to Achieve Unprecedented Abundance in Your Life. Simply, to prove his point that these strategies WORK!
        </h6>

        {/* Media Section */}
        <div className="relative flex items-center justify-center mt-6">
          {/* Left Images */}
          <div className="flex flex-col gap-2 w-1/6 hidden md:block">
            <img src="/lovable-uploads/download.png" alt="Testimonial 1" className="rounded-lg shadow-lg" />
            <img src="/lovable-uploads/download (1).png" alt="Testimonial 2" className="rounded-lg shadow-lg" />
          </div>

          {/* Video */}
          <div className="relative w-full md:w-3/5">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg shadow-xl"
                src="https://www.youtube.com/embed/6LwkxgJpv_8"
                title="Sales System Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          {/* Right Images */}
          <div className="flex flex-col gap-2 w-1/6 hidden md:block">
            <img src="/lovable-uploads/download (3).png" alt="Testimonial 4" className="rounded-lg shadow-lg" />
            <img src="/lovable-uploads/download (4).png" alt="Testimonial 5" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Call to Action Button */}
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

        {/* Logos */}
<div className="mt-8 flex flex-wrap justify-center items-center gap-6 opacity-80">
  <img src="/lovable-uploads/logo.png" alt="Forbes" className="h-24" />
</div>

       
      </div>
    </div>
  );
};

export default Hero;