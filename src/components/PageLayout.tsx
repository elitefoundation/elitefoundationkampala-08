
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButton from './FloatingContactButton';
import FloatingDonateButton from './FloatingDonateButton';
import BackToTopButton from './BackToTopButton';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingContactButton />
      <FloatingDonateButton />
      <BackToTopButton />
    </div>
  );
};

export default PageLayout;
