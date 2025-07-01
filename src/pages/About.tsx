
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import MissionVisionSection from '@/components/about/MissionVisionSection';
import StorySection from '@/components/about/StorySection';
import OrganizationDetailsSection from '@/components/about/OrganizationDetailsSection';
import ContactInfoSection from '@/components/about/ContactInfoSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout backgroundImage="/lovable-uploads/273495a9-cc19-4b45-9aa7-c60ff9f7432e.png">
      <SEO 
        title="About Elite Foundation - Child Welfare Foundation Uganda | Our Mission & Story"
        description="Learn about Elite Foundation's mission to transform children's lives in Uganda. Discover our story, values, and commitment to community empowerment through education, health, and development programs in Kampala."
        keywords={[
          'Elite Foundation mission',
          'nonprofit organization Uganda',
          'charitable foundation story',
          'humanitarian work Uganda',
          'community empowerment foundation',
          'child welfare organization',
          'foundation values mission',
          'social impact organization',
          'Kampala nonprofit',
          'Uganda child welfare'
        ]}
      />
      
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
                Elite Foundation is a registered nonprofit organization dedicated to transforming the lives of children through comprehensive care, education, and community development programs in Uganda and across East Africa.
              </motion.p>
              
              <MissionVisionSection />
              <StorySection />
              <OrganizationDetailsSection />
              <ContactInfoSection />
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
