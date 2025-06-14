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
import ServicesSection from '@/components/ServicesSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import PortfolioSection from '@/components/PortfolioSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreviewSection from '@/components/BlogPreviewSection';
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
        <ServicesSection />
        <ProcessSection />
        <FeaturedProjectsSection />
        <PortfolioSection />
        <StatsSection />
        <TestimonialsSection />
        <BlogPreviewSection />
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
