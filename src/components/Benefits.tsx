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
        <h2 className="text-9xl font-bold text-red-600 text-center mb-16 w-full">
          WHO NEEDS THIS?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {audience.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gray-100 p-8 rounded-lg shadow-md transition duration-300 hover:shadow-2xl hover:scale-110 flex items-center text-xl font-semibold border-l-4 border-red-500">
              <span className="text-red-600 text-3xl mr-4">✔️</span>
              <p className="text-gray-800 flex-1">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;