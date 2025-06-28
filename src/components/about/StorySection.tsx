
import { motion } from "framer-motion";
import LeadershipSection from "./LeadershipSection";

const StorySection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Our Story</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-8">
        <p className="text-gray-600 mb-4">
          Founded with a vision for global excellence in child welfare, Elite Foundation 
          began as an ambitious initiative to address the critical needs of children worldwide through innovative, high-quality programs.
        </p>
        <p className="text-gray-600 mb-4">
          Over the years, we have grown from a small team with big dreams to a globally recognized organization 
          supporting thousands of children and families across multiple continents. Our comprehensive approach addresses 
          both immediate needs and long-term sustainable solutions.
        </p>
        <p className="text-gray-600">
          Today, we continue to expand our reach while maintaining our core commitment to excellence in every aspect 
          of our work. We collaborate with local communities, international partners, schools, and healthcare 
          providers to ensure our programs create lasting, transformative impact.
        </p>
      </div>

      <LeadershipSection />
    </motion.div>
  );
};

export default StorySection;
