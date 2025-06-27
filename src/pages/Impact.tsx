import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Users, BookOpen, Heart, Home, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import SEO from '@/components/SEO';

const Impact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const impactStats = [
    {
      number: "500+",
      label: "Children Supported",
      description: "Direct beneficiaries of our programs worldwide",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "25",
      label: "Countries Served",
      description: "Across multiple continents",
      icon: <MapPin className="w-8 h-8" />,
      color: "bg-green-100 text-green-600"
    },
    {
      number: "98%",
      label: "Program Success Rate",
      description: "Excellence in program delivery",
      icon: <BookOpen className="w-8 h-8" />,
      color: "bg-orange-100 text-orange-600"
    },
    {
      number: "200+",
      label: "Families Empowered",
      description: "Through comprehensive support programs",
      icon: <Home className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600"
    }
  ];
  
  return (
    <PageLayout backgroundImage="/lovable-uploads/478c2f7f-c3b9-48ff-a214-9cdcec5fa919.png">
      <SEO 
        title="Our Impact - Elite Foundation" 
        description="See the real impact of our work with children and families worldwide. Success stories, statistics, and testimonials from our programs."
        keywords={['elite foundation impact', 'charity results', 'success stories', 'program outcomes', 'global impact']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-6">Our Global Impact</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how your support is transforming lives and building stronger communities 
                worldwide through excellence in action. Every number represents a life changed.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {stat.icon}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                      <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                      <p className="text-gray-600 text-sm">{stat.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-8">Program Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education Excellence</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 98% of children achieved academic improvement</li>
                    <li>• 95% showed significant skill development</li>
                    <li>• 97% program completion rate</li>
                    <li>• 150 children received higher education scholarships</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Health & Wellness</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 85% improvement in health outcomes</li>
                    <li>• 2,500+ children received health services</li>
                    <li>• 100% vaccination coverage in program areas</li>
                    <li>• 300 children received specialized medical care</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Family Empowerment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 400 families started sustainable businesses</li>
                    <li>• 300% average increase in family income</li>
                    <li>• 90% of families achieved food security</li>
                    <li>• 200 parents completed skills training</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 100 children placed in safe environments</li>
                    <li>• 100% of cases receive ongoing support</li>
                    <li>• 180 families successfully reunified</li>
                    <li>• 50 children placed in loving homes</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Be Part of Our Excellence</h2>
              <p className="text-gray-600 mb-6">
                Join us in creating even more success stories and transforming more lives through excellence in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/donate" className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Donate Now
                </Link>
                <Link to="/volunteer" className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  Volunteer With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Impact;
