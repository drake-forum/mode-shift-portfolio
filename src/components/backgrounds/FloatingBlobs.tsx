import React from 'react';

const FloatingBlobs: React.FC = () => {
  const blobs = [
    { size: 200, color: '#ff6b6b', delay: '0s', x: '10%', y: '20%' },
    { size: 150, color: '#4ecdc4', delay: '2s', x: '70%', y: '10%' },
    { size: 180, color: '#45b7d1', delay: '4s', x: '80%', y: '60%' },
    { size: 120, color: '#f9ca24', delay: '1s', x: '20%', y: '70%' },
    { size: 160, color: '#6c5ce7', delay: '3s', x: '60%', y: '30%' },
    { size: 140, color: '#fd79a8', delay: '5s', x: '40%', y: '80%' },
  ];

  return (
    <div className="floating-blobs">
      {/* Gradient Wave Background */}
      <div className="fixed inset-0 z-0">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#764ba2" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f093fb" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4facfe" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00f2fe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#43e97b" stopOpacity="0.2" />
            </linearGradient>
            <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" />
            </filter>
          </defs>
          
          {/* Animated Wave Paths */}
          <path
            d="M0,300 C150,200 300,400 600,300 C900,200 1200,400 1440,300 L1440,800 L0,800 Z"
            fill="url(#waveGradient1)"
            filter="url(#blur)"
            className="animate-pulse"
            style={{ animationDuration: '6s' }}
          />
          <path
            d="M0,400 C200,300 400,500 700,400 C1000,300 1300,500 1440,400 L1440,800 L0,800 Z"
            fill="url(#waveGradient2)"
            filter="url(#blur)"
            className="animate-pulse"
            style={{ animationDuration: '8s', animationDelay: '2s' }}
          />
        </svg>
      </div>

      {/* Floating Blobs */}
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="blob"
          style={{
            width: blob.size,
            height: blob.size,
            backgroundColor: blob.color,
            left: blob.x,
            top: blob.y,
            animationDelay: blob.delay,
            animationDuration: `${6 + index}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBlobs;