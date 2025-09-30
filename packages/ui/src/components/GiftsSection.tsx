import React from 'react';

interface GiftsSectionProps {
  className?: string;
}

const gifts = [
  {
    title: 'Commonplace Book',
    subtitle: 'Notion Template',
    description: 'A refuge for your thoughts inspired by Ancient practices.',
    price: '$00',
  },
  {
    title: 'Prior Not a Bucket',
    subtitle: 'Notion Template',
    description: 'Collect what inspires without creating clutter.',
    price: '$00',
  },
];

export const GiftsSection: React.FC<GiftsSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center py-12 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <h2 className="text-4xl text-center mb-16 font-handwritten">Our gifts for you</h2>
      <div className="flex flex-wrap justify-center gap-16 mx-auto px-4 max-w-4xl">
        {gifts.map((gift, index) => (
          <div key={index} className="text-center max-w-sm">
            <h3 className="text-3xl font-serif mb-2">{gift.title}</h3>
            <p className="text-xl font-sans text-gray-600 mb-4">{gift.subtitle}</p>
            <p className="text-lg font-sans text-gray-800 mb-6">{gift.description}</p>
            <div className="text-2xl font-sans font-medium">{gift.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
