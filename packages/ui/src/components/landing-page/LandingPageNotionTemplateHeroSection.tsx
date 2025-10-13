import React from 'react';
import { Gift } from '../../types/gift';
import { NotionTemplateGiftCTAButton } from '../gifts/shared/notion-template/NotionTemplateGiftCTAButton';
import notionLogoGray from './notion-logo-gray.svg';

/**
 * Props for the LandingPageNotionTemplateHeroSection component.
 */
interface LandingPageNotionTemplateHeroSectionProps {
  /** The gift object to display in the hero section */
  gift: Gift;
  /** Additional CSS classes for the section */
  className?: string;
}

/**
 * Hero section component for displaying gift details on landing page.
 * Takes up the full screen height with centered content.
 */
export const LandingPageNotionTemplateHeroSection: React.FC<
  LandingPageNotionTemplateHeroSectionProps
> = ({ gift, className }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center h-full bg-white ${className || ''}`}
    >
      <div className="flex flex-col text-center max-w-128 pt-32">
        <div className="p-4">
          <div className="mb-2">
            <img
              src={gift.image}
              alt={gift.title}
              className="w-full max-w-48 aspect-square object-cover mx-auto"
            />
          </div>

          <div className="flex flex-col items-center min-h-20 mt-8">
            <div className="flex justify-left">
              <p className="flex justify-left items-center font-sans text-gray-600">
                <img src={notionLogoGray} className="h-4 w-4 mr-1" alt="Notion Logo" /> Notion{' '}
                {gift.subtitle}
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <h1 className="text-2xl font-sans">{gift.title}</h1>
            </div>
          </div>

          <p className="font-sans text-gray-800 mt-4">{gift.description}</p>
        </div>
        <div className="flex justify-center mt-8">
          <NotionTemplateGiftCTAButton link={gift.ctaLink} />
        </div>
      </div>
    </section>
  );
};
