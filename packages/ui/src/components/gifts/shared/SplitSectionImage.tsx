import React from 'react';

/**
 * Props for the SplitSectionImage component.
 */
interface SplitSectionImageProps {
  /** The source URL of the image */
  src: string;
  /** The alt text for the image */
  alt: string;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * SplitSectionImage component that displays an image in a split section layout.
 * @param src - The source URL of the image
 * @param alt - The alt text for the image
 * @param className - Additional CSS classes to apply
 */
export function SplitSectionImage({ src, alt, className }: SplitSectionImageProps) {
  return (
    <div className={`mr-4 mb-8 md:mb-0 ${className || ''}`}>
      <img className="h-64 md:h-96" src={src} alt={alt} />
    </div>
  );
}
