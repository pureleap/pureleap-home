import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { RiverNotABucketProblemSection } from '../components/gifts/river-not-a-bucket/RiverNotABucketProblemSection';
import { RiverNotABucketWhatWeHaveMadeSection } from '../components/gifts/river-not-a-bucket/RiverNotABucketWhatWeHaveMadeSection';
import Header from '../components/Header';
import { CommonplaceBookSection } from '../components/landing-page/CommonplaceBookSection';
import { ContactSection as Contact } from '../components/landing-page/ContactSection';
import { GiftsSection } from '../components/landing-page/GiftsSection';
import { LandingPageNotionTemplateCTASection } from '../components/landing-page/LandingPageNotionTemplateCTASection';

import { LandingPageProblem1 } from '../components/landing-page/LandingPageProblem1';
import { LandingPageWhatWeHaveMade } from '../components/landing-page/LandingPageWhatWeHaveMade';
import { NewHeroSection } from '../components/landing-page/NewHeroSection';
import { SolutionsSection as Solutions } from '../components/landing-page/SolutionsSection';
import { TeamSection as Team } from '../components/landing-page/TeamSection';
import ScrollIndicator from '../components/ScrollIndicator';
import { RIVER_NOT_A_BUCKET_DATA } from '../data/gifts';

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
          <NewHeroSection className="h-full" />
        </div>
        <div className="">
          <GiftsSection></GiftsSection>
        </div>
        <div className="">
          <LandingPageProblem1></LandingPageProblem1>
        </div>
        <div>
          <LandingPageWhatWeHaveMade></LandingPageWhatWeHaveMade>
        </div>
        <div>
          <LandingPageNotionTemplateCTASection ctaLink="https://www.notion.com/templates/river-not-a-bucket"></LandingPageNotionTemplateCTASection>
        </div>
        <div>
          <CommonplaceBookSection></CommonplaceBookSection>
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
