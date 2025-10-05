import React from 'react';

/**
 * Props for the FeatureList component.
 */
interface FeatureListProps {
  /** The child elements to render inside the list */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureList component that wraps a collection of feature items.
 * @param children - The feature items to display
 * @param className - Additional CSS classes to apply
 */
export function FeatureList({ children, className }: FeatureListProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className || ''}`}>{children}</div>
  );
}
