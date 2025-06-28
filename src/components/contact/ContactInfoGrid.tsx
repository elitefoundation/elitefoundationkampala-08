
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';
import ContactInfoCard from './ContactInfoCard';

const ContactInfoGrid = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+256 762 080 041", "+256 706 196 708"],
      color: "bg-blue-100 text-blue-600",
      onClick: () => redirectToWhatsApp("general")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["Kimeragodfreyadams@gmail.com"],
      color: "bg-green-100 text-green-600",
      onClick: () => redirectToWhatsApp("general")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Nansana Wakiso Uganda"],
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {contactInfo.map((info, index) => (
        <ContactInfoCard
          key={index}
          icon={info.icon}
          title={info.title}
          details={info.details}
          color={info.color}
          onClick={info.onClick}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContactInfoGrid;
