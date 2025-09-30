import React from 'react';
import aiAutoRelationImage from '../img/gifts/ai-auto-relation.png';
import commonplaceBookImage from '../img/gifts/commonplace-book.png';
import riverNotABucketImage from '../img/gifts/river-not-a-bucket.png';
import GiftBox from './gift-box-256x256.png';
import notionLogoGray from './notion-logo-gray.svg';

interface GiftsSectionProps {
  className?: string;
}

const gifts = [
  {
    title: 'Commonplace Book',
    subtitle: 'Template',
    link: '#',
    description: 'A refuge for your thoughts inspired by ancient practices.',
    price: '$0',
    image: commonplaceBookImage,
  },
  {
    title: 'River Not a Bucket',
    subtitle: 'Template',
    link: '#',
    description: 'Collect what inspires without creating clutter.',
    price: '$0',
    image: riverNotABucketImage,
  },
  {
    title: 'AI Auto Relation',
    subtitle: 'Integration',
    link: 'https://auto-relation.com',
    description: 'Bring order to chaos using the power of relations.',
    price: '$0',
    image: aiAutoRelationImage,
  },
];

export const GiftsSection: React.FC<GiftsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white flex flex-col items-center justify-center py-12 ${className}`}>
      <h2 id="gifts" className="text-5xl text-center mb-16 pt-16 font-handwritten">
        Our gifts for you
      </h2>
      <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-200">
        {gifts.map((gift, index) => (
          <a
            href={gift.link}
            key={index}
            className="flex flex-col text-center max-w-64 group group-hover:bg-gray-100 hover:bg-gray-200 cursor-pointer"
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
                <img src={notionLogoGray} className="h-4 w-4 mr-1"></img> {gift.subtitle}
              </p>
              <p className="text-base font-sans text-gray-800">{gift.description}</p>
            </div>
            <div className="flex justify-center items-center rounded-lg border-gray-200 h-8 max-h-8 group-hover:bg-gray-300 mr-8 ml-8 mb-4">
              <div className="flex items-center justify-center border-gray-200 h-8 w-8">
                <span className="text-base font-sans">
                  <img src={GiftBox} className="img" alt="Gift box"></img>
                </span>
              </div>
              <div className="flex items-center justify-center mt-3 mb-3 ml-1 mr-1">
                <span className="font-handwritten text-2xl btn pt-1 pb-1 pr-2 pl-2">
                  learn more
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
