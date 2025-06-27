import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LeadershipPreview = () => {
  const leaders = [
    {
      name: "Kimera Godffrey",
      role: "Founder & Executive Director",
      bio: "5+ years in child welfare and community development",
      image: "/lovable-uploads/273495a9-cc19-4b45-9aa7-c60ff9f7432e.png"
    },
    {
      name: "Miss Cindy W",
      role: "Program Director",
      bio: "since day one donor",
      image: "/lovable-uploads/19cc4c5b-35b2-4f5e-b0f4-f5370644ce8f.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dedicated professionals committed to transforming children's lives through experienced leadership and passionate service
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden bg-gray-200">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-orange-600 font-medium text-sm md:text-base mb-2">{leader.role}</p>
                  <p className="text-gray-600 text-sm md:text-base">{leader.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/about">
            <Button variant="outline" size="lg">
              Meet Our Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPreview;
