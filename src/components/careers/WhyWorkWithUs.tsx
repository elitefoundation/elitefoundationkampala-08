
import { motion } from "framer-motion";

const WhyWorkWithUs = () => {
  const benefits = [
    {
      title: "Meaningful Impact",
      description: "See the direct results of your work in children's transformed lives every day."
    },
    {
      title: "Professional Growth",
      description: "Develop skills in child welfare, community development, and program management."
    },
    {
      title: "Supportive Team",
      description: "Work alongside passionate colleagues who share your commitment to children's wellbeing."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
            <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WhyWorkWithUs;
