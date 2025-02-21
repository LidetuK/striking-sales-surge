
const benefits = [
  {
    title: "17 Sales-Producing Secrets",
    description: "Discover proven strategies that go against everything you've been told by the 'Gurus'",
  },
  {
    title: "Step-by-Step System",
    description: "Get a complete blueprint for generating consistent sales in any niche",
  },
  {
    title: "Real World Results",
    description: "$7.8 Billion in sales across 1067 different niches - proven to work",
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Here's What You'll Discover Inside
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx}
              className="text-center p-8 rounded-lg glass-card transform transition-all duration-500 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {benefit.title}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
