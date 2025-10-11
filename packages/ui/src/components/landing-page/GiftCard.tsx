import React from 'react';
import notionLogoGray from './../../img/notion-logo-gray.svg';
import { Gift } from '../../types/gift';
import GiftBox from './img/gift-box-256x256.png';

interface GiftCardProps {
  gift: Gift;
  index: number;
}

export const GiftCard: React.FC<GiftCardProps> = ({ gift, index }) => {
  return (
    <a
      href={gift.learnMoreLink}
      key={index}
      className="flex flex-col text-center max-w-64 group hover:bg-purple-900 cursor-pointer rounded-xl"
    >
      <div className="flex-1 p-4">
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
          <img src={notionLogoGray} className="h-4 w-4 mr-1" alt="Notion Logo"></img>{' '}
          {gift.subtitle}
        </p>
        <p className="text-base font-sans text-gray-800">{gift.description}</p>
      </div>
      <div className="flex justify-center items-center rounded-lg border-gray-200 h-8 max-h-8 group-hover:bg-purple-500 mr-8 ml-8 mb-4">
        <div className="flex items-center justify-center border-gray-200 h-8 w-8">
          <span className="text-base font-sans">
            <img src={GiftBox} className="img" alt="Gift box"></img>
          </span>
        </div>
        <div className="flex items-center justify-center mt-3 mb-3 ml-1 mr-1">
          <span className="font-handwritten text-2xl btn pt-1 pb-1 pr-2 pl-2 group-hover:text-white">
            learn more
          </span>
        </div>
      </div>
    </a>
  );
};
