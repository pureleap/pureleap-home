import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const contactInfo = ['Pureleap Pty. Ltd.', '3023 VIC Caroline Springs', 'Australia'];

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy (Pureleap)</title>
        <meta name="description" content="Describes the Privacy Policy for Pureleap Pty. Ltd." />
        <meta name="revisit-after" content="31 days"></meta>
      </Head>
      <Header></Header>
      <div className="font-sans">
        <section
          className="flex flex-col items-center justify-center pt-32 px-4 md:px-8 lg:px-16"
          style={{ backgroundColor: '#fbfbff' }}
        >
          <h1 className="text-4xl text-center mb-16 font-serif">Privacy Policy</h1>

          <div className="max-w-4xl text-gray-800">
            <p className="text-xl mb-8">
              Pureleap Pty. Ltd. is committed to providing quality services to you and this policy
              outlines our ongoing obligations to you in respect of how we manage your Personal
              Information.
            </p>

            <p className="text-xl mb-8">
              We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act
              1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use,
              disclose, store, secure and dispose of your Personal Information.
            </p>

            <p className="text-xl mb-12">
              A copy of the Australian Privacy Principles may be obtained from the website of The
              Office of the Australian Information Commissioner at{' '}
              <a href="https://www.oaic.gov.au/" className="text-blue-600 hover:text-blue-800">
                https://www.oaic.gov.au/
              </a>
              .
            </p>

            <h2 className="text-2xl font-serif mb-6">
              What is Personal Information and why do we collect it?
            </h2>
            <p className="text-xl mb-8">
              Personal Information is information or an opinion that identifies an individual.
              Examples of Personal Information we collect includes names, addresses, email
              addresses, phone and facsimile numbers.
            </p>

            <p className="text-xl mb-8">
              This Personal Information is obtained through correspondence, by email, via our
              website, and from other publicly available sources. We don&apos;t guarantee website
              links or policy of authorised third parties.
            </p>

            <p className="text-xl mb-12">
              We collect your Personal Information for the primary purpose of providing our services
              to you, providing information to our clients and marketing. We may also use your
              Personal Information for secondary purposes closely related to the primary purpose, in
              circumstances where you would reasonably expect such use or disclosure. You may
              unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
            </p>

            <h2 className="text-2xl font-serif mb-6">Sensitive Information</h2>
            <p className="text-xl mb-8">
              Sensitive information is defined in the Privacy Act to include information or opinion
              about such things as an individual&apos;s racial or ethnic origin, political opinions,
              membership of a political association, religious or philosophical beliefs, membership
              of a trade union or other professional body, criminal record or health information.
            </p>

            <p className="text-xl mb-12">Sensitive information will be used by us only:</p>
            <ul className="list-disc list-inside text-xl mb-12 ml-4">
              <li className="mb-2">For the primary purpose for which it was obtained</li>
              <li className="mb-2">
                For a secondary purpose that is directly related to the primary purpose
              </li>
              <li className="mb-2">With your consent; or where required or authorised by law</li>
            </ul>

            <h2 className="text-2xl font-serif mb-6">Third Parties</h2>
            <p className="text-xl mb-12">
              Where reasonable and practicable to do so, we will collect your Personal Information
              only from you. However, in some circumstances we may be provided with information by
              third parties. In such a case we will take reasonable steps to ensure that you are
              made aware of the information provided to us by the third party.
            </p>

            <h2 className="text-2xl font-serif mb-6">Disclosure of Personal Information</h2>
            <p className="text-xl mb-8">
              Your Personal Information may be disclosed in a number of circumstances including the
              following:
            </p>
            <ul className="list-disc list-inside text-xl mb-12 ml-4">
              <li className="mb-2">
                Third parties where you consent to the use or disclosure; and
              </li>
              <li className="mb-2">Where required or authorised by law</li>
            </ul>

            <h2 className="text-2xl font-serif mb-6">Security of Personal Information</h2>
            <p className="text-xl mb-12">
              Your Personal Information is stored in a manner that reasonably protects it from
              misuse and loss and from unauthorized access, modification or disclosure. When your
              Personal Information is no longer needed for the purpose for which it was obtained, we
              will take reasonable steps to destroy or permanently de-identify your Personal
              Information. However, most of the Personal Information is or will be stored in client
              files which will be kept by us for a minimum of 7 years.
            </p>

            <h2 className="text-2xl font-serif mb-6">Access to your Personal Information</h2>
            <p className="text-xl mb-12">
              You may access the Personal Information we hold about you and to update and/or correct
              it, subject to certain exceptions. If you wish to access your Personal Information,
              please contact us in writing. Pureleap Pty. Ltd. will not charge any fee for your
              access request, but may charge an administrative fee for providing a copy of your
              Personal Information. In order to protect your Personal Information we may require
              identification from you before releasing the requested information.
            </p>

            <h2 className="text-2xl font-serif mb-6">
              Maintaining the Quality of your Personal Information
            </h2>
            <p className="text-xl mb-12">
              It is important to us that your Personal Information is up to date. We will take
              reasonable steps to make sure that your Personal Information is accurate, complete and
              up-to-date. If you find that the information we have is not up to date or is
              inaccurate, please advise us as soon as practicable so we can update our records and
              ensure we can continue to provide quality services to you.
            </p>

            <h2 className="text-2xl font-serif mb-6">Policy Updates</h2>
            <p className="text-xl mb-12">
              This Policy may change from time to time and is available on our website.
            </p>

            <h2 className="text-2xl font-serif mb-6">Privacy Policy Complaints and Enquiries</h2>
            <p className="text-xl mb-8">
              If you have any queries or complaints about our Privacy Policy please contact us at:
            </p>

            <div className="text-xl mb-16">
              {contactInfo.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
              <a
                href="/contact-form"
                className={
                  'mt-4 mb-4 text-lg inline-flex px-4 text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-yellow hover:text-black transform transition-transform duration-200 hover:scale-105'
                }
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
