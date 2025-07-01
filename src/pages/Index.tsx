
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
        title="Elite Foundation - Transforming Lives Through Excellence and Care" 
        description="Elite Foundation is a dedicated organization committed to improving the lives of children through education, health, protection, and community development programs."
        imageUrl="/lovable-uploads/353ee26c-994b-45f6-b50a-7201d0297389.png"
        keywords={['elite foundation', 'children charity', 'child welfare', 'education programs', 'community development', 'child protection', 'charitable organization']}
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
