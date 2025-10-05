import { FeatureContent } from '../shared/FeatureContent';
import { FeatureImage } from '../shared/FeatureImage';
import { FeatureList } from '../shared/FeatureList';
import { FeatureRow } from '../shared/FeatureRow';
import { SectionHeading } from '../shared/SectionHeading';
import giftBox from './gift-box-256x256.png';
import magicBook from './magic-book.jpeg';
import notebook from './notebook.png';
import robotSorting from './robot-sorting.jpeg';
import teaCup from './tea-cup.png';

export function WhyGiveItATrySection() {
  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <SectionHeading>Why give it a try?</SectionHeading>
      <FeatureList>
        <FeatureRow>
          <FeatureImage src={teaCup} alt="simple" />
          <FeatureContent heading="It’s simple">
            No long list of features to learn. Just what you need, nothing more.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={magicBook} alt="not just a template" />
          <FeatureContent heading="Not just a template">
            Includes guides on how to use the template effectively: to create clarity not clutter.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={robotSorting} alt="use AI mindfully" />
          <FeatureContent heading="Use AI to enrich, not replace">
            Let AI help with chores, not replace your thinking.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={notebook} alt="make it yours" />
          <FeatureContent heading="Make it yours">
            A collection of free cover images to shape it to your taste.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={giftBox} alt="it's free" />
          <FeatureContent heading="It’s free">
            A small gift from us to you. No catch. Just something we made to help.
          </FeatureContent>
        </FeatureRow>
      </FeatureList>
    </section>
  );
}
