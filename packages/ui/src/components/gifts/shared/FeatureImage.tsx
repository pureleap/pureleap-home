import React from 'react';

/**
 * Props for the FeatureImage component.
 */
interface FeatureImageProps {
  /** The source URL of the image */
  src: string;
  /** The alt text for the image */
  alt: string;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureImage component that displays an image for a feature.
 * @param src - The source URL of the image
 * @param alt - The alt text for the image
 * @param className - Additional CSS classes to apply
 */
export function FeatureImage({ src, alt, className }: FeatureImageProps) {
  return (
    <div className={`mb-4 pl-2 sm:mb-0 sm:pl-0 sm:mr-8 ${className || ''}`}>
      <img src={src} alt={alt} className="w-32 h-32 sm:w-32 sm:h-32 object-cover rounded-lg" />
    </div>
  );
}
