import React from 'react';

interface FooterProps {
  className?: string;
}

/**
 * Footer component that displays copyright information and legal links
 * @param props - Component properties
 * @returns Footer component with copyright and legal information
 */
const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`bg-gray-50 pt-64 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-800 mb-4 sm:mb-0 font-sans">
            © 2024 Pureleap Pty. Ltd.
          </div>
          <div className="text-gray-800">
            <span className="font-sans">Legal: </span>
            <a
              href="/privacy-policy"
              className="text-black-500 hover:text-orange-500 font-sans"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
