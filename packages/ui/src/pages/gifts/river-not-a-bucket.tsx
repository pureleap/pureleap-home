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
        <title>{`${gift.title} - Free Notion Template`}</title>
        <meta property="og:title" content={`${gift.title} - Free Notion Template`} />
        <meta name="description" content={gift.description} />

        <meta property="og:description" content={gift.description} />
        <meta property="og:image" content="https://pureleap.com/meta/2510/river-not-a-bucket.png" />
        <meta name="revisit-after" content="14 days"></meta>

        <link rel="canonical" href="https://pureleap.com/gifts/river-not-a-bucket" />
        <meta property="og:url" content="https://pureleap.com/gifts/river-not-a-bucket" />
        <meta
          name="keywords"
          content="river not a bucket, notion, note-taking, journalling, self improvement, life"
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
        {/* TODO: Add specific sections for River Not a Bucket */}
        <RiverNotABucketProblemSection
          heading="The Problem"
          className="pt-32"
        ></RiverNotABucketProblemSection>
        <RiverNotABucketWhatWeHaveMadeSection></RiverNotABucketWhatWeHaveMadeSection>
        <RiverNotABucketWhyGiveItATrySection></RiverNotABucketWhyGiveItATrySection>
        <NotionTemplateGiftCTASection ctaLink={gift.ctaLink} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default GiftPage;
