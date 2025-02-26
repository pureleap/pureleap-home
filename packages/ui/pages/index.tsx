import React, { useState, useEffect, useCallback } from 'react';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Solutions from '../src/components/Solutions';
import Team from '../src/components/Team';
import Contact from '../src/components/Contact';
import ScrollIndicator from '../src/components/ScrollIndicator';
import Footer from '../src/components/Footer';
import Head from 'next/head';

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
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowHeader(scrollPosition >= viewportHeight + 120);
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
    <>
      <Head>
        <title>Pureleap: Be chill and create from love ❤</title>
        <meta
          name="title"
          content="Pureleap: Be chill and create from love ❤"
        />
        <meta
          name="description"
          content="Crafting small, thoughtful products helping busy professionals and entrepreneurs work and live with peace and purpose."
        />
        <meta
          name="keywords"
          content="productivity, software development, entrepreneurship, peace, self improvement, life"
        />
        <meta name="revisit-after" content="7 days"></meta>
      </Head>
      <div className="font-sans">
        <Header visible={showHeader} />
        <div
          className="min-h-screen pb-32"
          style={{ backgroundColor: '#fbfbff' }}
        >
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
    </>
  );
};

export default Index;
