import React from 'react';

interface SolutionsProps {
  className?: string;
}

import MagicTablet from './../img/magic_tablet_reposition_fixed.png';
import TeaCup from './../img/tea_cup.png';
import Notebook from './../img/notebook.jpg';

const solutions = [
  {
    image: MagicTablet,
    title: 'Coding You’ll Love',
    description:
      'Building software should be a joy, not a chore. Our tools turn complex challenges into seamless fun.',
  },
  {
    image: TeaCup,
    title: 'Life, Simplified',
    description:
      'Life’s too short not to enjoy it. We help you find health, joy, and peace.',
  },
  {
    image: Notebook,
    title: 'Chill Productivity',
    description:
      'Forget burnout. Work smarter, deliver better, and feel good doing it.',
  },
];

const Solutions: React.FC<SolutionsProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center pb-12 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <h2
        id="solutions"
        className="text-3xl text-center mb-24 font-serif pt-16"
      >
        What we make solutions for
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mx-auto px-4">
        {solutions.map((solution, index) => (
          <div key={index} className="max-w-sm text-center mb-12">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-2xl font-medium font-sans mb-6 mt-12">
              {solution.title}
            </h3>
            <p className="text-gray-800 text-xl font-sans">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
