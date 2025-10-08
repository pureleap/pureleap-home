import React from 'react';
import { Gift } from '../../../../types/gift';
import notionLogoGray from '../../../notion-logo-gray.svg';
import { NotionTemplateGiftCTAButton } from './NotionTemplateGiftCTAButton';

/**
 * Props for the GiftHeroSection component.
 */
interface GiftHeroSectionProps {
  /** The gift object to display in the hero section */
  gift: Gift;
}

/**
 * Hero section component for displaying gift details.
 * Takes up the full screen height with centered content.
 */
export const NotionTemplateGiftHeroSection: React.FC<GiftHeroSectionProps> = ({ gift }) => {
  return (
    <section className="flex flex-col items-center justify-center h-full bg-white">
      {/* <h2 className="text-3xl text-center mb-6 pt-32 font-handwritten">Our gift for you</h2> */}
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
              <p className="flex justify-left items-center text-base font-sans text-gray-600">
                <img src={notionLogoGray} className="h-4 w-4 mr-1" alt="Notion Logo" /> Notion{' '}
                {gift.subtitle}
              </p>
            </div>
            <div className="flex justify-center mt-2">
              <h1 className="text-2xl font-sans">{gift.title}</h1>
            </div>
          </div>

          <p className="text-base font-sans text-gray-800 mt-4">{gift.description}</p>
        </div>
        {/* <p className="text-sm font-sans text-gray-600 mt-2">
          made by{' '}
          {gift.authors.map((author, index) => (
            <span key={index}>
              <a href={author.link} className="text-blue-600 hover:underline">
                {author.name}
              </a>
              {index < gift.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p> */}
        <div className="flex justify-center mt-8">
          <NotionTemplateGiftCTAButton link={gift.ctaLink} />
        </div>
      </div>
    </section>
  );
};
