import { SectionHeading } from '../shared/SectionHeading';
import { SplitSection } from '../shared/SplitSection';
import { SplitSectionImage } from '../shared/SplitSectionImage';
import { SplitSectionText } from '../shared/SplitSectionText';
import pulled from './person-undecided.jpeg';

export function CommonplaceBookProblemSection() {
  return (
    <section className="pt-32 bg-white" id="details">
      <SectionHeading>The problem</SectionHeading>
      <SplitSection>
        <SplitSectionImage src={pulled} alt="Person pulled in many directions" />
        <SplitSectionText>
          <p className="mb-4">There are endless possibilities of what we can become.</p>
          <p>Yet, too much choice overwhelms us and we end up ... nowhere.</p>
        </SplitSectionText>
      </SplitSection>
    </section>
  );
}
