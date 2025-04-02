
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SwaggerismPromo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('swaggerism-promo-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleScrollToCheckout = () => {
    const checkoutElement = document.getElementById('order');
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Develop authentic confidence that radiates from within",
    "Master the art of self-expression in any situation",
    "Break free from social constraints and live on your own terms",
    "Attract better opportunities through your newfound charisma",
    "Exclusive pre-order bonus content included"
  ];

  return (
    <section 
      id="swaggerism-promo-section" 
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Book Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img 
                src="/2222222222.png" 
                alt="Swaggerism My Religion Book" 
                className="w-full max-w-md rounded-lg shadow-2xl transform hover:rotate-2 transition-all duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-lg rotate-12 animate-pulse">
                PRE-ORDER<br/>NOW
              </div>
            </div>
          </motion.div>
          
          {/* Book Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-indigo-400 font-medium">Coming July 15, 2023</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 md:mt-4 mb-4 md:mb-6">
              Swaggerism My Religion
            </h2>
            <div className="mb-4 md:mb-6">
              <span className="text-2xl line-through text-gray-400 mr-3">$35.99</span>
              <span className="text-3xl font-bold text-white">$25.99</span>
              <span className="ml-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">
                SAVE 28%
              </span>
            </div>
            
            <p className="text-lg mb-6 text-gray-300">
              Discover the revolutionary approach to confidence and self-expression that's changing lives worldwide. Pre-order today and be among the first to transform your life with the power of Swaggerism.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What You'll Learn:</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-green-400 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleScrollToCheckout}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 font-bold text-lg rounded-lg flex items-center justify-center"
              >
                Pre-Order Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={handleScrollToCheckout}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 font-bold text-lg rounded-lg"
              >
                Add to Bundle
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-4">
              *Pre-order only. Ships July 15, 2023. FREE shipping included.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SwaggerismPromo;
