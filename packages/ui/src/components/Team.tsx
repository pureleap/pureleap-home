import React from 'react';
import SocialIcons from './SocialIcons';

import Max from './../img/max.png';
import Shally from './../img/shally2.jpg';

interface TeamProps {
  className?: string;
}

const team = [
  {
    name: 'Max',
    role: 'chief chill officer',
    description:
      'Passionate coder, former lecturer, and corporate veteran now full-time wanna-be chill dude.',
    imagePath: Max,
    socialIcons: [
      {
        icon: 'linkedin',
        label: 'maxrohde',
        url: 'https://www.linkedin.com/in/maxrohde/',
      },
      {
        icon: 'youtube',
        label: '@mxro',
        url: 'https://www.youtube.com/@mxro',
      },
      {
        icon: 'twitter',
        label: '@mxro',
        url: 'https://x.com/mxro',
      },
    ],
  },
  {
    name: 'Shally',
    role: 'the boss',
    description:
      'Ex-lawyer turned software engineer, making sure no corners are cut.',
    imagePath: Shally,
    socialIcons: [
      {
        icon: 'linkedin',
        label: 'shalveena-rohde',
        url: 'https://www.linkedin.com/in/shalveena-rohde',
      },
      {
        icon: 'instagram',
        label: 'shalveena_rohde',
        url: 'https://www.instagram.com/shalveena_rohde/',
      },
      {
        icon: 'twitter',
        label: '@shalveena_rohde',
        url: 'https://x.com/shalveena_rohde',
      },
    ],
  },
];

const Team: React.FC<TeamProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-gray-50 pt-32 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <h2 className="text-3xl text-center mb-24 font-serif">Who we are</h2>
      <div className="flex flex-wrap justify-center gap-12 mx-auto px-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="max-w-sm text-center flex flex-col min-h-[600px]"
          >
            <div className="flex flex-col grow">
              <div className="w-64 h-64 rounded-full mb-4 mx-auto overflow-hidden">
                <img
                  src={member.imagePath}
                  alt={`${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-medium font-sans mb-6 mt-12">
                {member.name}
              </h3>
              <p className="text-gray-500 italic mb-4">{member.role}</p>
              <p className="text-gray-800 text-xl font-sans min-h-[80px]">
                {member.description}
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-8">
              <SocialIcons links={member.socialIcons}></SocialIcons>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
