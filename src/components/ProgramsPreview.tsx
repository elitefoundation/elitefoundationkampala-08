
import { motion } from "framer-motion";
import { BookOpen, Heart, Shield, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProgramsPreview = () => {
  const programs = [
    {
      title: "Education Support",
      description: "School fees, supplies, and scholarships for quality education",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600",
      served: "12+ children",
      image: "/lovable-uploads/27147af8-7d65-44dd-a212-5ab5d61073c9.png"
    },
    {
      title: "Health & Nutrition",
      description: "Healthcare, meals, and health education programs",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600",
      served: "18+ children",
      image: "/lovable-uploads/5f2a0b08-6176-4c6a-9b43-f1897db8d0cf.png"
    },
    {
      title: "Child Protection",
      description: "Safe environments and protection from harm",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-green-100 text-green-600",
      served: "8+ children",
      image: "https://github.com/drewversedesign/kaweesa-ministries/blob/main/IMG-20250518-WA0066.jpg?raw=true"
    },
    {
      title: "Family Empowerment",
      description: "Skills training and microfinance for families",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      served: "5+ families",
      image: "/lovable-uploads/1aef3f11-afc1-4188-84e6-1b175af029f8.png"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Key Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive support systems designed to nurture and empower children and families
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-3 md:p-6">
                  <h3 className="text-sm md:text-lg font-bold mb-1">{program.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2">{program.description}</p>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {program.served}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/programs">
            <Button variant="outline" size="lg">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
