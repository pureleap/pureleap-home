import { SplitSection } from '../gifts/shared/SplitSection';
import { SplitSectionImage } from '../gifts/shared/SplitSectionImage';
import { SplitSectionText } from '../gifts/shared/SplitSectionText';
import person from './overwhelmed-person.jpeg';

/**
 * Props for LandingPageProblem1 component
 */
interface LandingPageProblem1Props {
  /** Additional CSS classes for the section */
  className?: string;
}

/**
 * Landing page problem 1 section component
 * @param className - Additional CSS classes for the section
 */
export function LandingPageProblem1({ className }: LandingPageProblem1Props) {
  return (
    <section className={`pt-16 bg-white ${className || ''}`} id="details">
      <SplitSection>
        <SplitSectionImage src={person} alt="Person overwhelmed by information" />
        <SplitSectionText>
          {/* <p className="mb-4">
            <em>First Problem</em>
          </p> */}
          <p className="text-body">
            ... and made a few gentle tools for moving from <b>clutter to clarity</b>.
          </p>
        </SplitSectionText>
      </SplitSection>
    </section>
  );
}
