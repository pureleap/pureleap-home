import React from 'react';
import GiftBox from './gift-light.svg';

/**
 * Props for the GiftCTA component.
 */
interface GiftCTAProps {
  /** The link URL for the CTA button */
  link: string;
}

/**
 * CTA button component for gift templates.
 */
export const GiftCTAButton: React.FC<GiftCTAProps> = ({ link }) => {
  return (
    <a
      href={link}
      className="flex items-center justify-center gap-2 px-4 bg-purple text-white rounded-lg border border-gray-200 hover:bg-yellow transition-colors"
    >
      {/* www.svgrepo.com/svg/473212/gift  */}
      <img src={GiftBox} alt="Gift box" className=" w-6 h-6 ml-2" />
      <span className="font-handwritten text-3xl ml-2 mr-2 pt-2 pb-2">View Template</span>
    </a>
  );
};
