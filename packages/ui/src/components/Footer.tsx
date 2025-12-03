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
    <footer className={`bg-gray-50 pt-64 ${className}`} style={{ backgroundColor: '#fbfbff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="text-gray-800 mb-4 sm:mb-0 font-sans">© 2014-2025 Pureleap Pty. Ltd.</div>
          <div className="text-gray-800 flex flex-col">
            <h3 className="font-sans font-bold mb-2">What We Make</h3>
            <h4 className="font-sans text-gray-400 mb-2">Notion Templates</h4>
            <div className="ml-4 mb-2">
              <div className="flex flex-col space-y-2">
                <a
                  href="/gifts/river-not-a-bucket"
                  className="text-black-500 hover:text-orange-500 font-sans"
                >
                  River Not a Bucket
                </a>
                <a
                  href="/gifts/commonplace-book"
                  className="text-black-500 hover:text-orange-500 font-sans"
                >
                  Commonplace Book
                </a>
                <a
                  href="/gifts/commonplace-ecosystem"
                  className="text-black-500 hover:text-orange-500 font-sans"
                >
                  Commonplace Ecosystem
                </a>
              </div>
            </div>
            <h4 className="font-sans text-gray-400 mb-2">Notion Integrations</h4>
            <div className="ml-4">
              <div className="flex flex-col space-y-2">
                <a
                  href="https://auto-relation.com"
                  className="text-black-500 hover:text-orange-500 font-sans"
                >
                  AI Auto Relation
                </a>
              </div>
            </div>
          </div>
          <div className="text-gray-800 flex flex-col ml-8">
            <h3 className="font-sans font-bold mb-2">Legal</h3>
            <div className="flex flex-col space-y-2">
              <a href="/privacy-policy" className="text-black-500 hover:text-orange-500 font-sans">
                Privacy Policy
              </a>
              <a
                href="/anti-spam-policy"
                className="text-black-500 hover:text-orange-500 font-sans"
              >
                Anti-Spam Policy
              </a>
            </div>
          </div>
          <div className="text-gray-800 flex flex-col ml-8">
            <h3 className="font-sans font-bold mb-2">Help & Support</h3>
            <div className="flex flex-col space-y-2">
              <a href="/contact-form" className="text-black-500 hover:text-orange-500 font-sans">
                Contact Form
              </a>
              <a
                href="https://docs.pureleap.com"
                className="text-black-500 hover:text-orange-500 font-sans"
              >
                Documentation Hub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
