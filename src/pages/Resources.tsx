
import PageLayout from '@/components/PageLayout';
import { useEffect } from 'react';
import SEO from '@/components/SEO';
import ResourcesHeader from '@/components/resources/ResourcesHeader';
import AnnualReportsSection from '@/components/resources/AnnualReportsSection';
import EducationalResourcesSection from '@/components/resources/EducationalResourcesSection';
import FinancialReportsSection from '@/components/resources/FinancialReportsSection';
import PoliciesSection from '@/components/resources/PoliciesSection';
import ResourceCallToAction from '@/components/resources/ResourceCallToAction';

const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Resources - Elite Foundation | Transparency Reports & Educational Materials Uganda"
        description="Access Elite Foundation's annual reports, educational materials, financial statements, and policy documents. Transparency and accountability in our nonprofit operations serving children in Uganda."
        keywords={[
          'nonprofit resources Uganda',
          'charity transparency reports',
          'foundation annual reports',
          'educational resources',
          'community development guides',
          'nonprofit accountability',
          'charity financial reports',
          'foundation impact reports',
          'Elite Foundation transparency',
          'Uganda charity resources'
        ]}
      />
      
      <ResourcesHeader />
      
      <div className="container mx-auto px-4 py-16">
        <AnnualReportsSection />
        <EducationalResourcesSection />
        <FinancialReportsSection />
        <PoliciesSection />
        <ResourceCallToAction />
      </div>
    </PageLayout>
  );
};

export default Resources;
