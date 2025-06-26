
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-50/95 backdrop-blur-md shadow-lg border-b border-stone-200/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-orange-glow transition-all duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-stone-800" : "text-white"
            }`}>
              Elite Foundation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                          location.pathname === item.href
                            ? isScrolled
                              ? "text-orange-600 bg-orange-50"
                              : "text-orange-400 bg-white/10"
                            : isScrolled
                            ? "text-stone-700 hover:text-orange-600 hover:bg-stone-100"
                            : "text-stone-200 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              asChild
              variant={isScrolled ? "default" : "glass"}
              className={`${
                isScrolled
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  : "bg-white/10 hover:bg-white/20 text-white border-white/30"
              } hover:shadow-lg transition-all duration-300 hover:scale-105`}
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
                    isScrolled ? "text-stone-800 hover:bg-stone-100" : "text-white hover:bg-white/10"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-stone-50 border-stone-200">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-stone-800">Elite Foundation</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                          location.pathname === item.href
                            ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500"
                            : "text-stone-700 hover:bg-stone-100 hover:text-orange-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    );
                  })}

                  <div className="pt-4 border-t border-stone-200">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
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
