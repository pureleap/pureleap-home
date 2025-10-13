import React from 'react';

/**
 * Props for the FeatureContent component.
 */
interface FeatureContentProps {
  /** The heading text for the feature */
  heading: string;
  /** The descriptive content for the feature */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureContent component that displays the heading and description for a feature.
 * @param heading - The heading text
 * @param children - The descriptive content
 * @param className - Additional CSS classes to apply
 */
export function FeatureContent({ heading, children, className }: FeatureContentProps) {
  return (
    <div className={`max-w-md pr-2 sm:pr-0 ${className || ''}`}>
      <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">{heading}</h3>
      <p className="text-body text-center sm:text-left">{children}</p>
    </div>
  );
}
