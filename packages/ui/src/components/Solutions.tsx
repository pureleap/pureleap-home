import React from 'react';

interface SolutionsProps {
  className?: string;
}

const solutions = [
  {
    image: '/_goldstack/static/img/202412/magic_tablet_reposition_fixed.png',
    title: 'Coding You’ll Love',
    description:
      'Building software should be a joy, not a chore. Our tools turn complex challenges into seamless fun.',
  },
  {
    image: '/_goldstack/static/img/202412/tea_cup.png',
    title: 'Life, Simplified',
    description:
      'Life’s too short not to enjoy it. We help you find health, joy, and peace.',
  },
  {
    image: '/_goldstack/static/img/202412/notebook.jpg',
    title: 'Chill Productivity',
    description:
      'Forget burnout. Work smarter, deliver better, and feel good doing it.',
  },
];

const Solutions: React.FC<SolutionsProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-gray-50 pb-12 ${className}`}
    >
      <h2 className="text-3xl text-center mb-24 font-serif">
        What we make solutions for
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mx-auto px-4">
        {solutions.map((solution, index) => (
          <div key={index} className="max-w-sm text-center">
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
