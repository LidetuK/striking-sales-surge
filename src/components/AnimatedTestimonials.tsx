import React, { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonialSections = {
  "Marketing": [
    { name: "Nacima", rating: 5, title: "All in One", text: "This book contains everything from the offer to the process. The images, strategies, statistics, and real-life examples make it even more compelling." },
    { name: "Steve R.", rating: 5, title: "A Fresh Look at Marketing", text: "I learned a lot from this book and it's changed the way I do my marketing. I would recommend this to anyone who is ready for a fresh take." },
    { name: "Abdul A.", rating: 5, title: "Got everything that the OG marketing experts talk", text: "He knows exactly what he is doing whether it is in his book or through. The man knows marketing inside out and some of his tactics are like the OGs." }
  ],
  "Business Growth": [
    { name: "Juve", rating: 5, title: "I am amazed!", text: "This book clarified what steps to take to improve my business branding and focus. I would highly recommend it to anybody who wants to learn how to increase sales." },
    { name: "Gabriel F.", rating: 5, title: "Dream to BUSINESS", text: "I always dreamed of building a business and enjoying the freedom of working from my laptop, traveling the world and living on my own terms. Thanks to this book." },
    { name: "Dylan", rating: 5, title: "Finally a book that actually delivers great value.", text: "Great book, I would definitely recommend it to anyone who is interested in being an entrepreneur. Reading the book definitely opened my eyes." }
  ],
  "Personal Success": [
    { name: "Carly", rating: 5, title: "Great Insights", text: "Great book with practical advice and inspiring stories. Helped me a lot in structuring my own journey." },
    { name: "Inna", rating: 5, title: "Sell Like Crazy", text: "I'm not a reader! But I read this book and loved every bit of it. Highly recommend!" },
    { name: "Marek", rating: 5, title: "The best marketing book I've ever read", text: "I've never seen EU writing and speaking about these things like Sabri. We are working on it. Greetings from Slovakia." }
  ]
};

const AnimatedTestimonials = () => {
  const [pausedSections, setPausedSections] = useState({});

  const handleMouseEnter = (index) => {
    setPausedSections((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setPausedSections((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section className="py-12 bg-[#121212] w-full overflow-hidden">
      {Object.values(testimonialSections).map((testimonials, sectionIndex) => (
        <div key={sectionIndex} className="mb-10">
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex w-max gap-6"
              animate={pausedSections[sectionIndex] ? {} : { x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              onMouseEnter={() => handleMouseEnter(sectionIndex)}
              onMouseLeave={() => handleMouseLeave(sectionIndex)}
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="w-[350px] p-6 rounded-lg bg-[#1A1A1A] border border-gray-800 text-white"
                >
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{testimonial.title}</h3>
                  <p className="text-gray-300 mb-3 text-base leading-relaxed">{testimonial.text}</p>
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-sm text-gray-400">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AnimatedTestimonials;
