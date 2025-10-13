import React from 'react';

/**
 * A reusable heading component for sections with consistent styling.
 */
interface SectionHeadingProps {
  /** The content to display in the heading */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
  /** Optional id for the heading element */
  id?: string;
}

/**
 * SectionHeading component for consistent section headings.
 * @param children - The content to display in the heading
 * @param className - Additional CSS classes to apply
 * @param id - Optional id for the heading element
 */
export function SectionHeading({ children, className, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`text-5xl pb-16 text-center bg-white font-handwritten ${className || ''}`}
    >
      {children}
    </h2>
  );
}
