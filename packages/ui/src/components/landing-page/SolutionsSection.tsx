import React from 'react';
import { SectionHeading } from '../SectionHeading';

interface SolutionsSectionProps {
  className?: string;
}

import MagicTablet from './img/magic_tablet_reposition_fixed.png';
import Notebook from './img/notebook.jpg';
import TeaCup from './img/tea_cup.png';

const solutions = [
  {
    image: Notebook,
    title: 'Chill Productivity',
    description: 'Forget burnout. Work smarter, deliver better, and feel good doing it.',
  },
  {
    image: TeaCup,
    title: 'Life, Simplified',
    description: 'Life’s too short not to enjoy it. We help you find health, joy, and peace.',
  },
  {
    image: MagicTablet,
    title: 'Coding You’ll Love',
    description:
      'Building software should be a joy, not a chore. Our tools turn complex challenges into seamless fun.',
  },
];

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center pb-12 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <SectionHeading id="solutions" className="pt-16">
        What we make solutions for
      </SectionHeading>
      <div className="flex flex-wrap justify-center gap-12 mx-auto px-4">
        {solutions.map((solution, index) => (
          <div key={index} className="max-w-sm text-center mb-12">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-2xl font-sans mb-6 mt-12">{solution.title}</h3>
            <p className="text-gray-800 text-base font-sans">{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
