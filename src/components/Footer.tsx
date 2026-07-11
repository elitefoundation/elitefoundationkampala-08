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
      <footer id="contact" className="bg-[#101400] text-white pt-24 pb-12 w-full border-t border-[#D2FF00]/10 font-space uppercase tracking-wider text-xs">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16 border-b border-stone-800">
            <div className="lg:col-span-2 text-left">
              <h3 className="text-3xl font-black mb-6 text-[#D2FF00] tracking-widest font-space">ELITE FOUNDATION</h3>
              <p className="text-stone-400 mb-8 normal-case text-sm leading-relaxed tracking-normal font-medium max-w-lg">
                Transforming lives through excellence and care. We are dedicated to nurturing, protecting, and empowering children through comprehensive programs that address their educational, health, and developmental needs.
              </p>
              <div className="space-y-4 text-stone-300 text-xs font-black">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-[#D2FF00]" />
                  <span>Nansana Wakiso Uganda</span>
                </div>
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center hover:text-[#D2FF00] transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3 text-[#D2FF00]" />
                  <span>elitefoundation256@gmail.com</span>
                </button>
                <button 
                  onClick={() => redirectToWhatsApp("general")}
                  className="flex items-center hover:text-[#D2FF00] transition-colors"
                >
                  <Phone className="w-4 h-4 mr-3 text-[#D2FF00]" />
                  <span>+256 762 080041 / +256 706 196708</span>
                </button>
              </div>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://www.facebook.com/share/184Xgi7v6U/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-900 border border-stone-800 text-stone-400 hover:text-black hover:bg-[#D2FF00] hover:border-[#D2FF00] flex items-center justify-center transition-all duration-300 rounded-none shadow-[0_0_10px_rgba(0,0,0,0.5)] transform hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/elite_foundation_uganda?igsh=YzM1c2Q0MmpoNG5n&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-900 border border-stone-800 text-stone-400 hover:text-black hover:bg-[#D2FF00] hover:border-[#D2FF00] flex items-center justify-center transition-all duration-300 rounded-none shadow-[0_0_10px_rgba(0,0,0,0.5)] transform hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-sm font-black mb-6 text-white tracking-widest border-b border-stone-800 pb-2">Get Involved</h3>
              <ul className="space-y-4 mb-8">
                <li><Link to="/donate" className="text-stone-300 hover:text-[#D2FF00] transition-colors flex items-center"><ArrowRight className="w-3 h-3 mr-2" /> Make a Donation</Link></li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("sponsor")}
                    className="text-stone-300 hover:text-[#D2FF00] transition-colors text-left flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" /> Sponsor a Child
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("volunteer")}
                    className="text-stone-300 hover:text-[#D2FF00] transition-colors text-left flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" /> Volunteer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => redirectToWhatsApp("event")}
                    className="text-stone-300 hover:text-[#D2FF00] transition-colors text-left flex items-center"
                  >
                    <ArrowRight className="w-3 h-3 mr-2" /> Upcoming Events
                  </button>
                </li>
              </ul>
              <Button 
                onClick={handleDonateClick}
                className="w-full bg-[#D2FF00] hover:bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-none py-6 border-0"
              >
                Donate Now
              </Button>
            </div>
            
            <div className="text-left">
              <h3 className="text-sm font-black mb-6 text-white tracking-widest border-b border-stone-800 pb-2">Newsletter</h3>
              <p className="text-stone-400 text-[11px] normal-case tracking-normal mb-4 leading-relaxed font-medium">
                Stay updated with our latest news and impact stories.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3 mb-6">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-stone-900/50 border border-stone-800 rounded-none text-white placeholder-stone-600 focus:outline-none focus:border-[#D2FF00] transition-colors uppercase tracking-wider text-[10px] font-black"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-stone-800 hover:bg-[#D2FF00] text-white hover:text-black font-black uppercase text-[10px] tracking-widest rounded-none py-5 border-0 disabled:opacity-30"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
              
              <div className="mt-8">
                <h4 className="text-[10px] font-black mb-4 text-white tracking-widest">Quick Links</h4>
                <ul className="space-y-3 text-stone-400 font-bold">
                  <li><Link to="/about" className="hover:text-[#D2FF00] transition-colors">About Us</Link></li>
                  <li><Link to="/programs" className="hover:text-[#D2FF00] transition-colors">Our Programs</Link></li>
                  <li><Link to="/impact" className="hover:text-[#D2FF00] transition-colors">Our Impact</Link></li>
                  <li><Link to="/testimonials" className="hover:text-[#D2FF00] transition-colors">Success Stories</Link></li>
                  <li><Link to="/resources" className="hover:text-[#D2FF00] transition-colors">Resources</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center text-stone-500 font-bold">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-stone-400 text-[10px] mb-2 tracking-widest font-black">
                © {new Date().getFullYear()} Elite Foundation. All rights reserved.
              </p>
              <p className="text-[10px] tracking-widest">
                Registered Non-Profit Organization | Excellence in Action
              </p>
            </div>
            <div className="flex space-x-6 tracking-widest text-[10px] font-black">
              <Link to="/privacy-policy" className="text-stone-400 hover:text-[#D2FF00] transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="text-stone-400 hover:text-[#D2FF00] transition-colors">Contact Us</Link>
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
