
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const LeadershipSection = () => {
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
    <div>
      <h3 className="text-2xl font-bold mb-6">Meet Our Leadership</h3>
      <p className="text-gray-600 mb-8 text-center">
        Dedicated professionals committed to transforming children's lives through experienced leadership and passionate service
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2">{leader.name}</h4>
                <p className="text-orange-600 font-medium mb-2">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
