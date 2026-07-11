
import { motion } from "framer-motion";
import { Users, MapPin, BookOpen, Home, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const QuickImpactStats = () => {
  const stats = [
    {
      number: "24+",
      label: "Children Supported",
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "95%",
      label: "School Enrollment",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      number: "1",
      label: "Communities Served",
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-green-100 text-green-600"
    },
    {
      number: "5+",
      label: "Families Empowered",
      icon: <Home className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#101400] text-white border-b border-[#D2FF00]/10 font-space uppercase tracking-wider">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/lovable-uploads/39671993-1bb4-4bb6-8819-3ca5c07c0042.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-[#101400]/90" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#D2FF00] text-black font-black uppercase text-xs tracking-widest rounded-none">
            Metrics & Achievements
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Our Impact <span className="text-[#D2FF00] italic font-serif lowercase normal-case">at a Glance</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto normal-case font-bold tracking-normal text-xs md:text-sm">
            See the real difference your support makes in the lives of children and families across Uganda
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center bg-[#1a1c16] rounded-none border border-stone-800 hover:border-[#D2FF00]/40 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-neon-glow">
                <CardContent className="p-6 md:p-8">
                  <div className={`w-12 h-12 bg-[#D2FF00]/5 border border-[#D2FF00]/20 text-[#D2FF00] rounded-none flex items-center justify-center mx-auto mb-4`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-2 text-white">{stat.number}</h3>
                  <p className="text-stone-400 text-[10px] font-black tracking-widest">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickImpactStats;
