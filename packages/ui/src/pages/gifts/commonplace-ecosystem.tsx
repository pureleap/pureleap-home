import Head from 'next/head';
import React from 'react';
import DoubleChevronDown from '../../components/DoubleChevronDown';
import Footer from '../../components/Footer';
import { CommonplaceEcosystemProblemSection } from '../../components/gifts/commonplace-ecosystem/CommonplaceEcosystemProblemSection';
import { CommonplaceEcosystemWhatWeHaveMadeSection } from '../../components/gifts/commonplace-ecosystem/CommonplaceEcosystemWhatWeHaveMadeSection';
import { NotionTemplateGiftCTASection } from '../../components/gifts/shared/notion-template/NotionTemplateGiftCTASection';
import { NotionTemplateGiftHeroSection } from '../../components/gifts/shared/notion-template/NotionTemplateGiftHeroSection';
import Header from '../../components/Header';
import ScrollIndicator from '../../components/ScrollIndicator';
import { COMMONPLACE_ECOSYSTEM_DATA } from '../../data/gifts';

const GiftPage: React.FC = () => {
  const gift = COMMONPLACE_ECOSYSTEM_DATA;

  return (
    <>
      <Head>
        <title>{`${gift.title} - Free Notion Template`}</title>
        <meta property="og:title" content={`${gift.title} - Free Notion Template`} />
        <meta name="description" content={gift.description} />

        <meta property="og:description" content={gift.description} />
        <meta property="og:image" content="https://pureleap.com/meta/2510/commonplace-ecosystem.png" />
        <meta name="revisit-after" content="14 days"></meta>
        <link rel="canonical" href="https://pureleap.com/gifts/commonplace-ecosystem" />
        <meta property="og:url" content="https://pureleap.com/gifts/commonplace-ecosystem" />
        <meta
          name="keywords"
          content="commonplace ecosystem, notion, note-taking, organization, productivity, goals"
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
        <CommonplaceEcosystemProblemSection></CommonplaceEcosystemProblemSection>
        <CommonplaceEcosystemWhatWeHaveMadeSection></CommonplaceEcosystemWhatWeHaveMadeSection>
        <NotionTemplateGiftCTASection ctaLink={gift.ctaLink} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default GiftPage;
