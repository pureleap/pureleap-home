import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import { ContactSection as Contact } from '../components/ContactSection';
import Footer from '../components/Footer';
import { GiftsSection } from '../components/GiftsSection';
import Header from '../components/Header';
import { HeroSection as Hero } from '../components/HeroSection';
import ScrollIndicator from '../components/ScrollIndicator';
import { SolutionsSection as Solutions } from '../components/SolutionsSection';
import { TeamSection as Team } from '../components/TeamSection';

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
        window.innerHeight || 0,
      );
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setShowHeader(scrollPosition >= viewportHeight + 120);
    }, 100),
    [],
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
        <meta name="title" content="Pureleap: Be chill and create from love ❤" />
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
        <div className="min-h-screen pb-32" style={{ backgroundColor: '#fbfbff' }}>
          <Hero className="h-full" />
        </div>
        <div className="">
          <GiftsSection></GiftsSection>
        </div>
        <div className="">
          <Solutions className="" />
        </div>
        <ScrollIndicator targetId="gifts">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>arrow down</title>
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </ScrollIndicator>
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
