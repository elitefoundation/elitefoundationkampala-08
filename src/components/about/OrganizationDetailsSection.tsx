
import { motion } from "framer-motion";

const OrganizationDetailsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Organization Details</h2>
      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8 border border-orange-200 text-center">
        <h3 className="text-2xl font-bold mb-4 text-gray-900">Official Organization Information</h3>
        <p className="text-gray-800 mb-2 font-semibold">
          <strong className="text-gray-900">Status:</strong> Registered Non-Profit Organization
        </p>
        <p className="text-gray-800 mb-2 font-semibold">
          <strong className="text-gray-900">Operations:</strong> Global Outreach Programs
        </p>
        <p className="text-gray-800 font-semibold">
          <strong className="text-gray-900">Mission:</strong> Excellence in Action for Children Worldwide
        </p>
      </div>
    </motion.div>
  );
};

export default OrganizationDetailsSection;
