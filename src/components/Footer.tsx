import { ArrowRight, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import DonationModal from "@/components/DonationModal";
import { redirectToWhatsApp } from "@/utils/whatsappHelper";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Newsletter Subscriber",
        from_email: email,
        message: `New newsletter subscription request from the Elite Foundation website.`,
        to_name: 'Elite Foundation Team',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "✅ Success!",
        description: "Thank you for subscribing to our newsletter. You'll receive a confirmation email shortly.",
        variant: "default",
        duration: 5000
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  return (
    <>
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">ELITE FOUNDATION</h3>
              <p className="text-gray-300 mb-6">
                Transforming lives through excellence and care. We are dedicated to nurturing, protecting, and empowering children through comprehensive programs that address their educational, health, and developmental needs.
              </p>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-orange-400" />
                  <span>Nansana Wakiso Uganda</span>
                </div>
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-orange-400" />
                  <span>Kimeragodfreyadams@gmail.com</span>
                </button>
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3 text-orange-400" />
                  <span>+256 762 080 041 / +256 706 196 708</span>
                </button>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mt-6">
                <a 
                  href="https://www.facebook.com/share/184Xgi7v6U/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors" 
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/elite_foundation_uganda?igsh=YzM1c2Q0MmpoNG5n&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors" 
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Get Involved</h3>
              <ul className="space-y-3 mb-6">
                <li><Link to="/donate" className="text-gray-300 hover:text-orange-400 transition-colors">Make a Donation</Link></li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("sponsor")}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Sponsor a Child
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("volunteer")}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Volunteer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("event")}
                    className="text-gray-300 hover:text-orange-400 transition-colors text-left"
                  >
                    Upcoming Events
                  </button>
                </li>
              </ul>
              <Button 
                onClick={handleDonateClick}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium"
              >
                Donate Now
              </Button>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">
                Stay updated with our latest news and impact stories.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-white">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
                  <li><Link to="/programs" className="text-gray-300 hover:text-orange-400 transition-colors">Our Programs</Link></li>
                  <li><Link to="/impact" className="text-gray-300 hover:text-orange-400 transition-colors">Our Impact</Link></li>
                  <li><Link to="/testimonials" className="text-gray-300 hover:text-orange-400 transition-colors">Success Stories</Link></li>
                  <li><Link to="/resources" className="text-gray-300 hover:text-orange-400 transition-colors">Resources</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm mb-2">
                © {new Date().getFullYear()} Elite Foundation. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm">
                Registered Non-Profit Organization | Excellence in Action
              </p>
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">Contact Us</Link>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="pt-4 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-xs">
              Developed by{" "}
              <a 
                href="https://Drewversedesign.online" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Drewverse Design
              </a>
            </p>
          </div>
        </div>
      </footer>

      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)}
      />
    </>
  );
};

export default Footer;
