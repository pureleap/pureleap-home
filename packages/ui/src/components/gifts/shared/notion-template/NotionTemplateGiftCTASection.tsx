import React from 'react';
import { NotionTemplateGiftCTAButton } from './NotionTemplateGiftCTAButton';

interface GiftCTASectionProps {
  ctaLink: string;
}

export const NotionTemplateGiftCTASection: React.FC<GiftCTASectionProps> = ({ ctaLink }) => {
  return (
    <section className="pt-32 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex items-center justify-center font-sans text-center text-body max-w-64 px-2 sm:px-0 self-center">
          <div>
            <p className="mb-4">Explore the template on Notion and we hope you'll give it a try!</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:pl-16 flex justify-center self-center">
          <NotionTemplateGiftCTAButton link={ctaLink} />
        </div>
      </div>
    </section>
  );
};
