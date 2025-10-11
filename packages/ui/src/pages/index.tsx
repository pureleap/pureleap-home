import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ContactSection as Contact } from '../components/landing-page/ContactSection';
import { GiftsSection } from '../components/landing-page/GiftsSection';
import { HeroSection as Hero } from '../components/landing-page/HeroSection';
import { SolutionsSection as Solutions } from '../components/landing-page/SolutionsSection';
import { TeamSection as Team } from '../components/landing-page/TeamSection';
import ScrollIndicator from '../components/ScrollIndicator';

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
        <div className="min-h-screen pb-32 bg-white">
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
