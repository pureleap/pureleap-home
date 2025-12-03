import { SectionHeading } from '../../SectionHeading';
import { SplitSection } from '../shared/SplitSection';
import { SplitSectionImage } from '../shared/SplitSectionImage';
import { SplitSectionText } from '../shared/SplitSectionText';
import bucketOverflowing from './bucket-overflowing-with-notes.jpeg';

export function CommonplaceEcosystemProblemSection() {
  return (
    <section className="pt-32 bg-white" id="details">
      <SectionHeading>The problem</SectionHeading>
      <SplitSection>
        <SplitSectionImage src={bucketOverflowing} alt="Bucket overflowing with notes" />
        <SplitSectionText>
          <p className="mb-4">Your thoughts are buried in too many notes.</p>
        </SplitSectionText>
      </SplitSection>
    </section>
  );
}
