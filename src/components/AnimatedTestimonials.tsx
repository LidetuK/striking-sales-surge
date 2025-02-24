import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";

const testimonialSections = {
  "Marketing": [
    { name: "Nacima", rating: 5, title: "All in One", text: "Elevate Higher gave me a complete roadmap for marketing success. The strategies are practical and easy to apply." },
    { name: "Steve R.", rating: 5, title: "A Fresh Look at Marketing", text: "This book changed my approach to marketing. The case studies were particularly insightful." },
    { name: "Abdul A.", rating: 5, title: "Mastering Modern Marketing", text: "The book covers everything, from branding to conversion. A must-read for serious marketers." },
    { name: "Lina K.", rating: 5, title: "Transformative Guide", text: "I applied Elevate Higher's marketing tactics and saw immediate growth in my business." },
    { name: "Tom W.", rating: 5, title: "Practical and Effective", text: "The step-by-step approach makes this book stand out. Clear, concise, and powerful." },
    { name: "Sophia J.", rating: 5, title: "Best Marketing Book", text: "I finally understand digital marketing thanks to this book. It’s my go-to resource now." },
    { name: "Daniel P.", rating: 5, title: "Essential Reading", text: "No fluff, just actionable insights that deliver results. Highly recommended." },
    { name: "Oliver T.", rating: 5, title: "Game Changer", text: "Marketing success made simple. Elevate Higher is worth every penny." },
    { name: "Emma R.", rating: 5, title: "The Missing Piece", text: "I now have a clear strategy, thanks to this book. Brilliant!" },
    { name: "Chris L.", rating: 5, title: "Worth Every Word", text: "If you want real marketing results, this book is your solution." },
    { name: "Tina G.", rating: 5, title: "Strategic Insights", text: "I’ve implemented the techniques, and they actually work. Amazing book!" },
    { name: "Kevin M.", rating: 5, title: "Best Marketing Insights", text: "Clear, structured, and insightful. A must-read!" },
    { name: "Lisa B.", rating: 5, title: "A Marketing Bible", text: "I feel empowered to take my business to the next level." },
    { name: "George K.", rating: 5, title: "Excellent Content", text: "Marketing has never been this easy to understand." },
    { name: "Sarah H.", rating: 5, title: "Practical Marketing Guide", text: "I now approach marketing with confidence and clarity." },
    { name: "Noah W.", rating: 5, title: "Everything You Need", text: "From social media to funnels, this book covers it all." },
    { name: "Emily C.", rating: 5, title: "Mind-Blowing Strategies", text: "This book has completely changed my business." },
    { name: "Robert P.", rating: 5, title: "Marketing Masterpiece", text: "Absolutely brilliant and easy to follow." },
    { name: "Julie S.", rating: 5, title: "The Ultimate Guide", text: "Elevate Higher provides the exact formula to win in marketing." },
    { name: "Ethan T.", rating: 5, title: "Finally, a Book That Delivers", text: "This book makes marketing simple and effective." }
  ],
  "Business Growth": [
    { name: "Juve", rating: 5, title: "I am amazed!", text: "Elevate Higher gave me a structured plan to scale my business." },
    { name: "Gabriel F.", rating: 5, title: "Dream to BUSINESS", text: "This book made my business dream a reality." },
    { name: "Dylan", rating: 5, title: "Life-Changing Advice", text: "Clear steps to take any business to the next level." },
    { name: "Sarah M.", rating: 5, title: "Game Changer", text: "I applied the strategies, and my revenue doubled!" },
    { name: "Michael P.", rating: 5, title: "Worth Every Penny", text: "A roadmap to business success." },
    { name: "Jessica K.", rating: 5, title: "Strategic Gold", text: "Packed with actionable steps that work." },
    { name: "David L.", rating: 5, title: "Clear and Powerful", text: "No-nonsense strategies that deliver real growth." },
    { name: "Anna B.", rating: 5, title: "Unmatched Insights", text: "I feel more confident in my business approach now." },
    { name: "Omar H.", rating: 5, title: "10X Business Growth", text: "These methods work, period." },
    { name: "Mia F.", rating: 5, title: "Practical and Inspiring", text: "A must-read for entrepreneurs." },
    { name: "James K.", rating: 5, title: "The Secret to Scaling", text: "Finally, a guide that tells you what actually works." },
    { name: "Sophie W.", rating: 5, title: "Must-Read for Entrepreneurs", text: "I wish I had read this sooner!" },
    { name: "Lucas B.", rating: 5, title: "Profitable Strategies", text: "If you want more profit, read this." },
    { name: "Nathan C.", rating: 5, title: "Growth Simplified", text: "No more guessing. This book tells you exactly what to do." },
    { name: "Olivia S.", rating: 5, title: "Worth the Investment", text: "The best business book I’ve read this year." },
    { name: "Daniel R.", rating: 5, title: "Proven Tactics", text: "Every business owner should have this book." },
    { name: "Charlotte N.", rating: 5, title: "A Must-Have", text: "My revenue has skyrocketed thanks to these lessons." },
    { name: "Ryan G.", rating: 5, title: "The Best Business Guide", text: "It takes the mystery out of growth." },
    { name: "Ava T.", rating: 5, title: "Business Success Blueprint", text: "I’ve built my dream business using these principles." },
    { name: "Ethan W.", rating: 5, title: "Exceptional!", text: "Game-changing knowledge for entrepreneurs." }
  ],
  "Personal Success": [
    { name: "Carly", rating: 5, title: "Life-Changing", text: "Elevate Higher helped me find purpose in my work." },
    { name: "Inna", rating: 5, title: "A Book for Achievers", text: "I feel more motivated than ever!" },
    { name: "Marek", rating: 5, title: "Step-by-Step Success", text: "Practical steps that actually work." },
    { name: "Sophia A.", rating: 5, title: "Transformative Read", text: "This book shifted my mindset completely." },
    { name: "Zane M.", rating: 5, title: "A Success Guide", text: "Everything I needed in one book!" },
    { name: "Ella T.", rating: 5, title: "Path to Personal Growth", text: "The strategies in Elevate Higher have reshaped my approach to success." },
    { name: "Lucas V.", rating: 5, title: "Eye-Opening!", text: "I realized my full potential after reading this book. Highly recommended." },
    { name: "Mila S.", rating: 5, title: "Practical and Motivating", text: "This book gives clear steps to becoming the best version of yourself." },
    { name: "Noah F.", rating: 5, title: "Success Made Simple", text: "It simplifies success into actionable steps. Brilliant!" },
    { name: "Aria K.", rating: 5, title: "A New Perspective", text: "Elevate Higher changed the way I think about personal success." },
    { name: "Benjamin W.", rating: 5, title: "Confidence Booster", text: "I feel more confident in my goals and abilities now." },
    { name: "Emma D.", rating: 5, title: "The Guide I Needed", text: "This book has given me direction in my career and life." },
    { name: "Daniel R.", rating: 5, title: "Mindset Shift", text: "It’s not just about success, but about adopting the right mindset." },
    { name: "Olivia N.", rating: 5, title: "Super Inspiring", text: "I couldn’t put this book down. A must-read!" },
    { name: "Ethan L.", rating: 5, title: "Practical Wisdom", text: "Packed with timeless principles that actually work." },
    { name: "Isabella M.", rating: 5, title: "Changed My Life", text: "After reading this, I feel unstoppable in achieving my dreams." },
    { name: "Henry B.", rating: 5, title: "Step-by-Step Guide to Success", text: "If you want real results, this book is for you." },
    { name: "Sophia C.", rating: 5, title: "Motivation at Its Best", text: "This book is like having a personal mentor guiding you to success." },
    { name: "Liam J.", rating: 5, title: "The Key to Growth", text: "Success is a journey, and this book provides the map." },
    { name: "Mason T.", rating: 5, title: "Unlock Your Potential", text: "I finally understand what it takes to reach my highest potential." }
  ]
};

const AnimatedTestimonials = () => {
  const controls = useRef(
    Object.keys(testimonialSections).map(() => useAnimationControls())
  ).current;

  useEffect(() => {
    Object.keys(testimonialSections).forEach((section, index) => {
      const numTestimonials = testimonialSections[section].length;
      const baseDuration = 60; // Default duration for 3 testimonials
      const adjustedDuration = (numTestimonials / 3) * baseDuration; // Scale speed based on testimonials count

      const direction = index % 2 === 0 ? "-100%" : "100%";
      controls[index].start({
        x: direction,
        transition: {
          duration: adjustedDuration,
          ease: "linear",
          repeat: Infinity
        }
      });
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    controls[index].stop();
  };

  const handleMouseLeave = (index: number) => {
    const numTestimonials = Object.values(testimonialSections)[index].length;
    const baseDuration = 60;
    const adjustedDuration = (numTestimonials / 3) * baseDuration;

    const direction = index % 2 === 0 ? "-100%" : "100%";
    controls[index].start({
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
        return (
          <div key={sectionIndex} className="mb-10">
            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex w-max gap-4 px-4"
                initial={{ x: "0%" }}
                animate={controls[sectionIndex]}
                transition={{ 
                  duration: 60,
                  ease: "linear",
                  repeat: Infinity
                }}
                onMouseEnter={() => handleMouseEnter(sectionIndex)}
                onMouseLeave={() => handleMouseLeave(sectionIndex)}
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
