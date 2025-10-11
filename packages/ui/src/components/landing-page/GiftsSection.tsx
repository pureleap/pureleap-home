import React from 'react';
import { GIFTS } from '../../data/gifts';
import { SectionHeading } from '../SectionHeading';
import { GiftCard } from './GiftCard';

interface GiftsSectionProps {
  className?: string;
}

export const GiftsSection: React.FC<GiftsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white flex flex-col items-center justify-center py-12 ${className}`}>
      <SectionHeading id="gifts" className="pt-16">
        Our approach
      </SectionHeading>
      <div className="text-center">
        <div className="xl:text-lg lg:text-lg md:text-lg sm:text-base xs:text-base">
          <p className="pb-4">
            We turn to the quiet craft of <b>note-taking</b>.
          </p>
          <p>And made a few things to help you organise .</p>
        </div>
      </div>
      <h3 className="text-xl pt-16 font-bold">Best place to start:</h3>
      <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-2xl">
        {GIFTS.slice(0, 1).map((gift, index) => (
          <GiftCard key={index} gift={gift} index={index} />
        ))}
      </div>

      <h3 className="text-xl pt-16 font-bold">Our other gifts for you:</h3>
      <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-2xl">
        {GIFTS.slice(1).map((gift, index) => (
          <GiftCard key={index + 1} gift={gift} index={index + 1} />
        ))}
      </div>
    </section>
  );
};
