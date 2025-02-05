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
      className={`flex flex-col items-center justify-center pt-32 ${className}`}
      style={{ backgroundColor: '#fbfbff' }}
      id="contact"
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
        <span className="text-xl font-sans mt-4 text-center">
          Please contact us through the social channels above.
        </span>
        <a
          href="/contact-form"
          className={
            'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
          }
        >
          Contact Form
        </a>
      </div>
    </section>
  );
};

export default Contact;
