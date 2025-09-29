import React from 'react';

import PureleapLogo from './../img/pureleap_logo_nobg.png';

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
        className="mx-auto mt-8 mb-10 xs:mt-12 xs:mb-12 sm:mt-16 sm:mb-14 md:mt-20 md:mb-16 lg:mt-24 lg:mb-18 xl:mt-32 xl:mb-[6.5rem] 2xl:mt-40 2xl:mb-[7.5rem]"
        style={{
          width: '275px',
        }}
      />
      <div className="text-left font-sans mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl">
          <p className="mb-2">Remove clutter.</p>
          <p className="mb-2">Find clarity.</p>
          <p className="mb-2">Move true.</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
