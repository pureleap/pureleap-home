import React from 'react';

/**
 * Props for the FeatureRow component.
 */
interface FeatureRowProps {
  /** The child elements to render inside the row */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureRow component that displays a single feature item with image and content.
 * @param children - The image and content elements
 * @param className - Additional CSS classes to apply
 */
export function FeatureRow({ children, className }: FeatureRowProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-start pb-16 ${className || ''}`}
    >
      {children}
    </div>
  );
}
