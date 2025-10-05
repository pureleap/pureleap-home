import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DoubleChevronDown from '../../components/DoubleChevronDown';
import Footer from '../../components/Footer';
import { GiftCTA } from '../../components/gifts/commonplace-book/GiftCTA';
import { GiftHeroSection } from '../../components/gifts/commonplace-book/GiftHeroSection';
import { ProblemSection } from '../../components/gifts/commonplace-book/ProblemSection';
import { WhatWeHaveMadeSection } from '../../components/gifts/commonplace-book/WhatWeHaveMadeSection';
import { WhyGiveItATrySection } from '../../components/gifts/commonplace-book/WhyGiveItATrySection';
import Header from '../../components/Header';
import { gifts } from '../../data/gifts';

const GiftPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isAtTop = scrollTop < 100;
      setIsVisible(isAtTop);
    };

    // Check initial position
    checkScrollPosition();

    // Add scroll listener
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const gift = gifts.find((g) => g.id === 'commonplace-book');

  if (!gift) {
    return <div>Gift not found</div>;
  }

  return (
    <>
      <Head>
        <title>{`${gift.title} - Pureleap`}</title>
        <meta name="description" content={gift.description} />
      </Head>
      <Header></Header>
      <div className="font-sans bg-white min-h-screen pb-32">
        <GiftHeroSection gift={gift} />
        {/* Learn more button */}
        {isVisible && (
          <div className="fixed bottom-8 left-0 right-0 flex justify-center animate-bounce z-50">
            <div className="flex justify-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('details');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <span className="font-sans text-lg text-gray-400 hover:text-gray-600 flex items-center">
                  <DoubleChevronDown />
                  learn more
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
      <ProblemSection></ProblemSection>
      <WhatWeHaveMadeSection></WhatWeHaveMadeSection>
      <WhyGiveItATrySection></WhyGiveItATrySection>
      <section className="pt-32 bg-white">
        <div className="flex flex-row justify-center">
          <div className="flex items-center font-sans text-center text-xl max-w-64">
            <div>
              <p className="mb-4">
                Explore the template on Notion and we hope you'll give it a try!
              </p>
            </div>
          </div>
          <div className="pl-16">
            <GiftCTA link={gift.ctaLink} />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default GiftPage;
