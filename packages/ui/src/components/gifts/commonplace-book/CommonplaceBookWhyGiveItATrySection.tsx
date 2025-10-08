import { FeatureContent } from '../shared/FeatureContent';
import { FeatureImage } from '../shared/FeatureImage';
import { FeatureList } from '../shared/FeatureList';
import { FeatureRow } from '../shared/FeatureRow';
import { SectionHeading } from '../shared/SectionHeading';
import diya from './diya.png';
import giftBox from './gift-box-256x256.png';
import notebook from './notebook.png';
import redDiamond from './red-diamond.png';
import robotSorting from './robot-sorting.jpeg';
import tabletAndIpad from './tablet-and-ipad-256px.png';

export function CommonplaceBookWhyGiveItATrySection() {
  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <SectionHeading>Why give it a try?</SectionHeading>
      <FeatureList>
        <FeatureRow>
          <FeatureImage src={diya} alt="Diya lamp" />
          <FeatureContent heading="Slow down and think deeply">
            Not a place for quick notes, but a refuge where your thoughts unfold slowly.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={redDiamond} alt="Red diamond" />
          <FeatureContent heading="Move from collecting to curating">
            Gather only what truly resonates and let go of what doesn't.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={tabletAndIpad} alt="use AI mindfully" />
          <FeatureContent heading="Blend analog and digital">
            Embrace the magic of pen and paper, while keeping everything safe and organised
            digitally.
          </FeatureContent>
        </FeatureRow>
        <FeatureRow>
          <FeatureImage src={robotSorting} alt="use AI mindfully" />
          <FeatureContent heading="Use AI for chores, not thinking">
            Let AI help with sorting entries into topics; and nothing else.
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
          <FeatureContent heading="It's free">
            A small gift from us to you. No catch. Just something we made to help.
          </FeatureContent>
        </FeatureRow>
      </FeatureList>
    </section>
  );
}
