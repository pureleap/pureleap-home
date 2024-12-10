import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ScrollIndicator from '../components/ScrollIndicator';
import Footer from '../components/Footer';

export const Index: React.FC = () => {
  return (
    <div className="font-sans">
      {/* <Header /> */}
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
