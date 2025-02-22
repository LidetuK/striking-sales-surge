const testimonials = [
  {
    name: "NATHAN CHAN",
    role: "CEO OF FOUNDR MAGAZINE",
    followers: "17k followers",
    text: "Resk'Que is a genius when it comes to marketing and scaling businesses, this book is an absolute must-read.",
    image: "/lovable-uploads/1.png"
  },
  {
    name: "DAN LOK",
    role: "BUSINESS INFLUENCER",
    followers: "1.8m followers",
    text: "I love your book 'Sell Like Crazy'... And I have read a lot of marketing books! What you're doing is brilliant. Very, very brilliant...",
    image: "/lovable-uploads/2.png"
  },
  {
    name: "GRETTA VAN RIEL",
    role: "CEO AND FOUNDER OF SKINNYME TEA",
    followers: "192k followers",
    text: "Resk'Que is the marketing king! He is an insanely smart guy, super sharp marketer, and most importantly of all an actual practitioner. He isn't selling the dream.",
    image: "/lovable-uploads/3.png"
  },
  {
    name: "CRAIG BALLANTYNE",
    role: "BESTSELLING AUTHOR",
    followers: "182k followers",
    text: "Highly recommended (Sell Like Crazy), super comprehensive guide on sales copy and creating an online business. Better than some $2000 courses!",
    image: "/lovable-uploads/4.png"
  },
  {
    name: "MIKE DILLARD",
    role: "8 FIGURE ENTREPRENEUR",
    followers: "11.9k followers",
    text: "One of the best marketers in the world right now is a gentleman from Australia named Resk'Que.",
    image: "/lovable-uploads/5.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, idx) => (
            <div key={idx} className="text-center">
              <div className="relative inline-block">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-300"
                />
                {/* Blue checkmark icon */}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
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
