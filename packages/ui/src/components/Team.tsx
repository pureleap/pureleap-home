import React from 'react';

interface TeamProps {
  className?: string;
}

const team = [
  {
    name: 'Max',
    role: 'chief chill officer',
    description:
      'Passionate coder, former lecturer, and corporate veteran now full-time wanna-be chill dude.',
    links: { linkedin: '#', x: '#' },
  },
  {
    name: 'Shally',
    role: 'the boss',
    description:
      'Ex-lawyer turned software engineer, making sure no corners are cut.',
    links: { linkedin: '#', x: '#' },
  },
];

const Team: React.FC<TeamProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-gray-50 pt-32 ${className}`}
    >
      <h2 className="text-3xl text-center mb-24 font-serif">Who we are</h2>
      <div className="flex flex-wrap justify-center gap-12 mx-auto px-4">
        {team.map((member, index) => (
          <div key={index} className="max-w-sm text-center">
            <div className="w-64 h-64 bg-gray-300 rounded-full mb-4 mx-auto"></div>
            <h3 className="text-2xl font-medium font-sans mb-6 mt-12">
              {member.name}
            </h3>
            <p className="text-gray-500 italic mb-4">{member.role}</p>
            <p className="text-gray-800 text-xl font-sans">
              {member.description}
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <a
                href={member.links.linkedin}
                className="text-blue-500 hover:underline text-xl"
              >
                LinkedIn
              </a>
              <a
                href={member.links.x}
                className="text-blue-500 hover:underline text-xl"
              >
                X.com
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
