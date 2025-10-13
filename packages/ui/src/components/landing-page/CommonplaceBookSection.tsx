import React from 'react';
import { COMMONPLACE_BOOK_DATA } from '../../data/gifts';
import pulled from '../gifts/commonplace-book/person-undecided.jpeg';
import study from '../gifts/commonplace-book/Vittore_carpaccio.jpg';
import { SplitSection } from '../gifts/shared/SplitSection';
import { SplitSectionImage } from '../gifts/shared/SplitSectionImage';
import { SplitSectionText } from '../gifts/shared/SplitSectionText';
import { GiftCard } from './GiftCard';

export function CommonplaceBookSection() {
  return (
    <section className="pt-8 bg-white" id="commonplace-book">
      <SplitSection>
        <SplitSectionImage src={pulled} alt="Person pulled in many directions" />
        <SplitSectionText>
          <p className="mb-4">
            We need to identify what of what we collect is truly important for our path.
          </p>
        </SplitSectionText>
      </SplitSection>

      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center pt-16">
        <div className="flex items-center font-sans text-center text-body max-w-[370px] mb-0 md:mb-0 md:mr-8">
          <div>
            <p className="mb-4">For this, we adopt an ancient idea.</p>
            <p>
              To keep a <b>commonplace book</b> as the central place to grow knowledge and
              understanding.
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-0 md:ml-8">
          <img
            className="w-full md:w-96 rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={study}
            alt="Oil painting: Vittore carpaccio, visione di sant'agostino 01"
          ></img>
        </div>
      </div>

      <SplitSection className="mt-8 md:mt-16">
        <SplitSectionText>
          <p className="max-w-lg text-center">
            We've made a Notion template so you can create your own digital Commonplace book.
          </p>
        </SplitSectionText>
        <SplitSectionText>
          <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-2xl">
            <GiftCard key={0} gift={COMMONPLACE_BOOK_DATA} index={0} />
          </div>
        </SplitSectionText>
      </SplitSection>
    </section>
  );
}
