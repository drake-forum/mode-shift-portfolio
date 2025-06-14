import React from 'react';
import { Switch } from '@/components/ui/switch';
import { usePortfolio } from '@/contexts/PortfolioContext';

const ModeToggle: React.FC = () => {
  const { mode, toggleMode } = usePortfolio();

  return (
    <div className="fixed top-6 right-6 z-50 content-layer">
      <div className="flex items-center gap-3 bg-card/80 backdrop-blur-md rounded-full px-4 py-3 border border-border/50 shadow-lg">
        <span className="text-sm font-medium">
          👨‍💻 Developer
        </span>
        <Switch
          checked={mode === 'designer'}
          onCheckedChange={toggleMode}
          className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-primary/20"
        />
        <span className="text-sm font-medium">
          🎨 Designer
        </span>
      </div>
    </div>
  );
};

export default ModeToggle;