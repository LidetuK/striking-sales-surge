
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Adrian Chan",
    role: "CEO of Finance Magazine",
    text: "Sabri is a genius when it comes to marketing and scaling businesses. This book is an absolute must read!",
    image: "/lovable-uploads/c4538777-33b0-4f4c-bce6-a3b8e47c3add.png"
  },
  {
    name: "Ryan Low",
    role: "Business Strategist",
    text: "I love your book 'Sell Like Crazy.' And I see a lot of marketing books (hint: yours doing it brilliant). Very, very brilliant...",
    image: "/lovable-uploads/c4538777-33b0-4f4c-bce6-a3b8e47c3add.png"
  },
  {
    name: "Gretta van Riel",
    role: "CEO SaaS Brands & Marketing Ltd",
    text: "Sabri is the marketing king. He is an industry stand-out, bootstrapped manager and most importantly of all an actual practitioner.",
    image: "/lovable-uploads/c4538777-33b0-4f4c-bce6-a3b8e47c3add.png"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Industry Leaders Are Saying
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className={`p-6 glass-card transform transition-all duration-500 hover:scale-105 ${
              idx === activeIndex ? 'ring-2 ring-primary' : ''
            }`}>
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
