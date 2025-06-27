
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButton from './FloatingContactButton';
import FloatingDonateButton from './FloatingDonateButton';
import BackToTopButton from './BackToTopButton';

interface PageLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
}

const PageLayout = ({ children, backgroundImage }: PageLayoutProps) => {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      {backgroundImage && (
        <div className="fixed inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-800/30 to-stone-900/40"></div>
          <div className="absolute inset-0 bg-stone-50/85"></div>
        </div>
      )}
      
      {/* Content Container */}
      <div className={`relative z-10 min-h-screen ${!backgroundImage ? 'bg-gradient-to-b from-wrlds-light via-stone-50 to-stone-100' : ''}`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContactButton />
        <FloatingDonateButton />
        <BackToTopButton />
      </div>
    </div>
  );
};

export default PageLayout;
