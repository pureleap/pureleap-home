import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';

export const Index: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  const throttle = (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const handleScroll = useCallback(
    throttle(() => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowHeader(scrollPosition >= 200);
    }, 100),
    []
  );

  useEffect(() => {
    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="font-sans">
      <Header visible={showHeader} />
      <div className="min-h-screen" style={{ backgroundColor: '#fbfbff' }}>
        <Hero />
      </div>
      <div className="pt-16" style={{ backgroundColor: '#fbfbff' }}>
        <Solutions />
      </div>
      <ScrollIndicator />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
