import React from 'react';

/**
 * Props for the FeatureBlockContent component.
 */
interface FeatureBlockContentProps {
  /** The heading text for the feature */
  heading: string;
  /** The descriptive content for the feature */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureBlockContent component that displays the heading and description for a feature block, center aligned.
 * @param heading - The heading text
 * @param children - The descriptive content
 * @param className - Additional CSS classes to apply
 */
export function FeatureBlockContent({ heading, children, className }: FeatureBlockContentProps) {
  return (
    <div className={`max-w-md ${className || ''}`}>
      <h3 className="text-xl font-semibold mb-2">{heading}</h3>
      <p className="text-body">{children}</p>
    </div>
  );
}
