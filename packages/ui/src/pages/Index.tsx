import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';

export const Index: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setShowHeader(scrollPosition >= screenHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      <Header visible={showHeader} />
      <div className="h-screen">
        <Hero className="h-full" />
      </div>
      <div className="">
        <Solutions className="" />
      </div>
      <ScrollIndicator />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
