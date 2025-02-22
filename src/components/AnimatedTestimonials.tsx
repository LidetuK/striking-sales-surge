
import React from 'react';

interface Testimonial {
  name: string;
  rating: number;
  title: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Dr E.",
    rating: 5,
    title: "Audacity works! Attention Value count",
    text: "These experiences result in business exact actions which are missing from most marketing strategies. I find them compelling."
  },
  {
    name: "Ahmed",
    rating: 5,
    title: "Certified MONEY MAKER",
    text: "Do you want to scale and grow your business? Read this book. If not, don't read this book."
  },
  {
    name: "Steve B.",
    rating: 5,
    title: "A Fresh Look at Marketing",
    text: "I learned a lot from this book and it's changed the way I do my marketing. I would recommend this to anyone who wants to really get a fresh take on how to market effectively."
  },
  {
    name: "John D.",
    rating: 5,
    title: "Game Changing Marketing",
    text: "This book contains practical strategies that have transformed my business approach completely."
  },
  {
    name: "Sarah M.",
    rating: 5,
    title: "Worth Every Penny",
    text: "The insights in this book have already paid for themselves many times over in my business."
  },
  {
    name: "Michael R.",
    rating: 5,
    title: "Revolutionary Approach",
    text: "A must-read for anyone serious about growing their business in today's digital landscape."
  }
];

const testimonialSets = [
  testimonials.slice(0, 6),
  testimonials.slice(0, 6),
  testimonials.slice(0, 6)
];

const AnimatedTestimonials = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Customer Reviews</h2>
        <div className="flex flex-col gap-16">
          {testimonialSets.map((set, setIndex) => (
            <div key={setIndex} className="relative overflow-hidden">
              <div 
                className="flex gap-8 animate-[slideLeft_30s_linear_infinite]"
                style={{
                  minWidth: "200%",
                  display: "flex",
                  justifyContent: "flex-start"
                }}
              >
                {/* First set of testimonials */}
                <div className="flex gap-8 min-w-full">
                  {set.map((testimonial, idx) => (
                    <div
                      key={`${setIndex}-${idx}`}
                      className="flex-shrink-0 w-80 p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300"
                    >
                      <div className="mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-primary">{testimonial.title}</h3>
                      <p className="text-gray-300 mb-4">{testimonial.text}</p>
                      <p className="text-sm text-gray-400">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-8 min-w-full">
                  {set.map((testimonial, idx) => (
                    <div
                      key={`${setIndex}-${idx}-duplicate`}
                      className="flex-shrink-0 w-80 p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300"
                    >
                      <div className="mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-primary">{testimonial.title}</h3>
                      <p className="text-gray-300 mb-4">{testimonial.text}</p>
                      <p className="text-sm text-gray-400">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
