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
        className="mx-auto"
        style={{
          width: '675px',
        }}
      />
      <div className="text-center font-serif mb-8 md:mb-12">
        <h1 className="text-xl md:text-2xl">Big dreams? Busy days?</h1>
        <h1 className="text-xl md:text-2xl mt-2 md:mt-4">
          Let&#x2019;s help you chill while you conquer.
        </h1>
      </div>
    </header>
  );
};

export default Hero;
