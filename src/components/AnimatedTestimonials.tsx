import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  rating: number;
  title: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Nacima",
    rating: 5,
    title: "All in One",
    text: "This book contains everything from the offer to the process. The images, strategies, statistics, and real-life examples make it even more compelling."
  },
  {
    name: "Juve",
    rating: 5,
    title: "I am amazed!",
    text: "This book clarified what steps to take to improve my business branding and focus. I would highly recommend it to anybody who wants to learn how to increase sales."
  },
  {
    name: "Steve R.",
    rating: 5,
    title: "A Fresh Look at Marketing",
    text: "I learned a lot from this book and it's changed the way I do my marketing. I would recommend this to anyone who is ready for a fresh take."
  },
  {
    name: "Gabriel F.",
    rating: 5,
    title: "Dream to BUSINESS",
    text: "I always dreamed of building a business and enjoying the freedom of working from my laptop, traveling the world and living on my own terms. Thanks to this book."
  },
  {
    name: "Abdul A.",
    rating: 5,
    title: "Got everything that the OG marketing experts talk",
    text: "He knows exactly what he is doing whether it is in his book or through. The man knows marketing inside out and some of his tactics are like the OGs."
  },
  {
    name: "Dylan",
    rating: 5,
    title: "Finally a book that actually delivers great value.",
    text: "Great book, I would definitely recommend it to anyone who is interested in being an entrepreneur. Reading the book definitely opened my eyes."
  }
];

const AnimatedTestimonials = () => {
  const [pausedSections, setPausedSections] = useState<{ [key: number]: boolean }>({});

  return (
    <section className="py-12 bg-[#121212] w-full overflow-hidden">
      <div className="w-full flex flex-col gap-6">
        {["slideLeft", "slideRight", "slideDiagonal"].map((animation, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden w-full"
            animate={
              pausedSections[index]
                ? {}
                : { x: animation === "slideLeft" ? ["100%", "-100%"] : animation === "slideRight" ? ["-100%", "100%"] : ["100%", "-100%"] }
            }
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            onMouseEnter={() => setPausedSections((prev) => ({ ...prev, [index]: true }))}
            onMouseLeave={() => setPausedSections((prev) => ({ ...prev, [index]: false }))}
          >
            <div className="flex gap-4 w-max">
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[350px] p-6 rounded-lg bg-[#1A1A1A] border border-gray-800 text-white"
                >
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{testimonial.title}</h3>
                  <p className="text-gray-300 mb-3 text-base leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-sm text-gray-400">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
