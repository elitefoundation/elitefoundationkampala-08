
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import PhotoGallery from '@/components/PhotoGallery';
import QuickImpactStats from '@/components/QuickImpactStats';
import AboutMinistry from '@/components/AboutMinistry';
import LeadershipPreview from '@/components/LeadershipPreview';
import ProgramsPreview from '@/components/ProgramsPreview';
import ValuesApproach from '@/components/ValuesApproach';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import HowToHelp from '@/components/HowToHelp';
import VolunteerOpportunitiesPreview from '@/components/VolunteerOpportunitiesPreview';
import DonationImpactSection from '@/components/DonationImpactSection';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="Elite Foundation - Transforming Children's Lives in Uganda | Nonprofit Organization Kampala"
        description="Elite Foundation is a dedicated nonprofit organization transforming children's lives through education, healthcare, and community development programs in Kampala, Uganda and across East Africa. Join our mission to empower communities."
        imageUrl="/lovable-uploads/efbbe5d8-fd40-4008-bd87-a85de6f1ca90.png"
        keywords={[
          'Elite Foundation',
          'Uganda nonprofit foundation',
          'child welfare foundation',
          'education for underprivileged',
          'community development programs',
          'Kampala charity organization',
          'youth empowerment programs',
          'donate to Uganda charity',
          'volunteer opportunities Uganda',
          'support children in need'
        ]}
      />
      <Hero />
      <PhotoGallery />
      <QuickImpactStats />
      <AboutMinistry />
      <LeadershipPreview />
      <ProgramsPreview />
      <ValuesApproach />
      <TestimonialsCarousel />
      <HowToHelp />
      <VolunteerOpportunitiesPreview />
      <DonationImpactSection />
    </PageLayout>
  );
};

export default Index;
