import React, { createContext, useContext, useState, useEffect } from 'react';

export type PortfolioMode = 'developer' | 'designer';

interface PortfolioContextType {
  mode: PortfolioMode;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<PortfolioMode>('designer');

  useEffect(() => {
    // Load saved mode from localStorage
    const savedMode = localStorage.getItem('portfolio-mode') as PortfolioMode;
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    // Update CSS variables based on mode
    const root = document.documentElement;
    
    if (mode === 'developer') {
      root.style.setProperty('--background', 'var(--dev-background)');
      root.style.setProperty('--foreground', 'var(--dev-foreground)');
      root.style.setProperty('--primary', 'var(--dev-accent)');
      root.style.setProperty('--secondary', 'var(--dev-secondary)');
      root.style.setProperty('--muted', 'var(--dev-muted)');
      root.style.setProperty('--accent', 'var(--dev-accent)');
      document.body.className = 'dev-mode';
    } else {
      root.style.setProperty('--background', 'var(--designer-background)');
      root.style.setProperty('--foreground', 'var(--designer-foreground)');
      root.style.setProperty('--primary', 'var(--designer-accent)');
      root.style.setProperty('--secondary', 'var(--designer-secondary)');
      root.style.setProperty('--muted', 'var(--designer-muted)');
      root.style.setProperty('--accent', 'var(--designer-accent)');
      root.style.setProperty('--card', 'var(--designer-secondary)');
      root.style.setProperty('--card-foreground', 'var(--designer-foreground)');
      root.style.setProperty('--border', 'var(--designer-muted)');
      root.style.setProperty('--input', 'var(--designer-muted)');
      root.style.setProperty('--muted-foreground', '148 163 184');
      root.style.setProperty('--primary-foreground', 'var(--designer-background)');
      root.style.setProperty('--accent-foreground', 'var(--designer-background)');
      document.body.className = 'designer-mode';
    }
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === 'developer' ? 'designer' : 'developer';
    setMode(newMode);
    localStorage.setItem('portfolio-mode', newMode);
  };

  return (
    <PortfolioContext.Provider value={{ mode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};