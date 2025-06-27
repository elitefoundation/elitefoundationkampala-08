
import PageLayout from '@/components/PageLayout';
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import CareersHeader from '@/components/careers/CareersHeader';
import WhyWorkWithUs from '@/components/careers/WhyWorkWithUs';
import CurrentOpportunities from '@/components/careers/CurrentOpportunities';
import HRContact from '@/components/careers/HRContact';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <SEO 
        title="Careers - ELITE FOUNDATION" 
        description="Join our team and make a difference in children's lives. Explore career opportunities at ELITE FOUNDATION in Uganda."
        keywords={['ministry jobs Uganda', 'children ministry careers', 'NGO jobs Uganda', 'charity work opportunities']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <CareersHeader />
            <WhyWorkWithUs />
            <CurrentOpportunities />
            <HRContact />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
