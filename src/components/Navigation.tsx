import React from 'react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '@/contexts/PortfolioContext';

const Navigation: React.FC = () => {
  const { mode } = usePortfolio();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-6 left-6 z-50 content-layer">
      <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-md rounded-lg p-4 border border-border/50 shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`px-4 py-2 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
              mode === 'developer' 
                ? 'font-mono text-sm' 
                : 'font-medium'
            }`}
          >
            {mode === 'developer' ? `${item.name.toLowerCase()}/` : item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;