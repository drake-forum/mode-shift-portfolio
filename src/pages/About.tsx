import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';

const AboutContent = () => {
  const { mode } = usePortfolio();

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Background Animation */}
      {mode === 'developer' ? <MatrixRain /> : <FloatingBlobs />}
      
      {/* Navigation & Mode Toggle */}
      <Navigation />
      <ModeToggle />
      
      {/* Main Content */}
      <main className="relative pt-20">
        <AboutSection />
      </main>
    </div>
  );
};

const About = () => {
  return (
    <PortfolioProvider>
      <AboutContent />
    </PortfolioProvider>
  );
};

export default About;