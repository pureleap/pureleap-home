import React from 'react';
import PureleapLogo from './../../img/pureleap_logo_nobg.png';
import styles from './HeroSection.module.css';

interface HeaderProps {
  className?: string;
}

export const NewHeroSection: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`flex flex-col items-center justify-center h-full bg-white ${className}`}>
      <img
        src={PureleapLogo}
        alt="Pureleap Logo"
        className="mx-auto mt-8 mb-10 xs:mt-12 xs:mb-12 sm:mt-16 sm:mb-14 md:mt-20 md:mb-16 lg:mt-24 lg:mb-18 xl:mt-32 xl:mb-[6.5rem] 2xl:mt-40 2xl:mb-[7.5rem]"
        style={{
          width: '275px',
        }}
      />
      <div className={`text-center font-sans mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16`}>
        <div className="xl:text-lg lg:text-2xl md:text-2xl sm:text-xl xs:text-xl">
          <p>You are buried in a loud world.</p>
          <p>It is easy to miss what makes life worthwhile.</p>
          <div className="mt-2 mb-2">
            <p>True joy.</p>
            <p>Genuine connection.</p>
            <p>Real impact.</p>
          </div>
          <p>We want to help you reconnect with what truly makes you shine.</p>
          <p>Not for profit. Just two hearts that care.</p>
          <p>With love, we have prepared this gift for you:</p>
        </div>
      </div>
    </header>
  );
};
