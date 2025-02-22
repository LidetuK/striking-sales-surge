
import React from 'react';
import { Star } from 'lucide-react';

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
    text: "He knows exactly what he is doing whether it is in his book or through. He man knows marketing inside out and some of his tactics are like the OGs."
  },
  {
    name: "Dylan",
    rating: 5,
    title: "Finally a book that actually delivers great value.",
    text: "Great book, I would definitely recommend it to anyone who is interested in being an entrepreneur. Reading the book definitely open my eyes."
  }
];

const testimonialSets = [
  testimonials.slice(0, 6),
  testimonials.slice(0, 6),
  testimonials.slice(0, 6)
];

const AnimatedTestimonials = () => {
  return (
    <section className="py-12 bg-[#121212] overflow-hidden w-full">
      <div className="w-full">
        <div className="flex flex-col gap-6">
          {testimonialSets.map((set, setIndex) => (
            <div key={setIndex} className="relative overflow-hidden">
              <div 
                className={`flex gap-4 ${
                  setIndex % 2 === 0 
                    ? 'animate-[slideLeft_80s_linear_infinite]' 
                    : 'animate-[slideRight_80s_linear_infinite]'
                }`}
                style={{
                  minWidth: "200%",
                  display: "flex",
                  justifyContent: "flex-start",
                  animationDirection: setIndex % 2 === 0 ? 'normal' : 'reverse',
                }}
              >
                {/* First set of testimonials */}
                <div className="flex gap-4 min-w-full">
                  {set.map((testimonial, idx) => (
                    <div
                      key={`${setIndex}-${idx}`}
                      className="flex-shrink-0 w-[300px] p-4 rounded-lg bg-[#1A1A1A] border border-gray-800"
                    >
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-base mb-2 text-white">{testimonial.title}</h3>
                      <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">{testimonial.text}</p>
                      <div className="pt-2 border-t border-gray-800">
                        <p className="text-sm text-gray-500">{testimonial.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-4 min-w-full">
                  {set.map((testimonial, idx) => (
                    <div
                      key={`${setIndex}-${idx}-duplicate`}
                      className="flex-shrink-0 w-[300px] p-4 rounded-lg bg-[#1A1A1A] border border-gray-800"
                    >
                      <div className="flex mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-base mb-2 text-white">{testimonial.title}</h3>
                      <p className="text-gray-400 mb-3 text-sm leading-relaxed line-clamp-3">{testimonial.text}</p>
                      <div className="pt-2 border-t border-gray-800">
                        <p className="text-sm text-gray-500">{testimonial.name}</p>
                      </div>
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
