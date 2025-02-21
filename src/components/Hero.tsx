
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#FF4405] pt-16 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        <p className="text-sm mb-4 uppercase tracking-wider">ADVERTISING MADMAN'S CONFESSIONAL BOMBSHELL...</p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
          "WHY IS THIS SHARK TANK INVESTOR GIVING AWAY HIS $7.8 BILLION DOLLAR CLIENT GETTING 'UNICORN FUNNEL' IN HIS CONTROVERSIAL BESTSELLING BOOK"
        </h1>
        
        <p className="text-xl mb-8">
          Shark Tank Investor Agrees To Give Away 10,000 Copies Of His #1<br />
          Bestselling Book Just To Prove His "Secret Selling System" Works
        </p>

        <div className="relative max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Left testimonial images */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
              <img src="/lovable-uploads/f219b25d-d89c-468e-ba97-c149897a901d.png" alt="Testimonial 1" className="w-full rounded-lg shadow-lg" />
              <img src="/lovable-uploads/15aa6d11-958b-440d-bd79-b489673932a1.png" alt="Testimonial 2" className="w-full rounded-lg shadow-lg" />
              <img src="/lovable-uploads/8ebd4889-d01b-480e-942a-42139c5c9167.png" alt="Testimonial 3" className="w-full rounded-lg shadow-lg" />
            </div>

            {/* Center video */}
            <div className="w-full md:w-1/2">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full rounded-lg shadow-xl"
                  src="https://www.youtube.com/embed/6LwkxgJpv_8"
                  title="Sales System Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Right testimonial images */}
            <div className="flex flex-col gap-4 w-full md:w-1/4">
              <img src="/lovable-uploads/83fcbd8e-93e9-41d9-90f5-6b743dbc82f3.png" alt="Testimonial 4" className="w-full rounded-lg shadow-lg" />
              <img src="/lovable-uploads/b02dea9a-6f7a-40b0-8885-295a1f68b85e.png" alt="Testimonial 5" className="w-full rounded-lg shadow-lg" />
              <img src="/lovable-uploads/c708d9b0-a894-417e-9978-fff2239479cc.png" alt="Testimonial 6" className="w-full rounded-lg shadow-lg" />
            </div>
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
