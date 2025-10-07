import Head from 'next/head';
import React from 'react';
import DoubleChevronDown from '../../components/DoubleChevronDown';
import Footer from '../../components/Footer';
import { RiverNotABucketProblemSection } from '../../components/gifts/river-not-a-bucket/RiverNotABucketProblemSection';
import { RiverNotABucketWhatWeHaveMadeSection } from '../../components/gifts/river-not-a-bucket/RiverNotABucketWhatWeHaveMadeSection';
import { RiverNotABucketWhyGiveItATrySection } from '../../components/gifts/river-not-a-bucket/RiverNotABucketWhyGiveItATrySection';
import { NotionTemplateGiftCTASection } from '../../components/gifts/shared/notion-template/NotionTemplateGiftCTASection';
import { NotionTemplateGiftHeroSection } from '../../components/gifts/shared/notion-template/NotionTemplateGiftHeroSection';
import Header from '../../components/Header';
import ScrollIndicator from '../../components/ScrollIndicator';
import { RIVER_NOT_A_BUCKET_DATA } from '../../data/gifts';

const GiftPage: React.FC = () => {
  const gift = RIVER_NOT_A_BUCKET_DATA;

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
        {/* TODO: Add specific sections for River Not a Bucket */}
        <RiverNotABucketProblemSection></RiverNotABucketProblemSection>
        <RiverNotABucketWhatWeHaveMadeSection></RiverNotABucketWhatWeHaveMadeSection>
        <RiverNotABucketWhyGiveItATrySection></RiverNotABucketWhyGiveItATrySection>
        <NotionTemplateGiftCTASection ctaLink={gift.ctaLink} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default GiftPage;
