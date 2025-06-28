import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <PageLayout backgroundImage="/lovable-uploads/273495a9-cc19-4b45-9aa7-c60ff9f7432e.png">
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About Elite Foundation
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Elite Foundation is a registered organization dedicated to transforming the lives of children through comprehensive care, education, and community development programs worldwide.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    To provide holistic care, quality education, and protection for children worldwide, 
                    empowering them to reach their full potential and become productive members of society through excellence in every program we deliver.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-600 mb-6">
                    A world where every child has access to quality education, healthcare, protection, 
                    and opportunities to thrive in a nurturing and supportive environment through excellence in action.
                  </p>
                  <h4 className="text-xl font-bold mb-4">Our Core Values</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Excellence:</strong> Committed to providing the highest quality programs and services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> Using cutting-edge approaches to maximize impact and sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Global Partnership:</strong> Working together with communities worldwide for sustainable change</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-8">
                  <p className="text-gray-600 mb-4">
                    Founded with a vision for global excellence in child welfare, Elite Foundation 
                    began as an ambitious initiative to address the critical needs of children worldwide through innovative, high-quality programs.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Over the years, we have grown from a small team with big dreams to a globally recognized organization 
                    supporting thousands of children and families across multiple continents. Our comprehensive approach addresses 
                    both immediate needs and long-term sustainable solutions.
                  </p>
                  <p className="text-gray-600">
                    Today, we continue to expand our reach while maintaining our core commitment to excellence in every aspect 
                    of our work. We collaborate with local communities, international partners, schools, and healthcare 
                    providers to ensure our programs create lasting, transformative impact.
                  </p>
                </div>

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
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Organization Details</h2>
                <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-8 border border-orange-200 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Official Organization Information</h3>
                  <p className="text-gray-800 mb-2 font-semibold">
                    <strong className="text-gray-900">Status:</strong> Registered Non-Profit Organization
                  </p>
                  <p className="text-gray-800 mb-2 font-semibold">
                    <strong className="text-gray-900">Operations:</strong> Global Outreach Programs
                  </p>
                  <p className="text-gray-800 font-semibold">
                    <strong className="text-gray-900">Mission:</strong> Excellence in Action for Children Worldwide
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
                    <h4 className="font-bold text-blue-900 mb-2">Global Operations</h4>
                    <p className="text-blue-800">Worldwide Presence</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                    <h4 className="font-bold text-green-900 mb-2">Email</h4>
                    <p className="text-green-800">info@elitefoundation.org</p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 text-center">
                    <h4 className="font-bold text-orange-900 mb-2">Phone</h4>
                    <p className="text-orange-800">+1 (555) 123-4567</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/volunteer" className="inline-flex items-center px-5 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all group">
                Join Our Mission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
