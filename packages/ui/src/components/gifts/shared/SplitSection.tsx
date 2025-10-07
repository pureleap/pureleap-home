import React from 'react';

/**
 * Props for the SplitSection component.
 */
interface SplitSectionProps {
  /** The child elements to render inside the split section */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * SplitSection component that provides a responsive split layout container.
 * @param children - The image and text elements to display
 * @param className - Additional CSS classes to apply
 */
export function SplitSection({ children, className }: SplitSectionProps) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-center md:justify-evenly items-center ${className || ''}`}
    >
      {children}
    </div>
  );
}
