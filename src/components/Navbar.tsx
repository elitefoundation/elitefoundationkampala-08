
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ExternalLink, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateLoading, setIsDonateLoading] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDonateClick = () => {
    setIsDonateLoading(true);
    setTimeout(() => {
      window.open("https://www.paypal.me/EliteFoundation", '_blank', 'noopener,noreferrer');
      setIsDonateLoading(false);
    }, 500);
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  return (
    <motion.nav 
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", 
        isScrolled ? "bg-white shadow-sm" : "bg-black"
      )} 
      initial={{ opacity: 1, y: 0 }} 
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className={cn(
                "text-lg sm:text-xl font-bold transition-colors duration-300",
                isScrolled ? "text-gray-900" : "text-white"
              )}>
                ELITE FOUNDATION
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/about" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Our Story</div>
                          <p className="text-sm text-gray-500">Learn about our mission and history</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/programs" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Programs</div>
                          <p className="text-sm text-gray-500">Education, health, and protection services</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/impact" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Our Impact</div>
                          <p className="text-sm text-gray-500">See the difference we're making</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/resources">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Resources
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Get Involved
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/donate" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Donate</div>
                          <p className="text-sm text-gray-500">Support our programs and make a difference</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/volunteer" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Volunteer</div>
                          <p className="text-sm text-gray-500">Join our team of dedicated volunteers</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/testimonials">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Success Stories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Donate Button */}
            <Button 
              onClick={handleDonateClick}
              disabled={isDonateLoading}
              variant="glass"
              className={cn(
                "px-4 py-2 font-medium",
                isScrolled 
                  ? "bg-orange-500/20 border-orange-500/30 text-orange-600 hover:bg-orange-500/30 hover:shadow-orange-500/20" 
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:shadow-white/10"
              )}
            >
              {isDonateLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Opening...
                </>
              ) : (
                <>
                  Donate Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-black")}>
          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          
          {/* About Section - Collapsible */}
          <Collapsible>
            <CollapsibleTrigger className={cn("w-full flex items-center justify-between px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              About
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1">
              <Link to="/about" className={cn("block px-3 py-2 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Our Story
              </Link>
              <Link to="/programs" className={cn("block px-3 py-2 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Programs
              </Link>
              <Link to="/impact" className={cn("block px-3 py-2 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Our Impact
              </Link>
            </CollapsibleContent>
          </Collapsible>
          
          <Link to="/resources" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Resources
          </Link>
          
          {/* Get Involved Section - Collapsible */}
          <Collapsible>
            <CollapsibleTrigger className={cn("w-full flex items-center justify-between px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              Get Involved
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-6 space-y-1">
              <Link to="/donate" className={cn("block px-3 py-2 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Donate
              </Link>
              <Link to="/volunteer" className={cn("block px-3 py-2 rounded-md text-sm", isScrolled ? "text-gray-600 hover:bg-gray-50" : "text-gray-300 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
                Volunteer
              </Link>
            </CollapsibleContent>
          </Collapsible>
          
          <Link to="/testimonials" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Success Stories
          </Link>
          
          <Link to="/contact" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
          
          <button 
            onClick={handleDonateClick}
            disabled={isDonateLoading}
            className={cn("w-full text-left px-3 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 flex items-center justify-center mt-4")}
          >
            {isDonateLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Opening...
              </>
            ) : (
              <>
                Donate Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
