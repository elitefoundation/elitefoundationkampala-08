
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const EducationalResourcesSection = () => {
  const handleWhatsAppRequest = (documentName: string) => {
    const customMessage = `Hello, I would like to request ${documentName} from ELITE FOUNDATION.`;
    redirectToWhatsApp("general", customMessage);
  };

  const educationalResources = [
    {
      title: "Child Protection Guidelines",
      description: "Essential guidelines for working with vulnerable children and ensuring their safety.",
      type: "PDF Guide",
      size: "1.2 MB"
    },
    {
      title: "Volunteer Handbook",
      description: "Complete guide for volunteers including policies, procedures, and best practices.",
      type: "PDF Handbook",
      size: "3.4 MB"
    },
    {
      title: "Community Development Toolkit",
      description: "Resources for community leaders to support local child welfare initiatives.",
      type: "Resource Kit",
      size: "5.1 MB"
    },
    {
      title: "Educational Support Guide",
      description: "Strategies and resources for supporting children's educational development.",
      type: "PDF Guide",
      size: "2.3 MB"
    }
  ];

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
        <BookOpen className="w-8 h-8 text-green-500 mr-3" />
        Educational Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationalResources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {resource.type}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{resource.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{resource.size}</span>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleWhatsAppRequest(resource.title)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationalResourcesSection;
