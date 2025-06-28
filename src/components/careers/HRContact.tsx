
import { Mail, Phone } from 'lucide-react';

const HRContact = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
      <h3 className="font-bold text-xl mb-6">Contact Our HR Team</h3>
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
            alt="HR Team"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-900">Grace Nambi</h3>
          <p className="text-gray-600 mb-4">HR & Operations Manager</p>
          <div className="flex flex-col space-y-3">
            <a href="mailto:Kimeragodfreyadams@gmail.com" className="flex items-center text-gray-700 hover:text-orange-600">
              <Mail className="w-5 h-5 mr-2" />
              Kimeragodfreyadams@gmail.com
            </a>
            <a href="tel:+256762080041" className="flex items-center text-gray-700 hover:text-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              +256 762 080 041
            </a>
            <a href="tel:+256706196708" className="flex items-center text-gray-700 hover:text-orange-600">
              <Phone className="w-5 h-5 mr-2" />
              +256 706 196 708
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRContact;
