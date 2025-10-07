import React from 'react';

/**
 * Props for the FeatureBlockImage component.
 */
interface FeatureBlockImageProps {
  /** The source URL of the image */
  src: string;
  /** The alt text for the image */
  alt: string;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * FeatureBlockImage component that displays a centered image for a feature block.
 * @param src - The source URL of the image
 * @param alt - The alt text for the image
 * @param className - Additional CSS classes to apply
 */
export function FeatureBlockImage({ src, alt, className }: FeatureBlockImageProps) {
  return (
    <div className={`mb-4 ${className || ''}`}>
      <img src={src} alt={alt} className="w-32 h-32 object-cover rounded-lg" />
    </div>
  );
}
