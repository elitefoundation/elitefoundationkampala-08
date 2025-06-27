
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
  onClick?: () => void;
  index: number;
}

const ContactInfoCard = ({ icon, title, details, color, onClick, index }: ContactInfoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`h-full text-center hover:shadow-lg transition-shadow duration-300 ${onClick ? 'cursor-pointer' : ''}`}
            onClick={onClick}>
        <CardContent className="p-6">
          <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
            {icon}
          </div>
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          {details.map((detail, i) => (
            <p key={i} className="text-gray-600 text-sm mb-1">{detail}</p>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfoCard;
