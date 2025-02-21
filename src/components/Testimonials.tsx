
const testimonials = [
  {
    name: "NATHAN CHAN",
    role: "CEO OF FOUNDR MAGAZINE",
    followers: "17k followers",
    text: "Sabri is a genius when it comes to marketing and scaling businesses, this book is an absolute must read",
    image: "/lovable-uploads/c4538777-33b0-4f4c-bce6-a3b8e47c3add.png"
  },
  {
    name: "DAN LOK",
    role: "BUSINESS INFLUENCER",
    followers: "1.8m followers",
    text: "I love your book 'Sell Like Crazy'... And I have read a lot of marketing books! What you're doing is brilliant. Very, very brilliant...",
    image: "/lovable-uploads/c4538777-33b0-4f4c-bce6-a3b8e47c3add.png"
  },
  {
    name: "GRETTA VAN RIEL",
    role: "CEO AND FOUNDER OF SWIISH.COM",
    followers: "192k followers",
    text: "Sabri is the marketing king! He is an insanely smart guy, super sharp marketer and most importantly of all an actual practitioner. He isn't selling the dream",
    image: "/lovable-uploads/c4538777-33b0-4f4c-bce6-a3b8e47c3add.png"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <p className="text-blue-400 text-sm mt-2">{testimonial.followers}</p>
              </div>
              <p className="text-gray-800 italic mb-4">"{testimonial.text}"</p>
              <h4 className="font-bold text-primary">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
