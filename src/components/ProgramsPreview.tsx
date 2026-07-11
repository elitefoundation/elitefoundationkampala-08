
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
      title: "Community Engagement",
      description: "Building relationships and connections within communities",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600",
      served: "20+ children",
      image: "/lovable-uploads/8b47cc37-07ce-4932-b7e1-0d99bc2a14db.png"
    }
  ];

  return (
    <section className="py-24 bg-[#F4F4ED] text-[#101400] relative overflow-hidden font-space uppercase tracking-wider border-b border-stone-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#101400] text-[#D2FF00] font-black uppercase text-xs tracking-widest rounded-none shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Nurture & Protect
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#101400] tracking-tight uppercase">Our Key <span className="text-[#101400]/70 stroke-text-dark italic lowercase font-serif normal-case">Programs</span></h2>
          <p className="text-stone-600 max-w-2xl mx-auto normal-case font-bold tracking-normal text-xs md:text-sm">
            Comprehensive support systems designed to nurture and empower children and families
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="cursor-pointer bg-white border border-stone-200 rounded-none shadow-[4px_4px_0px_#101400] hover:shadow-[8px_8px_0px_#D2FF00] transition-all duration-300 overflow-hidden group text-left h-full flex flex-col justify-between">
                <div className="aspect-video md:aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#101400] border border-[#D2FF00]/30 flex items-center justify-center text-[#D2FF00]">
                    {program.icon}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm md:text-base font-black mb-2 tracking-wider text-[#101400]">{program.title}</h3>
                    <p className="text-xs text-stone-600 line-clamp-3 normal-case leading-relaxed font-semibold tracking-normal mb-4">{program.description}</p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-stone-100">
                    <span className="text-[10px] font-black text-[#101400] bg-[#D2FF00] px-3 py-1.5 rounded-none shadow-[2px_2px_0px_#101400]">
                      {program.served}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center pt-4">
          <Link to="/programs">
            <Button className="rounded-none bg-stone-900 border border-stone-800 hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] px-8 py-6 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
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
