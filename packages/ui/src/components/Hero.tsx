import React from 'react';

interface HeaderProps {
  className?: string;
}

const Hero: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header
      className={`flex flex-col items-center justify-center bg-white ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <div className="flex-1" />
      <img
        src="/_goldstack/static/img/202412/pureleap_logo_optimised.png"
        alt="Pureleap Logo"
        className="mx-auto"
        style={{ width: '675px' }}
      />
      <div className="text-center font-serif">
        <h1 className="text-2xl">Big dreams? Busy days?</h1>
        <h1 className="text-2xl mt-4">
          Let&#x2019;s help you chill while you conquer.
        </h1>
      </div>
      <div className="flex-1" />
    </header>
  );
};

export default Hero;
