import { motion } from "framer-motion";
import { BookOpen, Heart, Home, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DonationImpactSection = () => {
  const donationTiers = [
    {
      amount: "$10",
      impact: "Provides school supplies for 1 child for 2 months",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      amount: "$25",
      impact: "Feeds 3 children nutritious meals for a week",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-100 text-red-600"
    },
    {
      amount: "$50",
      impact: "Covers basic healthcare for 1 child for 2 months",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      amount: "$100",
      impact: "Supports a family with skills training for 1 month",
      icon: <Home className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
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
            Giving
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Your Donation <span className="text-[#D2FF00] italic font-serif lowercase normal-case">Creates Real Impact</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto normal-case font-bold tracking-normal text-xs md:text-sm">
            See exactly how your generosity transforms lives and builds stronger communities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#1a1c16] border border-stone-800 hover:border-[#D2FF00]/40 rounded-none transition-all duration-300 transform hover:-translate-y-1 text-center">
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <div className="w-14 h-14 bg-stone-900 border border-[#D2FF00]/20 text-[#D2FF00] rounded-none flex items-center justify-center mx-auto mb-6">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-widest text-[#D2FF00]">{tier.amount}</h3>
                  <p className="text-stone-400 text-xs normal-case leading-relaxed font-semibold tracking-normal">{tier.impact}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center pt-4">
          <Link to="/donate">
            <Button 
              className="rounded-none bg-[#D2FF00] text-black hover:bg-white hover:text-black hover:shadow-neon-glow-lg px-10 py-6 text-xs font-black uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Make a Donation Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DonationImpactSection;
