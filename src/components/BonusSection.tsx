
import { Gift, Zap, Target, Users } from "lucide-react";

const bonuses = [
  {
    icon: <Gift className="w-12 h-12 text-primary" />,
    title: "The High-Ticket Sales Blueprint",
    value: "$997 VALUE",
    description: "Learn how to close high-ticket deals with confidence and ease."
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Email Marketing Mastery",
    value: "$497 VALUE",
    description: "Convert leads into loyal customers with proven email sequences."
  },
  {
    icon: <Target className="w-12 h-12 text-primary" />,
    title: "Advanced Lead Generation",
    value: "$697 VALUE",
    description: "Generate qualified leads on autopilot using cutting-edge strategies."
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Sales Team Training",
    value: "$1,997 VALUE",
    description: "Transform your sales team into a high-performing revenue machine."
  }
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            FREE Bonuses (Worth $4,188)
          </h2>
          <p className="text-xl text-gray-600">
            Order today and get instant access to these exclusive bonuses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {bonuses.map((bonus, idx) => (
            <div 
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{bonus.icon}</div>
              <h3 className="text-xl font-bold mb-2">{bonus.title}</h3>
              <p className="text-primary font-bold mb-2">{bonus.value}</p>
              <p className="text-gray-600">{bonus.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
