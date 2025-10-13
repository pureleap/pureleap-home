import React from 'react';
import { NotionTemplateGiftCTAButton } from '../gifts/shared/notion-template/NotionTemplateGiftCTAButton';

interface LandingPageNotionTemplateCTASectionProps {
  ctaLink: string;
  /** Additional CSS classes for the section */
  className?: string;
}

export const LandingPageNotionTemplateCTASection: React.FC<
  LandingPageNotionTemplateCTASectionProps
> = ({ ctaLink, className }) => {
  return (
    <section className={`pt-32 bg-white ${className || ''}`}>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="flex items-center justify-center font-sans text-center text-xl max-w-64 px-2 sm:px-0 self-center">
          <div>
            <p className="mb-2 text-body">
              To put this idea into practice, we made a Notion template.
            </p>
            <p className="text-body">100% free!</p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0 sm:pl-16 flex justify-center self-center">
          <NotionTemplateGiftCTAButton link={ctaLink} />
        </div>
      </div>
    </section>
  );
};
