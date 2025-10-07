import { FeatureContent } from '../shared/FeatureContent';
import { FeatureImage } from '../shared/FeatureImage';
import { FeatureList } from '../shared/FeatureList';
import { FeatureRow } from '../shared/FeatureRow';
import { SectionHeading } from '../shared/SectionHeading';
import teaCup from './tea-cup.png';

export function RiverNotABucketWhyGiveItATrySection() {
  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <SectionHeading>Why give it a try?</SectionHeading>
      <FeatureList>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="simple" />
          <FeatureContent heading="Guilt-Free Collecting">
            Save things that interest you without the pressure to read or act on them. This is a
            space to breathe not a list to finish .
          </FeatureContent>
        </FeatureRow>
      </FeatureList>
    </section>
  );
}
