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