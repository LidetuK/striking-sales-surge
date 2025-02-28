import React, { useEffect } from "react";
import { Star } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

const testimonialSections = {
  "Marketing": [
    { name: "Nacima", rating: 5, title: "All in One", text: "Elevate Higher gave me a complete roadmap for marketing success. The strategies are practical and easy to apply." },
    { name: "Steve R.", rating: 5, title: "A Fresh Look at Marketing", text: "This book changed my approach to marketing. The case studies were particularly insightful." },
    { name: "Abdul A.", rating: 5, title: "Mastering Modern Marketing", text: "The book covers everything, from branding to conversion. A must-read for serious marketers." }
  ],
  "Personal Success": [
    { name: "Carly", rating: 5, title: "Life-Changing", text: "Elevate Higher helped me find purpose in my work and achieve greater success." },
    { name: "Inna", rating: 5, title: "A Book for Achievers", text: "I feel more motivated than ever! The principles are transformative." },
    { name: "Marek", rating: 5, title: "Step-by-Step Success", text: "Practical steps that actually work. I've seen remarkable progress." }
  ],
  "Business Growth": [
    { name: "James K.", rating: 5, title: "Exceptional Value", text: "This transformed how I approach business strategy. The ROI has been incredible." },
    { name: "Sarah M.", rating: 5, title: "Revolutionary Approach", text: "The business insights are gold. My company has grown 300% since implementing these strategies." },
    { name: "Michael P.", rating: 5, title: "Business Essential", text: "Every entrepreneur needs this. The frameworks for scaling are invaluable." }
  ]
};

const TestimonialSlider = () => {
  const controlsSection1 = useAnimationControls();
  const controlsSection2 = useAnimationControls();
  const controlsSection3 = useAnimationControls();

  const startAnimation = async (control) => {
    await control.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          duration: 45,
          ease: "linear",
          repeat: Infinity,
        },
      },
    });
  };

  useEffect(() => {
    startAnimation(controlsSection1);
    startAnimation(controlsSection2);
    startAnimation(controlsSection3);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
       
      </div>

      {Object.entries(testimonialSections).map(([sectionName, testimonials], sectionIndex) => (
        <div key={sectionName} className="mb-12 last:mb-0">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-6 px-4"
              animate={[controlsSection1, controlsSection2, controlsSection3][sectionIndex]}
              initial={{ x: "0%" }}
              style={{ width: "fit-content" }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className="w-[350px] backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="flex mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-gray-400 text-sm">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
