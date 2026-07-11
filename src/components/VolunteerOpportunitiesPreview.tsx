
import { motion } from "framer-motion";
import { Clock, Users, Heart, BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VolunteerOpportunitiesPreview = () => {
  const opportunities = [
    {
      title: "Teaching Assistant",
      commitment: "4 hours/week",
      description: "Help children with homework and reading skills",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Meal Preparation",
      commitment: "2 hours/week",
      description: "Assist in preparing nutritious meals for children",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Event Coordinator",
      commitment: "Flexible",
      description: "Help organize and run community events",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    }
  ];

  return (
    <section className="py-24 bg-[#101400] text-white relative overflow-hidden font-space uppercase tracking-wider border-b border-stone-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D2FF00] text-black font-black uppercase text-xs tracking-widest rounded-none shadow-[0_0_10px_rgba(210,255,0,0.15)]">
            Collaboration
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Volunteer <span className="text-[#D2FF00] italic font-serif lowercase normal-case">With Us</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto normal-case font-bold tracking-normal text-xs md:text-sm">
            Join our mission and make a direct impact in children's lives through volunteering
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#1a1c16] border border-stone-800 hover:border-[#D2FF00]/40 rounded-none transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 bg-[#D2FF00]/5 border border-[#D2FF00]/20 text-[#D2FF00] rounded-none flex items-center justify-center mb-6`}>
                    {opportunity.icon}
                  </div>
                  <h3 className="text-base font-black mb-2 tracking-wider text-white">{opportunity.title}</h3>
                  <div className="flex items-center text-[#D2FF00] text-xs font-black tracking-widest mb-4">
                    <Clock className="w-4 h-4 mr-2" />
                    {opportunity.commitment}
                  </div>
                  <p className="text-stone-400 text-xs normal-case leading-relaxed font-semibold tracking-normal">{opportunity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center pt-4">
          <Link to="/volunteer">
            <Button className="rounded-none bg-stone-900 border border-stone-800 hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] px-8 py-6 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0px_rgba(0,0,0,0.15)]">
              Learn More About Volunteering
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunitiesPreview;
