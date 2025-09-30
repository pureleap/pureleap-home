import React from 'react';
import commonplaceBookImage from '../img/gifts/commonplace-book.png';
import riverNotABucketImage from '../img/gifts/river-not-a-bucket.png';

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
            className="text-center max-w-64 border rounded-lg border-gray-200 group group-hover:bg-gray-100 hover:bg-gray-200 cursor-pointer"
          >
            <div className="p-4">
              <div className="mb-6">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full max-w-48 aspect-square object-cover mx-auto"
                />
              </div>
              <h3 className="text-2xl font-sans mb-2">{gift.title}</h3>
              <p className="text-base font-sans text-gray-600 mb-4">{gift.subtitle}</p>
              <p className="text-base font-sans text-gray-800 mb-6">{gift.description}</p>
            </div>
            <div className="flex justify-between items-center border-t border-gray-200">
              <span className="text-base font-sans">$0</span>
              <div className="">
                <a href={gift.link} className="btn pt-1 pb-1 pr-2 pl-2 group-hover:bg-gray-300">
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
