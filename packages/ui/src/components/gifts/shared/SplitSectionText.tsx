import React from 'react';

/**
 * Props for the SplitSectionText component.
 */
interface SplitSectionTextProps {
  /** The child elements to render inside the text container */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * SplitSectionText component that displays text content in a split section layout.
 * @param children - The text content to display
 * @param className - Additional CSS classes to apply
 */
export function SplitSectionText({ children, className }: SplitSectionTextProps) {
  return (
    <div className={`flex items-center font-sans text-center text-xl max-w-96 ${className || ''}`}>
      <div>{children}</div>
    </div>
  );
}
