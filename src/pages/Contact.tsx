import PageLayout from '@/components/PageLayout';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import SEO from '@/components/SEO';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactInfoGrid from '@/components/contact/ContactInfoGrid';
import OfficeInfoSection from '@/components/contact/OfficeInfoSection';
import QuickContactSection from '@/components/contact/QuickContactSection';
import ContactCallToAction from '@/components/contact/ContactCallToAction';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout backgroundImage="/lovable-uploads/e05b7927-319a-4276-ab7a-b48cfa9162cc.png">
      <SEO 
        title="Contact Us - ELITE FOUNDATION" 
        description="Get in touch with ELITE FOUNDATION. Contact us for volunteering, donations, partnerships, or general inquiries."
        keywords={['contact children ministry', 'Uganda charity contact', 'ministry contact information']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <ContactHeader />
            <ContactInfoGrid />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-8"
              >
                <OfficeInfoSection />
                <QuickContactSection />
              </motion.div>
            </div>
            
            <ContactCallToAction />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
