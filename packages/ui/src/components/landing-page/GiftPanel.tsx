import React from 'react';

interface GiftPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const GiftPanel: React.FC<GiftPanelProps> = ({ children, className = '' }) => {
  return <div className={`py-16 bg-purple-900 ${className}`}>{children}</div>;
};
