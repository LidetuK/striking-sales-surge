
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
    text: "I learned a lot from this book and it's changed the way I do my marketing. I would recommend this to anyone who wants to really get a fresh take on how to market effectively in our rapidly changing world."
  }
];

const AnimatedTestimonials = () => {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`
                p-6 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition-all duration-300
                hover:scale-105 cursor-pointer relative
                animate-[slide_15s_linear_infinite]
                ${idx === 0 ? 'hover:animate-none' : ''}
                ${idx === 1 ? 'hover:animate-none animation-delay-1000' : ''}
                ${idx === 2 ? 'hover:animate-none animation-delay-2000' : ''}
              `}
              style={{
                animation: `slide${idx === 0 ? 'Left' : idx === 1 ? 'Up' : 'Right'} 15s linear infinite`,
                animationDirection: idx === 1 ? 'alternate' : 'normal'
              }}
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
    </section>
  );
};

export default AnimatedTestimonials;
