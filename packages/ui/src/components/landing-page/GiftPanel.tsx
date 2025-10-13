import React from 'react';
import gentle from './gentle-background-pattern.jpg';

interface GiftPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const GiftPanel: React.FC<GiftPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`py-16 relative rounded-lg bg-white overflow-hidden ${className}`}>
      {/* image itself is masked so edges become transparent */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gentle})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          WebkitMaskImage: 'radial-gradient(200% 50% at center, black 10%, transparent 100%)',
          maskImage: 'radial-gradient(200% 50% at center, black 10%, transparent 100%)',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
