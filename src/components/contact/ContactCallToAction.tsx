
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const ContactCallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
      <p className="text-xl mb-6 text-orange-100">
        Join our mission to transform children's lives through excellence in action. Every conversation starts with a simple message.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => redirectToWhatsApp("volunteer")}
          className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
        >
          Volunteer Today
        </button>
        <Link 
          to="/donate" 
          className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold border border-orange-400"
        >
          Make a Donation
        </Link>
      </div>
    </motion.div>
  );
};

export default ContactCallToAction;
