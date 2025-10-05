/**
 * A reusable heading component for sections with consistent styling.
 */
interface SectionHeadingProps {
  /** The content to display in the heading */
  children: React.ReactNode;
  /** Additional CSS classes to apply */
  className?: string;
}

/**
 * SectionHeading component for consistent section headings.
 * @param children - The content to display in the heading
 * @param className - Additional CSS classes to apply
 */
export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={`text-5xl mb-16 text-center font-handwritten ${className || ''}`}>{children}</h2>
  );
}
