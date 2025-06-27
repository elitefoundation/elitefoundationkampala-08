
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageCircle, BarChart3 } from 'lucide-react';
import { motion } from "framer-motion";
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const FinancialReportsSection = () => {
  const handleWhatsAppRequest = (documentName: string) => {
    const customMessage = `Hello, I would like to request ${documentName} from ELITE FOUNDATION.`;
    redirectToWhatsApp("general", customMessage);
  };

  const financialReports = [
    {
      title: "Financial Statement 2023",
      description: "Audited financial statements showing our responsible stewardship of resources.",
      period: "Jan-Dec 2023",
      size: "890 KB"
    },
    {
      title: "Quarterly Report Q4 2023",
      description: "Latest quarterly financial and program performance report.",
      period: "Oct-Dec 2023",
      size: "650 KB"
    },
    {
      title: "Donor Impact Summary",
      description: "Breakdown of how donor contributions are utilized across our programs.",
      period: "2023 Summary",
      size: "1.1 MB"
    }
  ];

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
        <FileText className="w-8 h-8 text-orange-500 mr-3" />
        Financial Transparency
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {financialReports.map((report, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{report.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{report.description}</p>
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{report.period}</span>
                <span>{report.size}</span>
              </div>
              <Button 
                size="sm" 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={() => handleWhatsAppRequest(report.title)}
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

export default FinancialReportsSection;
