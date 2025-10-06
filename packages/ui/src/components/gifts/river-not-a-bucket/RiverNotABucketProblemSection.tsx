import { SectionHeading } from '../shared/SectionHeading';
import { SplitSection } from '../shared/SplitSection';
import { SplitSectionImage } from '../shared/SplitSectionImage';
import { SplitSectionText } from '../shared/SplitSectionText';
import person from './overwhelmed-person.jpeg';

export function RiverNotABucketProblemSection() {
  return (
    <section className="pt-32 bg-white" id="details">
      <SectionHeading>The problem</SectionHeading>
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
