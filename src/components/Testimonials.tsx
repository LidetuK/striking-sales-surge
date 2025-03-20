const testimonials = [
  {
    name: "Malik J.",
    role: "CEO OF FOUNDR MAGAZINE",
    followers: "17k followers",
    text: "Elevate Higher is a life-changing read! Resk'Que's wisdom and insights challenged my perspective and inspired me to push beyond my limits. Every chapter is filled with powerful lessons that encourage growth, resilience, and self-discovery.",
    image: "/lovable-uploads/dale1.webp"
  },
  {
    name: "Jamal C.",
    role: "BUSINESS INFLUENCER",
    followers: "19K followers",
    text: "Elevate Higher is a transformative book! Resk'Que’s guidance and reflections shifted my mindset and motivated me to reach for new possibilities. Every page delivers profound lessons that inspire confidence, ambition, and perseverance.",
    image: "/lovable-uploads/dale2.webp"
  },
  {
    name: "Tiana B.",
    role: "CEO AND FOUNDER OF SKINNYME TEA",
    followers: "192k followers",
    text: "Elevate Higher is a truly inspiring read! Resk'Que’s words and perspective unlocked new insights and gave me the courage to step out of my comfort zone. Every part holds essential lessons that foster clarity, strength, and motivation.",
    image: "/lovable-uploads/Face (4).jpeg"
  },
  {
    name: "Imani W.",
    role: "BESTSELLING AUTHOR",
    followers: "182k followers",
    text: "Elevate Higher is a book of pure inspiration! Resk'Que’s powerful storytelling and knowledge expanded my view and helped me embrace new opportunities. Every chapter carries meaningful lessons that ignite passion, discipline, and success.",
    image: "/lovable-uploads/Face (5).jpeg"
  },
  {
    name: "Darius W.",
    role: "CEO of Johnson Tech Innovations",
    followers: "172k followers",
    text: "Elevate Higher is a true game-changer! Resk’Que’s wisdom and strategies reshaped my thinking and empowered me to take bold action. Each chapter is packed with powerful insights that inspire growth, confidence, and success.",
    image: "/lovable-uploads/dale.webp"
  },
  {
    name: "Madison H.",
    role: "8 FIGURE ENTREPRENEUR",
    followers: "11.9k followers",
    text: "Elevate Higher is a must-read for all! Resk'Que’s compelling thoughts and advice helped me embrace challenges and unlock my true potential. Every lesson is packed with encouragement that cultivates wisdom, persistence, and confidence.",
    image: "/lovable-uploads/Face (6).jpeg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* First row with 3 testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <div key={idx} className="text-center">
              <div className="relative inline-block">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-300"
                />
                <span className="absolute bottom-0 right-0 bg-white border border-white rounded-full p-1">
                  <img src="/lovable-uploads/blue.avif" alt="Verified" className="w-5 h-5" />
                </span>
              </div>
              <p className="text-blue-400 text-sm mt-2">{testimonial.followers}</p>
              <p className="text-gray-800 italic mb-4">"{testimonial.text}"</p>
              <h4 className="font-bold text-red-600">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
        
        {/* Second row with 3 testimonials instead of 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.slice(3).map((testimonial, idx) => (
            <div key={idx} className="text-center">
              <div className="relative inline-block">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-300"
                />
                <span className="absolute bottom-0 right-0 bg-white border border-white rounded-full p-1">
                  <img src="/lovable-uploads/blue.avif" alt="Verified" className="w-5 h-5" />
                </span>
              </div>
              <p className="text-blue-400 text-sm mt-2">{testimonial.followers}</p>
              <p className="text-gray-800 italic mb-4">"{testimonial.text}"</p>
              <h4 className="font-bold text-red-600">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
