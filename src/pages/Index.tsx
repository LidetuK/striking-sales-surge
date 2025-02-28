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
import RushMe from "@/components/RushMe";
import BookShowcase from "@/components/BookShowcase";
import LimitedOffer from "@/components/LimitedOffer";
import ConsultationOffer from "@/components/ConsultationOffer";
import TestimonialSlider from "@/components/TestimonialSlider";
import CallToAction from "@/components/CallToAction";
import BookOne from "@/components/bookone";





const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <Benefits />
      <Testimonials />
      <RushMe />
      <OrderForm />
      <AuthorBio />
      <Countdown />
      <TestimonialSlider />
      <CallToAction />
      <Review/>
      <BonusSection />
      <BookShowcase />
      <LimitedOffer />
      <FinalCTA />
      <BookOne/>
      <FAQ />
      <ConsultationOffer />
      
      
    </div>
  );
};

export default Index;
