import React from 'react';
import { GIFTS } from '../../data/gifts';
import { GiftCard } from './GiftCard';

interface LandingPageNotionTemplateCTASectionProps {
  ctaLink: string;
  /** Additional CSS classes for the section */
  className?: string;
}

export const LandingPageNotionTemplateCTASection: React.FC<
  LandingPageNotionTemplateCTASectionProps
> = ({ ctaLink, className }) => {
  return (
    <section className={`pt-32 bg-white ${className || ''}`}>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex items-center justify-center font-sans text-center text-xl max-w-64 px-2 sm:px-0 self-center">
          <div>
            <p className="mb-2 text-body">
              To put this idea into practice, we made a Notion template.
            </p>
            <p className="text-body">100% free!</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:pl-16 flex justify-center self-center">
          <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-2xl">
            {GIFTS.slice(0, 1).map((gift, index) => (
              <GiftCard key={index} gift={gift} index={index} />
            ))}
          </div>
          {/* <NotionTemplateGiftCTAButton link={ctaLink} /> */}
        </div>
      </div>
    </section>
  );
};
