
import { motion } from "framer-motion";

const ContactInfoSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 1.0 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
          <h4 className="font-bold text-blue-900 mb-2">Global Operations</h4>
          <p className="text-blue-800">Worldwide Presence</p>
        </div>
        <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
          <h4 className="font-bold text-green-900 mb-2">Email</h4>
          <p className="text-green-800">info@elitefoundation.org</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 text-center">
          <h4 className="font-bold text-orange-900 mb-2">Phone</h4>
          <p className="text-orange-800">+1 (555) 123-4567</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfoSection;
