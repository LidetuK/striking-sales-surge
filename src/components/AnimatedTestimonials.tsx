import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

const testimonialSections = {
  "Marketing": [
    { name: "Nacima", rating: 5, title: "All in One", text: "Elevate Higher gave me a complete roadmap for marketing success. The strategies are practical and easy to apply." },
    { name: "Steve R.", rating: 5, title: "A Fresh Look at Marketing", text: "This book changed my approach to marketing. The case studies were particularly insightful." },
    { name: "Abdul A.", rating: 5, title: "Mastering Modern Marketing", text: "The book covers everything, from branding to conversion. A must-read for serious marketers." },
    { name: "Lina K.", rating: 5, title: "Transformative Guide", text: "I applied Elevate Higher's marketing tactics and saw immediate growth in my business." }
  ],
  "Personal Success": [
    { name: "Carly", rating: 5, title: "Life-Changing", text: "Elevate Higher helped me find purpose in my work." },
    { name: "Inna", rating: 5, title: "A Book for Achievers", text: "I feel more motivated than ever!" },
    { name: "Marek", rating: 5, title: "Step-by-Step Success", text: "Practical steps that actually work." },
    { name: "Sophia A.", rating: 5, title: "Transformative Read", text: "This book shifted my mindset completely." }
  ]
};

const AnimatedTestimonials = () => {
  const controlsTop = useAnimationControls();
  const controlsBottom = useAnimationControls();
  
  const numTestimonials = Object.values(testimonialSections)[0].length; // Assume all sections have the same count
  const baseDuration = 60;
  const adjustedDuration = (numTestimonials / 3) * baseDuration;

  useEffect(() => {
    controlsTop.start({
      x: "-100%", // Both move left
      transition: {
        duration: adjustedDuration,
        ease: "linear",
        repeat: Infinity
      }
    });

    controlsBottom.start({
      x: "-100%", // Both move left
      transition: {
        duration: adjustedDuration,
        ease: "linear",
        repeat: Infinity, // Infinite loop for bottom section
        repeatDelay: 0 // Ensure no pause between loops
      }
    });
  }, []);

  const handleMouseEnter = (controls) => {
    controls.stop();
  };

  const handleMouseLeave = (controls, direction) => {
    controls.start({
      x: direction,
      transition: {
        duration: adjustedDuration,
        ease: "linear",
        repeat: Infinity
      }
    });
  };

  return (
    <section className="py-12 bg-[#121212] w-full overflow-hidden">
      {Object.values(testimonialSections).map((testimonials, sectionIndex) => {
        const controls = sectionIndex === 0 ? controlsTop : controlsBottom;
        const direction = "-100%"; // Both sections move left

        return (
          <div key={sectionIndex} className="mb-10">
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex w-max gap-4 px-4"
                initial={{ x: "0%" }}
                animate={controls}
                transition={{ 
                  duration: adjustedDuration,
                  ease: "linear",
                  repeat: Infinity
                }}
                onMouseEnter={() => handleMouseEnter(controls)}
                onMouseLeave={() => handleMouseLeave(controls, direction)}
              >
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="w-[320px] p-6 rounded-lg bg-[#1A1A1A] border border-gray-800 text-white flex flex-col"
                  >
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{testimonial.title}</h3>
                    <p className="text-gray-300 mb-3 text-base leading-relaxed flex-grow">{testimonial.text}</p>
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-sm text-gray-400">{testimonial.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AnimatedTestimonials;
