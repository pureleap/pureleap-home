import React from 'react';
import { Gift } from '../../types/gift';
import GiftBox from '../gift-box-256x256.png';
import notionLogoGray from '../notion-logo-gray.svg';

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
export const GiftHeroSection: React.FC<GiftHeroSectionProps> = ({ gift }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl text-center mb-16 pt-16 font-handwritten">Our gift for you</h2>
      <div className="flex flex-col text-center max-w-128">
        <div className="p-4">
          <div className="mb-2">
            <img
              src={gift.image}
              alt={gift.title}
              className="w-full max-w-48 aspect-square object-cover mx-auto"
            />
          </div>
          <div className="flex justify-center items-center min-h-20">
            <h3 className="text-2xl font-sans">{gift.title}</h3>
          </div>
          <p className="flex justify-center items-center text-base font-sans text-gray-600 mb-4">
            <img src={notionLogoGray} className="h-4 w-4 mr-1" alt="Notion Logo" /> Notion{' '}
            {gift.subtitle}
          </p>
          <p className="text-base font-sans text-gray-800">{gift.description}</p>
          <p className="text-base font-sans text-gray-600 mt-4">
            made by{' '}
            {gift.authors.map((author, index) => (
              <span key={index}>
                <a href={author.link} className="text-blue-600 hover:underline">
                  {author.name}
                </a>
                {index < gift.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </div>
        <div className="flex justify-center items-center rounded-lg border-gray-200 h-8 max-h-8 hover:bg-gray-300 mr-8 ml-8 mb-4">
          <div className="flex items-center justify-center border-gray-200 h-8 w-8">
            <span className="text-base font-sans">
              <img src={GiftBox} className="img" alt="Gift box" />
            </span>
          </div>
          <div className="flex items-center justify-center mt-3 mb-3 ml-1 mr-1">
            <a href={gift.link} className="font-handwritten text-2xl btn pt-1 pb-1 pr-2 pl-2">
              get it now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
