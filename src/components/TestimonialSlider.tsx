import React, { useEffect } from "react";
import { Star } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

const testimonialSections = {
  "Marketing": [
    { name: "Nacima", rating: 5, title: "All in One", text: "Elevate Higher gave me a complete roadmap for marketing success. The strategies are practical and easy to apply." },
    { name: "Steve R.", rating: 5, title: "A Fresh Look at Marketing", text: "This book changed my approach to marketing. The case studies were particularly insightful." },
    { name: "Abdul A.", rating: 5, title: "Mastering Modern Marketing", text: "The book covers everything, from branding to conversion. A must-read for serious marketers." },
    { name: "Lisa G.", rating: 5, title: "Marketing Made Simple", text: "The best marketing book I've read in years. Clear, concise, and effective strategies." },
    { name: "Tom B.", rating: 5, title: "Next-Level Marketing", text: "This book helped me take my campaigns to the next level with data-driven insights." },
    { name: "Hannah J.", rating: 5, title: "A Must-Have Guide", text: "I now have a clear structure for my marketing efforts, and my results are improving." },
    { name: "Ethan M.", rating: 5, title: "Breakthrough Tactics", text: "Packed with modern marketing strategies that actually work!" },
    { name: "Sophie L.", rating: 5, title: "Game-Changer", text: "I’ve doubled my leads thanks to the insights from this book." },
    { name: "Daniel K.", rating: 5, title: "Marketing Secrets Unlocked", text: "This book simplifies complex marketing concepts like never before." },
    { name: "Mia W.", rating: 5, title: "Worth Every Penny", text: "If you’re serious about marketing, this is the book you need." }
  ],
  "Personal Success": [
    { name: "Carly", rating: 5, title: "Life-Changing", text: "Elevate Higher helped me find purpose in my work and achieve greater success." },
    { name: "Inna", rating: 5, title: "A Book for Achievers", text: "I feel more motivated than ever! The principles are transformative." },
    { name: "Marek", rating: 5, title: "Step-by-Step Success", text: "Practical steps that actually work. I've seen remarkable progress." },
    { name: "David W.", rating: 5, title: "A Must-Read", text: "This book provided the mindset shift I needed to reach my goals faster." },
    { name: "Samantha L.", rating: 5, title: "Practical & Inspiring", text: "Unlike other self-help books, this one gives actionable steps that truly make a difference." },
    { name: "John T.", rating: 5, title: "Success Blueprint", text: "This book gave me a clear roadmap to achieving my personal and career goals." },
    { name: "Emma F.", rating: 5, title: "Confidence Booster", text: "I now have more confidence in myself and my abilities, thanks to this book." },
    { name: "Liam D.", rating: 5, title: "A Daily Motivator", text: "Every chapter pushes you to take action and build better habits." },
    { name: "Olivia S.", rating: 5, title: "Unbelievably Helpful", text: "Simple yet powerful principles that have completely changed my mindset." },
    { name: "Henry B.", rating: 5, title: "The Best Investment", text: "The best investment I’ve made in myself. Highly recommended!" }
  ],
  "Business Growth": [
    { name: "James K.", rating: 5, title: "Exceptional Value", text: "This transformed how I approach business strategy. The ROI has been incredible." },
    { name: "Sarah M.", rating: 5, title: "Revolutionary Approach", text: "The business insights are gold. My company has grown 300% since implementing these strategies." },
    { name: "Michael P.", rating: 5, title: "Business Essential", text: "Every entrepreneur needs this. The frameworks for scaling are invaluable." },
    { name: "Olivia R.", rating: 5, title: "Game-Changer", text: "The strategies in this book helped us streamline operations and maximize profits." },
    { name: "Daniel T.", rating: 5, title: "Strategic Success", text: "If you're serious about business growth, this book is a must-have resource." },
    { name: "Sophia V.", rating: 5, title: "From Struggle to Success", text: "This book transformed my struggling startup into a thriving business." },
    { name: "Ethan G.", rating: 5, title: "A Business Must-Read", text: "Practical advice that works in the real world. A must-read for entrepreneurs." },
    { name: "Jessica N.", rating: 5, title: "Scalable Growth Strategies", text: "This book helped us implement scalable processes to grow efficiently." },
    { name: "William C.", rating: 5, title: "Leadership & Growth", text: "Taught me how to become a better leader and scale my business." },
    { name: "Zara P.", rating: 5, title: "Maximizing Profits", text: "Clear, concise, and incredibly practical. Helped me triple my profits!" }
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
          duration: 75,
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
