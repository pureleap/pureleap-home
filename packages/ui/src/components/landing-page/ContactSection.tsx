import React from 'react';
import { SectionHeading } from '../SectionHeading';

interface ContactSectionProps {
  className?: string;
}

const contactInfo = ['Pureleap Pty. Ltd.', '3023 VIC Caroline Springs', 'Australia'];

export const ContactSection: React.FC<ContactSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center pt-32 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
      id="contact"
    >
      <SectionHeading>How to get in touch</SectionHeading>
      <div className="flex flex-col items-center">
        {contactInfo.map((line, index) => (
          <p key={index} className="text-gray-800 text-base font-sans mb-2">
            {line}
          </p>
        ))}
        <a
          href="/contact-form"
          className={
            'mt-4 mb-4 inline-flex px-4 text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-yellow hover:text-black transform transition-transform duration-200 hover:scale-105'
          }
        >
          Contact Form
        </a>
      </div>
    </section>
  );
};
