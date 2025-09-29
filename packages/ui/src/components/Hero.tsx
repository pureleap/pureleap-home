import React from 'react';

import PureleapLogo from './../img/pureleap_logo_optimised.png';

interface HeaderProps {
  className?: string;
}

const Hero: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header
      className={`flex flex-col items-center justify-center h-full bg-white ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <img
        src={PureleapLogo}
        alt="Pureleap Logo"
        className="mx-auto mt-8 mb-4 xs:mt-12 xs:mb-6 sm:mt-16 sm:mb-8 md:mt-20 md:mb-10 lg:mt-24 lg:mb-12 xl:mt-32 xl:mb-20 2xl:mt-40 2xl:mb-24"
        style={{
          width: '275px',
        }}
      />
      <div className="text-center font-handwritten mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl">
          <p className="">Remove Clutter.</p>
          <p>Find Clarity.</p>
          <p>Move True.</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
