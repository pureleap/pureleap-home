import { FeatureBlock } from '../shared/FeatureBlock';
import { FeatureBlockContent } from '../shared/FeatureBlockContent';
import { FeatureBlockImage } from '../shared/FeatureBlockImage';
import { FeatureList } from '../shared/FeatureList';
import { SectionHeading } from '../shared/SectionHeading';
import objects from './collection-of-objects.jpeg';
import fountainPen from './fountain-pen-handdrawn-v4.png';
import handwriting from './handwritten-notes-closeup.png';
import magicBook from './magic-book.jpeg';
import oldNotebook from './old-notebook.png';
import globe from './outline-of-globe-handdrawn.png';
import river from './river-handdrawn.png';
import robotSortingBooks from './robot-sorting-books.jpeg';
import sapling from './sapling-bgremoved.png';
import smallDrawer from './small-drawer.png';
import teaCup from './tea-cup.jpeg';

export function RiverNotABucketWhyGiveItATrySection() {
  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <SectionHeading>Why give it a try?</SectionHeading>
      <FeatureList>
        <FeatureBlock>
          <FeatureBlockImage src={teaCup} alt="tea cup" />
          <FeatureBlockContent heading="Guilt-Free Collecting">
            Save things that interest you without the pressure to read or act on them.{' '}
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock>
          <FeatureBlockImage src={smallDrawer} alt="collection of objects" />
          <FeatureBlockContent heading="Capture Without Clutter">
            Store your random thoughts, quotes, and links in one simple place.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock>
          <FeatureBlockImage src={fountainPen} alt="book and quill" />
          <FeatureBlockContent heading="Handwritten Notes Welcome">
            Photograph or scan your notes and keep them alongside your digital entries.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock>
          <FeatureBlockImage src={globe} alt="Handdrawn outline of globe" />
          <FeatureBlockContent heading="Browse How You Like">
            Switch views depending on your mood. Skim, sort, or explore visually.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock>
          <FeatureBlockImage src={sapling} alt="sapling" />
          <FeatureBlockContent heading="Organise as You Go">
            Add topics naturally as your collection grows. No strict system — just structure when
            you want it.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock>
          <FeatureBlockImage src={robotSortingBooks} alt="Robot sorting books" />
          <FeatureBlockContent heading="Optional AI Sorting">
            Let gentle automation help you sort things. Works without Notion AI, and always stays
            under your control.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock>
          <FeatureBlockImage src={oldNotebook} alt="Old Notebook" />
          <FeatureBlockContent heading="Works with our Commonplace Book Template">
            Use River Not a Bucket to capture freely, then move what matters into your{' '}
            <a
              href="commonplace-book"
              className="underline text-purple"
              target="_blank"
              rel="noopener"
            >
              Commonplace Book
            </a>{' '}
            for deeper reflection.
          </FeatureBlockContent>
        </FeatureBlock>
      </FeatureList>
    </section>
  );
}
