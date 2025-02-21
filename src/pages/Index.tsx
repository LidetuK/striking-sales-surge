
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import AuthorBio from "@/components/AuthorBio";
import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import BonusSection from "@/components/BonusSection";
import OrderForm from "@/components/OrderForm";
import FinalCTA from "@/components/FinalCTA";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Testimonials />
      <div className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm">5558 reviews</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mt-4">
              "THE #1 SALES SYSTEM TO SKYROCKET YOUR BUSINESS"
            </h2>
          </div>
          <img 
            src="/lovable-uploads/795cb83b-120a-4c29-b425-8a6c120e28af.png"
            alt="Sell Like Crazy Book"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      </div>
      <AuthorBio />
      <Benefits />
      <BonusSection />
      <FAQ />
      <OrderForm />
      <FinalCTA />
      <Countdown />
    </div>
  );
};

export default Index;
