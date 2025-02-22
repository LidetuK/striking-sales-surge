
import React from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import AuthorBio from "@/components/AuthorBio";
import Countdown from "@/components/Countdown";
import FAQ from "@/components/FAQ";
import BonusSection from "@/components/BonusSection";
import OrderForm from "@/components/OrderForm";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";

const Index = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <AuthorBio />
      <Countdown />
      <AnimatedTestimonials />
      <BonusSection />
      <FAQ />
      <OrderForm />
      <FinalCTA />
    </div>
  );
};

export default Index;
