import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '@/contexts/PortfolioContext';
import ContactModal from './ContactModal';

const HeroSection: React.FC = () => {
  const { mode } = usePortfolio();
  const [currentSubIntro, setCurrentSubIntro] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const devSubIntros = [
    'Full-Stack Alchemist',
    'Code Compiler & Logic Crafter',
    'Bug Slayer & Terminal Tamer',
    'API Whisperer',
    'System Architect in Dark Mode'
  ];

  const designerSubIntros = [
    'Pixel Perfectionist',
    'Color Composer & Visual Poet',
    'Brand Storyteller',
    'Layout Magician',
    'Creative Thinker with a Gradient Mind'
  ];

  const currentIntros = mode === 'developer' ? devSubIntros : designerSubIntros;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubIntro((prev) => (prev + 1) % currentIntros.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIntros.length]);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 content-layer">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className={`text-6xl md:text-8xl font-bold mb-6 transition-all duration-500 ${
              mode === 'developer' ? 'dev-gradient-text font-mono' : 'gradient-text'
            }`}>
              Drake Forum
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <h2 className={`text-2xl md:text-3xl font-semibold transition-all duration-500 ${
                mode === 'developer' 
                  ? 'typewriter text-primary font-mono' 
                  : 'animate-fade-in text-primary'
              }`}>
                {currentIntros[currentSubIntro]}
              </h2>
            </div>
          </div>

          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto transition-all duration-500 ${
            mode === 'developer' 
              ? 'text-muted-foreground font-mono' 
              : 'text-muted-foreground'
          }`}>
            {mode === 'developer' 
              ? '// Transforming ideas into elegant code solutions' 
              : 'Crafting beautiful digital experiences that inspire and delight users'
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/projects"
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block ${
                mode === 'developer'
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 font-mono border border-primary'
                  : 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
              }`}
            >
              {mode === 'developer' ? '> View Projects' : 'View My Work'}
            </Link>
            
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                mode === 'developer'
                  ? 'border border-primary text-primary hover:bg-primary/10 font-mono'
                  : 'border border-primary text-primary hover:bg-primary/10'
              }`}
            >
              {mode === 'developer' ? '$ contact --me' : 'Get In Touch'}
            </button>
          </div>
        </div>
      </section>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;