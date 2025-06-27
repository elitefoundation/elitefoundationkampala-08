
import { Mail, Phone, MapPin } from 'lucide-react';
import { redirectToWhatsApp } from '@/utils/whatsappHelper';

const QuickContactSection = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
      <div className="space-y-4">
        <button 
          onClick={() => redirectToWhatsApp("general")}
          className="w-full flex items-center p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
        >
          <Mail className="w-5 h-5 text-blue-600 mr-3" />
          <div className="text-left">
            <h4 className="font-semibold text-blue-900">General Inquiries</h4>
            <p className="text-blue-700 text-sm">info@kaweesaministry.org</p>
          </div>
        </button>
        <button 
          onClick={() => redirectToWhatsApp("general")}
          className="w-full flex items-center p-4 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
        >
          <Phone className="w-5 h-5 text-green-600 mr-3" />
          <div className="text-left">
            <h4 className="font-semibold text-green-900">Emergency Contact</h4>
            <p className="text-green-700 text-sm">+256 762 080 041</p>
          </div>
        </button>
        <button 
          onClick={() => redirectToWhatsApp("programs")}
          className="w-full flex items-center p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors"
        >
          <MapPin className="w-5 h-5 text-orange-600 mr-3" />
          <div className="text-left">
            <h4 className="font-semibold text-orange-900">Program Sites</h4>
            <p className="text-orange-700 text-sm">Multiple locations across Uganda</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default QuickContactSection;
