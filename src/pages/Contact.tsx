import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';

const ContactContent = () => {
  const { mode } = usePortfolio();

  return (
    <div className="min-h-screen transition-all duration-500">
      {mode === 'developer' ? <MatrixRain /> : <FloatingBlobs />}
      <Navigation />
      <ModeToggle />
      <main className="relative pt-20">
        <ContactSection />
      </main>
    </div>
  );
};

const Contact = () => {
  return (
    <PortfolioProvider>
      <ContactContent />
    </PortfolioProvider>
  );
};

export default Contact;