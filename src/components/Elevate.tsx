
import { useIsMobile } from "@/hooks/use-mobile";

const Elevate = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-10 md:py-20 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl italic font-semibold">
          This book will help you
        </h2>
  
        {/* Divider */}
        <div className="text-2xl md:text-3xl font-bold mt-2">&gt;</div>
  
        {/* Subtext */}
        <p className="uppercase text-xs md:text-sm mt-2 tracking-wide">
          CHANGE YOUR LIFE. BE GR8R THAN. EARN MORE.
        </p>
  
        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-4 md:mt-6 leading-none">
          ELEVATE <br /> HIGHER
        </h1>
  
        {/* 7 Areas Section */}
        <p className="mt-4 md:mt-6 text-base md:text-lg font-semibold">
          7 Areas of your life to increase more and abundantly than ever
        </p>
  
        <p className="text-xs md:text-md mt-2 uppercase font-medium tracking-wide">
          Spiritual | Wellness | Knowledge | Relationship | Actions | Financial | Lifestyle
        </p>
  
        {/* Author */}
        <p className="mt-6 md:mt-8 text-base md:text-lg font-bold uppercase">BY: Resk 'Que</p>
  
        {/* Call to Action Button */}
        <div className="mt-6 md:mt-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-base sm:text-xl md:text-2xl px-8 sm:px-12 md:px-16 py-4 sm:py-6 md:py-8 font-bold uppercase rounded-xl transform transition-all duration-300 hover:scale-110 shadow-xl w-full sm:w-auto"
            onClick={() =>
              document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            RUSH ME A FREE COPY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Elevate;
