import React from 'react';
import artSupplies from './art-supplies-background-pattern.jpeg';
import craftingToolsBackground from './crafting-tools-background-wide.jpeg';
import gentle from './gentle-background-pattern.jpg';

interface GiftPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const GiftPanel: React.FC<GiftPanelProps> = ({ children, className = '' }) => {
  return (
    <div className={`py-16 relative ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${gentle})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
