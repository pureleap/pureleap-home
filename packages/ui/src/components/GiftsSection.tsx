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
    description: 'A refuge for your thoughts inspired by ancient practices.',
    price: '$0',
    image: commonplaceBookImage,
  },
  {
    title: 'River Not a Bucket',
    subtitle: 'Notion Template',
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
      <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-4xl">
        {gifts.map((gift, index) => (
          <div key={index} className="text-center max-w-sm">
            <div className="mb-6">
              <img
                src={gift.image}
                alt={gift.title}
                className="w-full max-w-48 aspect-square object-cover mx-auto"
              />
            </div>
            <h3 className="text-xl font-serif mb-2">{gift.title}</h3>
            <p className="text font-sans text-gray-600 mb-4">{gift.subtitle}</p>
            <p className="text font-sans text-gray-800 mb-6">{gift.description}</p>
            <div className="text-xl font-sans font-medium">{gift.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
