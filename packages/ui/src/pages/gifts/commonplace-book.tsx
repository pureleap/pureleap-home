import Head from 'next/head';
import React from 'react';
import DoubleChevronDown from '../../components/DoubleChevronDown';
import Footer from '../../components/Footer';
import { CommonplaceBookProblemSection } from '../../components/gifts/commonplace-book/CommonplaceBookProblemSection';
import { CommonplaceBookWhatWeHaveMadeSection } from '../../components/gifts/commonplace-book/CommonplaceBookWhatWeHaveMadeSection';
import { CommonplaceBookWhyGiveItATrySection } from '../../components/gifts/commonplace-book/CommonplaceBookWhyGiveItATrySection';
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
        <title>{`${gift.title} - Free Notion Template`}</title>
        <meta property="og:title" content={`${gift.title} - Free Notion Template`} />
        <meta name="description" content={gift.description} />
        <meta property="og:image" content="https://pureleap.com/meta/2510/commonplace-book.png" />
        <meta name="revisit-after" content="14 days"></meta>
        <link rel="canonical" href="https://pureleap.com/gifts/commonplace-book" />
        <meta
          name="keywords"
          content="commonplace book, notion, note-taking, journalling, self improvement, life"
        />
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
        <CommonplaceBookWhatWeHaveMadeSection></CommonplaceBookWhatWeHaveMadeSection>
        <CommonplaceBookWhyGiveItATrySection></CommonplaceBookWhyGiveItATrySection>
        <NotionTemplateGiftCTASection ctaLink={gift.ctaLink} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default GiftPage;
