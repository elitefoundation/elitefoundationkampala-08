
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const PoliciesSection = () => {
  const handleWhatsAppRequest = (documentName: string) => {
    const customMessage = `Hello, I would like to request ${documentName} from KAWEESA CHILDREN'S MINISTRY LIMITED.`;
    redirectToWhatsApp("general", customMessage);
  };

  const policyDocuments = [
    {
      title: "Child Safeguarding Policy",
      description: "Our comprehensive policy ensuring the protection and safety of all children in our care.",
      category: "Safeguarding"
    },
    {
      title: "Code of Conduct",
      description: "Standards of behavior expected from all staff, volunteers, and partners.",
      category: "Governance"
    },
    {
      title: "Privacy and Data Protection",
      description: "How we collect, use, and protect personal information of beneficiaries and supporters.",
      category: "Privacy"
    },
    {
      title: "Complaints and Feedback Policy",
      description: "Process for reporting concerns and providing feedback about our services.",
      category: "Governance"
    }
  ];

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.0 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
        <Shield className="w-8 h-8 text-purple-500 mr-3" />
        Policies & Procedures
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {policyDocuments.map((policy, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <span className={`text-xs px-2 py-1 rounded ${
                  policy.category === 'Safeguarding' ? 'bg-red-100 text-red-700' :
                  policy.category === 'Governance' ? 'bg-blue-100 text-blue-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {policy.category}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{policy.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{policy.description}</p>
              <Button 
                size="sm" 
                variant="outline" 
                className="w-full"
                onClick={() => handleWhatsAppRequest(policy.title)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Request
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default PoliciesSection;
