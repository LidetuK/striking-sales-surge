
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

import Review from "@/components/Review";
import BookShowcase from "@/components/BookShowcase";
import LimitedOffer from "@/components/LimitedOffer";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";

const Index = () => {
  return (
    <div className="relative">
     
      <Hero />
      <Benefits />
      <Testimonials />
      <OrderForm />
      <AuthorBio />
      <Countdown />
      <AnimatedTestimonials />
      <Review/>
      <BonusSection />
      <BookShowcase />
      <FAQ />
      <LimitedOffer />
      <FinalCTA />
    </div>
  );
};

export default Index;
