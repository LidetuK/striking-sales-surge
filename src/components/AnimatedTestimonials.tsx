
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
    <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          What Our Readers Say
        </h2>
        <div className="flex flex-col gap-16">
          {testimonialSets.map((set, setIndex) => (
            <div key={setIndex} className="relative overflow-hidden group">
              <div 
                className={`flex gap-8 ${
                  setIndex === 1 
                    ? 'animate-[slideRight_40s_linear_infinite]' 
                    : 'animate-[slideLeft_30s_linear_infinite]'
                }`}
                style={{
                  minWidth: "200%",
                  display: "flex",
                  justifyContent: "flex-start",
                  animationDirection: setIndex === 1 ? 'reverse' : 'normal',
                }}
              >
                {/* First set of testimonials */}
                <div className="flex gap-8 min-w-full">
                  {set.map((testimonial, idx) => (
                    <div
                      key={`${setIndex}-${idx}`}
                      className={`flex-shrink-0 w-80 p-6 rounded-xl backdrop-blur-lg 
                        ${setIndex === 0 ? 'bg-gradient-to-br from-purple-900/80 to-indigo-900/80 hover:from-purple-800/80 hover:to-indigo-800/80' : 
                          setIndex === 1 ? 'bg-gradient-to-br from-orange-900/80 to-red-900/80 hover:from-orange-800/80 hover:to-red-800/80' :
                          'bg-gradient-to-br from-pink-900/80 to-rose-900/80 hover:from-pink-800/80 hover:to-rose-800/80'
                        } 
                        shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-white/90">{testimonial.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-400 font-medium">{testimonial.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-8 min-w-full">
                  {set.map((testimonial, idx) => (
                    <div
                      key={`${setIndex}-${idx}-duplicate`}
                      className={`flex-shrink-0 w-80 p-6 rounded-xl backdrop-blur-lg 
                        ${setIndex === 0 ? 'bg-gradient-to-br from-purple-900/80 to-indigo-900/80 hover:from-purple-800/80 hover:to-indigo-800/80' : 
                          setIndex === 1 ? 'bg-gradient-to-br from-orange-900/80 to-red-900/80 hover:from-orange-800/80 hover:to-red-800/80' :
                          'bg-gradient-to-br from-pink-900/80 to-rose-900/80 hover:from-pink-800/80 hover:to-rose-800/80'
                        } 
                        shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
                    >
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-white/90">{testimonial.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-sm text-gray-400 font-medium">{testimonial.name}</p>
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
