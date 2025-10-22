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
import { SectionHeading } from '../components/SectionHeading';

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
        <title>Tools for Note-taking and Life Making</title>
        <meta name="title" content="Tools for note-taking and life making" />
        <meta property="og:title" content="Tools for note-taking and life making" />
        <meta
          name="description"
          content="From clutter to clarity with the quiet craft of note-taking powered by our free tools."
        />
        <meta
          property="og:description"
          content="Move from clutter to clarity through the quiet craft of note-taking powered by our free tools."
        />
        <meta
          name="keywords"
          content="productivity, notion, note-taking, entrepreneurship, self improvement, life"
        />
        <meta
          property="og:image"
          content="https://pureleap.com/meta/2510/overwhelmed-person.jpeg"
        />
        <meta name="revisit-after" content="7 days"></meta>
        <link rel="canonical" href="https://pureleap.com" />
        <meta property="og:url" content="https://pureleap.com" />
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
          <SectionHeading className="pt-16">1 - River not a Bucket</SectionHeading>
        </div>
        <div>
          <LandingPageWhatWeHaveMade></LandingPageWhatWeHaveMade>
        </div>
        <div>
          <LandingPageNotionTemplateCTASection ctaLink="https://www.notion.com/templates/river-not-a-bucket"></LandingPageNotionTemplateCTASection>
        </div>
        <div>
          <SectionHeading className="pt-32">2 - Commonplace Book</SectionHeading>
        </div>
        <div>
          <CommonplaceBookSection></CommonplaceBookSection>
        </div>

        <Team />

        <div className="">
          <Solutions className="" />
        </div>
        <Contact />
        <Footer />

        <ScrollIndicator targetId="gifts">
          <span className="text-3xl font-handwritten">What we do</span>
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
      </div>
    </>
  );
};

export default Index;
