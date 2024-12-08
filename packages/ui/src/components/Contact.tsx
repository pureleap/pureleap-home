import React from 'react';

interface ContactProps {
  className?: string;
}

const contactInfo = [
  'Pureleap Pty. Ltd.',
  '12 Glenmaggie Chase',
  '3023 VIC Caroline Springs',
  'Australia',
];

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center bg-gray-50 pt-32 ${className}`}
    >
      <h2 className="text-3xl text-center mb-24 font-serif">
        How to get in touch
      </h2>
      <div className="flex flex-col items-center">
        {contactInfo.map((line, index) => (
          <p key={index} className="text-gray-800 text-xl font-sans mb-2">
            {line}
          </p>
        ))}
        <a
          href="mailto:public@pureleap.com"
          className="text-blue-500 hover:underline text-xl font-sans mt-4"
        >
          public@pureleap.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
