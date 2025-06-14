import React from 'react';
import { usePortfolio } from '@/contexts/PortfolioContext';
import { Terminal, Palette } from 'lucide-react';

const ModeToggle: React.FC = () => {
  const { mode, toggleMode } = usePortfolio();

  return (
    <div className="fixed top-6 right-6 z-50 content-layer">
      <div className="relative">
        {/* Developer Mode Button */}
        <button
          onClick={toggleMode}
          className={`
            absolute top-0 right-0 transition-all duration-500 ease-in-out transform
            ${mode === 'developer' 
              ? 'scale-100 opacity-100 translate-x-0' 
              : 'scale-75 opacity-0 translate-x-8 pointer-events-none'
            }
          `}
        >
          <div className="bg-gradient-to-r from-green-900/90 to-green-800/90 backdrop-blur-md rounded-lg px-4 py-3 border border-green-500/30 shadow-lg hover:shadow-green-500/20 transition-all duration-200">
            <div className="flex items-center gap-2 text-green-400 font-mono text-sm">
              <Terminal size={16} />
              <span className="text-xs">&gt; developer_mode</span>
              <div className="w-2 h-4 bg-green-400 animate-pulse ml-1"></div>
            </div>
          </div>
        </button>

        {/* Designer Mode Button */}
        <button
          onClick={toggleMode}
          className={`
            absolute top-0 right-0 transition-all duration-500 ease-in-out transform
            ${mode === 'designer' 
              ? 'scale-100 opacity-100 translate-x-0' 
              : 'scale-75 opacity-0 translate-x-8 pointer-events-none'
            }
          `}
        >
          <div className="bg-gradient-to-r from-blue-50/90 to-purple-50/90 backdrop-blur-md rounded-full px-5 py-3 border border-blue-200/50 shadow-lg hover:shadow-blue-200/30 transition-all duration-200">
            <div className="flex items-center gap-2 text-blue-600">
              <Palette size={18} />
              <span className="font-medium text-sm">Designer</span>
              <div className="flex gap-1 ml-1">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModeToggle;