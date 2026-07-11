import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Heart, Users, BookOpen, Target, Phone, Gift } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/about", label: "About", icon: Users },
    { href: "/programs", label: "Programs", icon: BookOpen },
    { href: "/impact", label: "Impact", icon: Target },
    { href: "/volunteer", label: "Volunteer", icon: Heart },
    { href: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 uppercase tracking-wider font-space ${
        isScrolled
          ? "bg-[#101400]/95 backdrop-blur-md border-b border-[#D2FF00]/20 shadow-[0_4px_30px_rgba(210,255,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-[#D2FF00] to-orange-500 rounded-none flex items-center justify-center shadow-lg group-hover:shadow-[0_0_20px_#D2FF00] transition-all duration-300 transform group-hover:rotate-6">
              <Heart className="h-6 w-6 text-black" />
            </div>
            <span className={`text-xl font-extrabold transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`}>
              Elite Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={item.href}
                          className={`relative px-4 py-2.5 text-xs font-black transition-all duration-300 hover:text-[#D2FF00] ${
                            isActive
                              ? "text-[#D2FF00] font-black"
                              : isScrolled
                              ? "text-stone-300"
                              : "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                          }`}
                        >
                          {item.label}
                          {isActive && (
                            <motion.span
                              layoutId="navIndicator"
                              className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#D2FF00] rounded-full"
                              transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                          )}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              className={`rounded-none border-2 px-6 py-5 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                isScrolled
                  ? "bg-[#D2FF00] text-black border-[#D2FF00] hover:bg-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  : "bg-transparent text-white border-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] hover:shadow-[0_0_15px_rgba(210,255,0,0.6)]"
              } transform hover:-translate-y-0.5`}
            >
              <Link to="/donate">
                <Gift className="w-4 h-4 mr-2" />
                Donate Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`${
                    isScrolled 
                      ? "text-white hover:bg-white/10"
                      : "text-white hover:bg-white/20 drop-shadow-lg"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-[#101400] border-l border-[#D2FF00]/20 text-white">
                <div className="flex items-center justify-between mb-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D2FF00] to-orange-500 rounded-none flex items-center justify-center">
                      <Heart className="h-5 w-5 text-black" />
                    </div>
                    <span className="text-lg font-black text-white uppercase tracking-wider">Elite Foundation</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-none transition-all duration-300 uppercase tracking-wider text-xs font-black ${
                          isActive
                            ? "bg-[#D2FF00] text-black border-l-4 border-orange-500"
                            : "text-stone-300 hover:bg-white/5 hover:text-[#D2FF00]"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}

                  <div className="pt-6 border-t border-[#D2FF00]/10">
                    <Button
                      asChild
                      className="w-full bg-[#D2FF00] text-black hover:bg-white hover:text-black font-black uppercase text-xs tracking-wider rounded-none py-6"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link to="/donate">
                        <Gift className="w-4 h-4 mr-2" />
                        Donate Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
