
import { motion } from "framer-motion";

const ResourcesHeader = () => {
  return (
    <div className="w-full pt-24 pb-12 bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Resources & Reports
          </motion.h1>
          <motion.p 
            className="text-xl text-indigo-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transparency and accountability through comprehensive reporting, educational materials, and policy documentation
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesHeader;
