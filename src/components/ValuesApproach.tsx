

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Target, Shield, BookOpen, Handshake } from 'lucide-react';

const ValuesApproach = () => {
  const values = [
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Love & Compassion",
      description: "Every child deserves unconditional love and care. We approach each situation with empathy and understanding.",
      color: "bg-stone-900 text-[#D2FF00] border-stone-800"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community Partnership",
      description: "We work hand-in-hand with families and local communities to create sustainable, lasting change.",
      color: "bg-stone-900 text-[#D2FF00] border-stone-800"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Holistic Development",
      description: "We address the complete needs of children - education, health, protection, and emotional well-being.",
      color: "bg-stone-900 text-[#D2FF00] border-stone-800"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Child Protection",
      description: "Creating safe environments where children can grow, learn, and thrive without fear or harm.",
      color: "bg-stone-900 text-[#D2FF00] border-stone-800"
    },
    {
      icon: <BookOpen className="w-7 h-7" />,
      title: "Quality Education",
      description: "Providing access to excellent educational opportunities that unlock every child's potential.",
      color: "bg-stone-900 text-[#D2FF00] border-stone-800"
    },
    {
      icon: <Handshake className="w-7 h-7" />,
      title: "Transparency & Trust",
      description: "Building lasting relationships through honest communication and accountable stewardship.",
      color: "bg-stone-900 text-[#D2FF00] border-stone-800"
    }
  ];

  const approaches = [
    {
      step: "01",
      title: "Community Assessment",
      description: "We start by understanding the unique needs and challenges of each community we serve."
    },
    {
      step: "02", 
      title: "Collaborative Planning",
      description: "Working with local leaders and families to develop tailored programs that address specific needs."
    },
    {
      step: "03",
      title: "Implementation & Support",
      description: "Delivering comprehensive programs while providing ongoing mentorship and resources."
    },
    {
      step: "04",
      title: "Monitoring & Growth",
      description: "Continuously evaluating impact and adapting our approach to ensure sustainable outcomes."
    }
  ];

  return (
    <section className="py-24 bg-[#F4F4ED] text-[#101400] relative overflow-hidden font-space uppercase tracking-wider">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#101400] text-[#D2FF00] font-black uppercase text-xs tracking-widest rounded-none shadow-[0_0_10px_rgba(0,0,0,0.15)]">
            Our Values & Approach
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-[#101400] tracking-tight">How We Make <span className="text-[#101400]/70 stroke-text-dark italic lowercase font-serif normal-case">a Difference</span></h2>
          <p className="text-stone-600 max-w-2xl mx-auto normal-case font-bold tracking-normal text-sm md:text-base leading-relaxed">
            Our work is guided by core values and a proven approach that ensures every child receives the care and support they deserve
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border border-stone-200 rounded-none shadow-[4px_4px_0px_#101400] hover:shadow-[8px_8px_0px_#D2FF00] transition-all duration-300 transform hover:-translate-y-1 text-left">
                <CardContent className="p-6 md:p-8">
                  <div className={`w-14 h-14 ${value.color} rounded-none flex items-center justify-center mb-6 border`}>
                    {value.icon}
                  </div>
                  <h3 className="text-base font-black mb-3 tracking-widest text-[#101400]">{value.title}</h3>
                  <p className="text-stone-600 text-xs leading-relaxed normal-case font-medium tracking-normal">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Our Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white border-2 border-[#101400] rounded-none p-10 shadow-[6px_6px_0px_#101400] mb-20"
        >
          <div className="text-center mb-12 border-b border-stone-100 pb-8">
            <h3 className="text-xl font-black tracking-widest text-[#101400]">Our Four-Step Approach</h3>
            <p className="text-stone-500 max-w-xl mx-auto normal-case text-xs font-bold tracking-normal mt-2">
              A systematic methodology that ensures sustainable impact and meaningful change in every community we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="relative text-left"
              >
                <div>
                  <div className="w-12 h-12 bg-[#101400] text-[#D2FF00] rounded-none flex items-center justify-center font-black text-sm mb-4 shadow-[3px_3px_0px_#D2FF00]">
                    {approach.step}
                  </div>
                  <h4 className="font-black text-[#101400] tracking-widest text-xs mb-2">{approach.title}</h4>
                  <p className="text-stone-600 text-xs normal-case font-semibold tracking-normal leading-relaxed">{approach.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-[#101400] border-2 border-[#D2FF00]/30 rounded-none p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 50 Q 50 100 100 50" stroke="white" strokeWidth="1" fill="none" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-widest">Join Us in Our Mission</h3>
            <p className="text-stone-400 mb-8 max-w-2xl mx-auto normal-case tracking-normal text-xs md:text-sm leading-relaxed font-semibold">
              When you partner with us, you become part of a community dedicated to transforming lives through love, care, and sustainable support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-xs font-black">
              <button className="px-8 py-4 bg-[#D2FF00] text-black rounded-none hover:bg-white hover:text-black transition-all duration-300 tracking-wider">
                Support Our Work
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-none hover:bg-white hover:text-black hover:border-white transition-all duration-300 tracking-wider">
                Learn More About Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesApproach;

