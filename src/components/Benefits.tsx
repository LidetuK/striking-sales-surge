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

const audience = [
  "Aspiring Entrepreneurs: Individuals looking to start their own business and seeking guidance on how to achieve success.",
  "Business Professionals: Those aiming to enhance their career, improve their skills, and achieve greater professional success.",
  "Personal Development Enthusiasts: People passionate about self-improvement and looking for comprehensive strategies to elevate their lives.",
  "Students and Graduates: Young adults preparing to enter the workforce and seeking advice on how to navigate their careers and personal growth.",
  "Health and Wellness Seekers: Individuals focused on improving their physical and mental well-being.",
  "Spiritual Seekers: Those looking to deepen their spiritual connection and find greater meaning in life.",
  "Financial Planners: People aiming to improve their financial literacy and achieve financial freedom.",
  "Relationship Builders: Individuals seeking to enhance their personal and professional relationships.",
  "Motivated Individuals: Anyone looking for inspiration and motivation to achieve their goals and dreams.",
  "Lifestyle Enthusiasts: People interested in creating a balanced, enjoyable, and fulfilling lifestyle.",
  "Founders: Entrepreneurs who have already started their businesses and are looking for strategies to scale and sustain their success.",
  "Content Creators: Individuals who produce digital content and are seeking ways to enhance their creativity, productivity, and audience engagement."
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          WHO NEEDS THIS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audience.map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-800">{item}</p>
            </div>
          ))}
        </div>

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
