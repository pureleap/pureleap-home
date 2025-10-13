import { SectionHeading } from '../../SectionHeading';
import { SplitSection } from '../shared/SplitSection';
import { SplitSectionImage } from '../shared/SplitSectionImage';
import { SplitSectionText } from '../shared/SplitSectionText';
import person from './overwhelmed-person.jpeg';

/**
 * Props for RiverNotABucketProblemSection component
 */
interface RiverNotABucketProblemSectionProps {
  /** Optional heading override */
  heading?: string;
  /** Additional CSS classes for the section */
  className?: string;
  /** Whether to hide the heading */
  hideHeading?: boolean;
}

/**
 * River not a bucket problem section component
 * @param heading - Optional heading override, defaults to "The problem"
 * @param className - Additional CSS classes for the section
 * @param hideHeading - Whether to hide the heading
 */
export function RiverNotABucketProblemSection({
  heading = 'The problem',
  className,
  hideHeading = false,
}: RiverNotABucketProblemSectionProps) {
  return (
    <section className={`pt-32 bg-white ${className || ''}`} id="details">
      {!hideHeading && <SectionHeading>{heading}</SectionHeading>}
      <SplitSection>
        <SplitSectionImage src={person} alt="Person overwhelmed by information" />
        <SplitSectionText>
          <p className="mb-4">The world is full of things to know.</p>
          <p>But there's never time for them all.</p>
        </SplitSectionText>
      </SplitSection>
    </section>
  );
}
