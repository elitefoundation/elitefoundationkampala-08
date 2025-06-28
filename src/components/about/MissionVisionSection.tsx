
import { motion } from "framer-motion";
import { CheckCircle } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <p className="text-gray-600">
          To provide holistic care, quality education, and protection for children worldwide, 
          empowering them to reach their full potential and become productive members of society through excellence in every program we deliver.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
      >
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-gray-600 mb-6">
          A world where every child has access to quality education, healthcare, protection, 
          and opportunities to thrive in a nurturing and supportive environment through excellence in action.
        </p>
        <h4 className="text-xl font-bold mb-4">Our Core Values</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <span><strong>Excellence:</strong> Committed to providing the highest quality programs and services</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <span><strong>Innovation:</strong> Using cutting-edge approaches to maximize impact and sustainability</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
            <span><strong>Global Partnership:</strong> Working together with communities worldwide for sustainable change</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MissionVisionSection;
