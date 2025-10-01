import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import DoubleChevronDown from '../../components/DoubleChevronDown';
import { GiftHeroSection } from '../../components/gift/GiftHeroSection';
import { gifts } from '../../data/gifts';

const GiftPage: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;

  const gift = gifts.find((g) => g.slug === slug);

  if (!gift) {
    return <div>Gift not found</div>;
  }

  return (
    <>
      <Head>
        <title>{gift.title} - Pureleap</title>
        <meta name="description" content={gift.description} />
      </Head>
      <div className="font-sans bg-white min-h-screen pb-32">
        <GiftHeroSection gift={gift} />
        {/* Learn more button */}
        <div className="fixed bottom-8 left-0 right-0 flex justify-center animate-bounce z-50">
          <div className="flex justify-center">
            <a
              href="#details"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('details');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <span className="font-sans text-base text-gray-400 hover:text-gray-600 flex items-center">
                <DoubleChevronDown />
                learn more
              </span>
            </a>
          </div>
        </div>
        <div id="details" className="py-12">
          <h2 className="text-5xl text-center font-handwritten">What we've made for you</h2>
        </div>
      </div>
    </>
  );
};

export default GiftPage;
