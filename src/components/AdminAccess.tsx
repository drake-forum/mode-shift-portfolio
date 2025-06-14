import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

const AdminAccess: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      
      // Hidden sequence: 7 clicks on the shield icon
      if (newCount === 7) {
        navigate('/admin');
        return 0; // Reset counter
      }
      
      // Reset counter after 3 seconds of no clicks
      setTimeout(() => {
        setClickCount(0);
      }, 3000);
      
      return newCount;
    });
  };

  return (
    <div 
      className="fixed bottom-4 right-4 z-40 cursor-pointer opacity-20 hover:opacity-40 transition-opacity"
      onClick={handleLogoClick}
      title={`Admin access (${clickCount}/7)`}
    >
      <Shield className="h-6 w-6 text-muted-foreground" />
    </div>
  );
};

export default AdminAccess;