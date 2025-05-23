
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
import CallToAction from "@/components/CallToAction";
import BookOne from "@/components/BookOne";
import Elevate from "@/components/Elevate";
import Ready from "@/components/Ready";
import AnimatedTestimonials from "@/components/AnimatedTestimonials";
import DualBookOffer from "@/components/DualBookOffer";
import SwaggerismPromo from "@/components/SwaggerismPromo";
import FlashSale from "@/components/FlashSale";

const Index = () => {
  return (
    <div className="relative">
      <FlashSale />
      <Hero />
      <Elevate />
      <Countdown />
      <Benefits />
      <AuthorBio />
      <RushMe />
      <OrderForm />
      <CallToAction />
      <AnimatedTestimonials />
      <DualBookOffer/>
      <SwaggerismPromo />
      <Ready />
      <BookShowcase />
      <Review />
      <Testimonials />
      <BookOne />
      <BonusSection />
      <LimitedOffer />
      <FinalCTA />
      <FAQ />
      <ConsultationOffer />
    </div>
  );
};

export default Index;
