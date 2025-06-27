
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { motion } from "framer-motion";

const ResourceCallToAction = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <Users className="w-16 h-16 mx-auto mb-4 text-indigo-200" />
      <h2 className="text-3xl font-bold mb-4">Need Additional Information?</h2>
      <p className="text-xl mb-6 text-indigo-100">
        Can't find what you're looking for? Contact us for specific reports, data, or additional resources
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="px-8 py-3 bg-white text-indigo-600 hover:bg-gray-100 font-semibold">
          Contact Us
        </Button>
        <Button variant="outline" className="px-8 py-3 border-white text-white hover:bg-white hover:text-indigo-600 font-semibold">
          Subscribe to Updates
        </Button>
      </div>
    </motion.div>
  );
};

export default ResourceCallToAction;
