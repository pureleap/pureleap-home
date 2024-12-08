import React from 'react';
import Header from '../components/Header';
import Solutions from '../components/Solutions';
import Team from '../components/Team';
import Contact from '../components/Contact';
import ScrollIndicator from '../components/ScrollIndicator';

export const NewIndex: React.FC = () => {
  return (
    <div className="font-sans">
      <div className="h-screen">
        <Header className="h-full" />
      </div>
      <div className="h-screen">
        <Solutions className="h-full" />
      </div>
      <ScrollIndicator />
      <Team />
      <Contact />
    </div>
  );
};
