import React from 'react';

/**
 * Props for the FeatureBlock component.
 */
interface FeatureBlockProps {
  /** The child elements to render inside the block */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureBlock component that displays a feature with image, heading, and content vertically stacked and center aligned.
 * @param children - The image and content elements
 * @param className - Additional CSS classes to apply
 */
export function FeatureBlock({ children, className }: FeatureBlockProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center pb-16 text-center ${className || ''}`}
    >
      {children}
    </div>
  );
}
