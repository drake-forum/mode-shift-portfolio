import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const PortfolioContent = () => {
  const { mode } = usePortfolio();

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Background Animation */}
      {mode === 'developer' ? <MatrixRain /> : <FloatingBlobs />}
      
      {/* Mode Toggle */}
      <ModeToggle />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
};

const Index = () => {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
};

export default Index;
