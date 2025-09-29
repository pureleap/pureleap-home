import React from 'react';
import PureleapLogo from './../img/pureleap_logo_nobg.png';
import styles from './Hero.module.css';

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
      <div
        className={`${styles.heroText} font-sans mb-4 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16`}
      >
        <div className="xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl xs:text-xl">
          <div className={styles.heroLine}>Remove clutter.</div>
          <div className={styles.heroLine}>Find clarity.</div>
          <div className={styles.heroLine}>Move true.</div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
