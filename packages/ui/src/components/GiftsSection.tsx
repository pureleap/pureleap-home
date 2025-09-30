import React from 'react';
import commonplaceBookImage from '../img/gifts/commonplace-book.png';
import riverNotABucketImage from '../img/gifts/river-not-a-bucket.png';
import GiftBox from './gift-box-256x256.png';

interface GiftsSectionProps {
  className?: string;
}

const gifts = [
  {
    title: 'Commonplace Book',
    subtitle: 'Notion Template',
    link: '#',
    description: 'A refuge for your thoughts inspired by ancient practices.',
    price: '$0',
    image: commonplaceBookImage,
  },
  {
    title: 'River Not a Bucket',
    subtitle: 'Notion Template',
    link: '#',
    description: 'Collect what inspires without creating clutter.',
    price: '$0',
    image: riverNotABucketImage,
  },
];

export const GiftsSection: React.FC<GiftsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-white flex flex-col items-center justify-center py-12 ${className}`}>
      <h2 id="gifts" className="text-4xl text-center mb-16 pt-16 font-handwritten">
        Our gifts for you
      </h2>
      <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-200">
        {gifts.map((gift, index) => (
          <div
            key={index}
            className="flex flex-col text-center max-w-64 group group-hover:bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <div className="flex-1 p-4">
              <div className="mb-6">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full max-w-48 aspect-square object-cover mx-auto"
                />
              </div>
              <h3 className="text-2xl font-sans mb-2">{gift.title}</h3>
              <p className="text-base font-sans text-gray-600 mb-4">{gift.subtitle}</p>
              <p className="text-base font-sans text-gray-800">{gift.description}</p>
            </div>
            <div className="flex justify-between items-center border rounded-lg border-gray-200 h-8 max-h-8 group-hover:bg-gray-300 mr-8 ml-8">
              <div className="flex items-center justify-center border-r border-gray-200 h-8 w-8 ">
                <span className="text-base font-sans">
                  <img src={GiftBox} className="h-10 w-10" alt="Gift box"></img>
                </span>
              </div>
              <div className="flex items-center justify-center flex-1">
                <a href={gift.link} className="btn pt-1 pb-1 pr-2 pl-2">
                  learn more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
