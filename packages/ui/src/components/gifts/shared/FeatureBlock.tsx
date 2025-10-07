import React from 'react';

/**
 * Props for the FeatureBlock component.
 */
interface FeatureBlockProps {
  /** The child elements to render inside the block */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Offset value for horizontal positioning on desktop screens (positive or negative number) */
  offset?: number;
}

/**
 * FeatureBlock component that displays a feature with image, heading, and content vertically stacked and center aligned.
 * @param children - The image and content elements
 * @param className - Additional CSS classes to apply
 * @param offset - Offset value for horizontal positioning on desktop screens
 */
export function FeatureBlock({ children, className, offset }: FeatureBlockProps) {
  const style = offset ? ({ '--offset': `${offset * 0.25}rem` } as React.CSSProperties) : {};
  const offsetClass = offset ? 'sm:[transform:translateX(var(--offset))]' : '';
  return (
    <div
      className={`flex flex-col items-center justify-center pb-16 text-center ${offsetClass} ${className || ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
