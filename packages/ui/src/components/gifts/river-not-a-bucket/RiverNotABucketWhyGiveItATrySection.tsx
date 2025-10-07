import { FeatureContent } from '../shared/FeatureContent';
import { FeatureImage } from '../shared/FeatureImage';
import { FeatureList } from '../shared/FeatureList';
import { FeatureRow } from '../shared/FeatureRow';
import { SectionHeading } from '../shared/SectionHeading';
import objects from './collection-of-objects.jpeg';
import magicBook from './magic-book.jpeg';
import teaCup from './tea-cup.png';

export function RiverNotABucketWhyGiveItATrySection() {
  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <SectionHeading>Why give it a try?</SectionHeading>
      <FeatureList>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="tea cup" />
          <FeatureContent heading="Guilt-Free Collecting">
            Save things that interest you without the pressure to read or act on them.{' '}
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={objects} alt="collection of objects" />
          <FeatureContent heading="Capture Without Clutter">
            Store your random thoughts, quotes, and links in one simple place.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={magicBook} alt="book and quill" />
          <FeatureContent heading="Handwritten Notes Welcome">
            Photograph or scan your notes and keep them alongside your digital entries.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="tea cup" />
          <FeatureContent heading="Browse How You Like">
            Switch views depending on your mood. Skim, sort, or explore visually.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="tea cup" />
          <FeatureContent heading="Organise as You Go">
            Add topics naturally as your collection grows. No strict system — just structure when
            you want it.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="tea cup" />
          <FeatureContent heading="Optional AI Sorting">
            Let gentle automation help you sort things. Works without Notion AI, and always stays
            under your control.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="tea cup" />
          <FeatureContent heading="Works with the Commonplace Book">
            Use River Not a Bucket to capture freely, then move what matters into your Commonplace
            Book for deeper reflection.
          </FeatureContent>
        </FeatureRow>
      </FeatureList>
    </section>
  );
}
