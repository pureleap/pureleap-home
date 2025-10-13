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
    <section className={`pt-16 bg-white ${className || ''}`}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center font-sans text-center text-body max-w-96 mb-8">
          <div>
            <p className="mb-4">To put this idea into practice, we made a Notion template.</p>
            <p>100% free!</p>
          </div>
        </div>
        <div className="flex justify-center">
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
