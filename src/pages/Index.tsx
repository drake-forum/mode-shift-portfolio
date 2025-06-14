import React from 'react';
import { PortfolioProvider, usePortfolio } from '@/contexts/PortfolioContext';
import MatrixRain from '@/components/backgrounds/MatrixRain';
import FloatingBlobs from '@/components/backgrounds/FloatingBlobs';
import ModeToggle from '@/components/ModeToggle';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const PortfolioContent = () => {
  const { mode } = usePortfolio();

  return (
    <div className="min-h-screen transition-all duration-500">
      {/* Background Animation */}
      {mode === 'developer' ? <MatrixRain /> : <FloatingBlobs />}
      
      {/* Mode Toggle */}
      <Navigation />
      <ModeToggle />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <PortfolioSection />
        <StatsSection />
        <TestimonialsSection />
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
