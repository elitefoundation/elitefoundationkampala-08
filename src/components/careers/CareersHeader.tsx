
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const CareersHeader = () => {
  return (
    <>
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      
      <motion.h1 
        initial={{ opacity: 0, y: -10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="text-4xl font-bold mb-6"
      >
        Join Our Mission
      </motion.h1>
      
      <div className="prose prose-lg max-w-none">
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="text-xl text-gray-600 mb-4"
        >
          Are you passionate about transforming children's lives? Join our dedicated team working to create lasting change in Uganda's communities.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray-600 mb-12"
        >
          We welcome both experienced professionals and passionate individuals starting their journey in child welfare and community development.
        </motion.p>
      </div>
    </>
  );
};

export default CareersHeader;
