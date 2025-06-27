
import { motion } from "framer-motion";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactHeader = () => {
  return (
    <>
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We'd love to hear from you. Whether you want to volunteer, make a donation, 
          partner with us, or just learn more about our work, we're here to help.
        </p>
      </motion.div>
    </>
  );
};

export default ContactHeader;
