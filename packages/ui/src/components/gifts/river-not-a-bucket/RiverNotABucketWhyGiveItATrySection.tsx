import { FeatureBlock } from '../shared/FeatureBlock';
import { FeatureBlockContent } from '../shared/FeatureBlockContent';
import { FeatureBlockImage } from '../shared/FeatureBlockImage';
import { FeatureList } from '../shared/FeatureList';
import { SectionHeading } from '../shared/SectionHeading';
import bookBranches from './book-branches.jpeg';
import objects from './collection-of-objects.jpeg';
import magicBook from './magic-book.jpeg';
import oldNotebook from './old-notebook.png';
import globe from './outline-of-globe-handdrawn.png';
import robotSortingBooks from './robot-sorting-books.jpeg';
import teaCup from './tea-cup.jpeg';

export function RiverNotABucketWhyGiveItATrySection() {
  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <SectionHeading>Why give it a try?</SectionHeading>
      <FeatureList>
        <FeatureBlock offset={-16}>
          <FeatureBlockImage src={teaCup} alt="tea cup" />
          <FeatureBlockContent heading="Guilt-Free Collecting">
            Save things that interest you without the pressure to read or act on them.{' '}
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock offset={16}>
          <FeatureBlockImage src={objects} alt="collection of objects" />
          <FeatureBlockContent heading="Capture Without Clutter">
            Store your random thoughts, quotes, and links in one simple place.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock offset={-16}>
          <FeatureBlockImage src={magicBook} alt="book and quill" />
          <FeatureBlockContent heading="Handwritten Notes Welcome">
            Photograph or scan your notes and keep them alongside your digital entries.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock offset={16}>
          <FeatureBlockImage src={globe} alt="Handdrawn outline of globe" />
          <FeatureBlockContent heading="Browse How You Like">
            Switch views depending on your mood. Skim, sort, or explore visually.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock offset={-16}>
          <FeatureBlockImage src={bookBranches} alt="magic book with a tree emerging from it" />
          <FeatureBlockContent heading="Organise as You Go">
            Add topics naturally as your collection grows. No strict system — just structure when
            you want it.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock offset={16}>
          <FeatureBlockImage src={robotSortingBooks} alt="Robot sorting books" />
          <FeatureBlockContent heading="Optional AI Sorting">
            Let gentle automation help you sort things. Works without Notion AI, and always stays
            under your control.
          </FeatureBlockContent>
        </FeatureBlock>
        <FeatureBlock offset={-16}>
          <FeatureBlockImage src={oldNotebook} alt="Old Notebook" />
          <FeatureBlockContent heading="Works with our Commonplace Book Template">
            Use River Not a Bucket to capture freely, then move what matters into your{' '}
            <a href="commonplace-book" className="underline text-purple">
              Commonplace Book
            </a>{' '}
            for deeper reflection.
          </FeatureBlockContent>
        </FeatureBlock>
      </FeatureList>
    </section>
  );
}
