import Head from 'next/head';
import React from 'react';
import DoubleChevronDown from '../../components/DoubleChevronDown';
import Footer from '../../components/Footer';
import { CommonplaceBookProblemSection } from '../../components/gifts/commonplace-book/CommonplaceBookProblemSection';
import { WhatWeHaveMadeSection } from '../../components/gifts/commonplace-book/WhatWeHaveMadeSection';
import { WhyGiveItATrySection } from '../../components/gifts/commonplace-book/WhyGiveItATrySection';
import { NotionTemplateGiftCTASection } from '../../components/gifts/shared/notion-template/NotionTemplateGiftCTASection';
import { NotionTemplateGiftHeroSection } from '../../components/gifts/shared/notion-template/NotionTemplateGiftHeroSection';
import Header from '../../components/Header';
import ScrollIndicator from '../../components/ScrollIndicator';
import { COMMONPLACE_BOOK_DATA } from '../../data/gifts';

const GiftPage: React.FC = () => {
  const gift = COMMONPLACE_BOOK_DATA;

  return (
    <>
      <Head>
        <title>{`${gift.title} - Pureleap`}</title>
        <meta name="description" content={gift.description} />
      </Head>
      <Header></Header>
      <div className="font-sans bg-white min-h-screen pb-32">
        <NotionTemplateGiftHeroSection gift={gift} />
        <ScrollIndicator targetId="details">
          <DoubleChevronDown />
          learn more
        </ScrollIndicator>
      </div>
      <div className="pr-8 pl-8">
        <CommonplaceBookProblemSection></CommonplaceBookProblemSection>
        <WhatWeHaveMadeSection></WhatWeHaveMadeSection>
        <WhyGiveItATrySection></WhyGiveItATrySection>
        <NotionTemplateGiftCTASection ctaLink={gift.ctaLink} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default GiftPage;
