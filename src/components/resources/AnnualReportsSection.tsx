
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, MessageCircle, BarChart3 } from 'lucide-react';
import { motion } from "framer-motion";
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const AnnualReportsSection = () => {
  const handleWhatsAppRequest = (documentName: string) => {
    const customMessage = `Hello, I would like to request ${documentName} from KAWEESA CHILDREN'S MINISTRY LIMITED.`;
    redirectToWhatsApp("general", customMessage);
  };

  const annualReports = [
    {
      year: "2023",
      title: "Annual Impact Report 2023",
      description: "Comprehensive overview of our programs, achievements, and financial transparency for 2023.",
      pages: "32 pages",
      size: "2.5 MB"
    },
    {
      year: "2022",
      title: "Annual Impact Report 2022",
      description: "Detailed report on our growth, impact stories, and program expansion in 2022.",
      pages: "28 pages",
      size: "2.1 MB"
    },
    {
      year: "2021",
      title: "Annual Impact Report 2021",
      description: "Our resilience during challenges and continued commitment to children's welfare in 2021.",
      pages: "25 pages",
      size: "1.9 MB"
    }
  ];

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 flex items-center justify-center">
        <BarChart3 className="w-8 h-8 text-blue-500 mr-3" />
        Annual Impact Reports
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {annualReports.map((report, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{report.year}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{report.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>{report.pages}</span>
                  <span>{report.size}</span>
                </div>
                <Button 
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => handleWhatsAppRequest(report.title)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Request
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AnnualReportsSection;
