import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const contactInfo = ['Pureleap Pty. Ltd.', '3023 VIC Caroline Springs', 'Australia'];

const SpamPolicy: React.FC = () => {
  return (
    <>
      <Head>
        <title>Anti-Spam Policy - Pureleap</title>
        <meta name="description" content="Describes the Anti-Spam Policy for Pureleap Pty. Ltd." />
        <meta name="revisit-after" content="31 days"></meta>
      </Head>
      <Header></Header>
      <div className="font-sans">
        <section
          className="flex flex-col items-center justify-center pt-32 px-4 md:px-8 lg:px-16"
          style={{ backgroundColor: '#fbfbff' }}
        >
          <h1 className="text-4xl text-center mb-16 font-serif">Anti-Spam Policy</h1>

          <div className="max-w-4xl text-gray-800">
            <p className="text-xl mb-8">
              Pureleap Pty. Ltd. is committed to ensuring that our communication practices comply
              with all relevant laws and regulations concerning spam. This Anti-Spam Policy outlines
              our obligations under the Australian Spam Act 2003 (C2016C00614) and the Spam
              Regulations 2021 (F2021L00285), as well as relevant US and EU laws. Our aim is to
              protect the privacy of individuals and maintain the integrity of our communications.
            </p>

            <h2 className="text-2xl font-serif mb-6">
              1. Compliance with the Australian Spam Act 2003 and Spam Regulations 2021
            </h2>
            <p className="text-xl mb-8">
              Pureleap Pty. Ltd. adheres to the following essential obligations as required by the
              Australian Spam Act 2003 and the Spam Regulations 2021:
            </p>

            <p className="text-xl mb-4">
              <strong>Consent:</strong> We will only send commercial electronic messages with the
              recipient&apos;s consent. This may be express consent (explicit permission given by
              the recipient) or inferred consent (based on an existing business or other
              relationships).
            </p>

            <p className="text-xl mb-4">
              <strong>Identification:</strong> All commercial electronic messages sent by Pureleap
              Pty. Ltd. will clearly identify the sender and provide accurate contact information.
              This includes the business name, physical address, and a valid email address or
              telephone number.
            </p>

            <p className="text-xl mb-12">
              <strong>Unsubscribe Facility:</strong> Every commercial electronic message will
              include a functional and easy-to-use unsubscribe facility. Requests to unsubscribe
              will be honoured promptly, and no further messages will be sent to the recipient
              unless new consent is obtained.
            </p>

            <h2 className="text-2xl font-serif mb-6">2. Compliance with US and EU Laws</h2>
            <p className="text-xl mb-8">
              In addition to Australian regulations, Pureleap Pty. Ltd. is committed to complying
              with relevant US and EU anti-spam laws, including:
            </p>

            <p className="text-xl mb-4">
              <strong>US CAN-SPAM Act:</strong> We ensure that our communications meet the
              requirements of the CAN-SPAM Act, including clear identification of the message as an
              advertisement, inclusion of a valid physical postal address, and honouring opt-out
              requests promptly.
            </p>

            <p className="text-xl mb-12">
              <strong>EU General Data Protection Regulation (GDPR):</strong> We respect the privacy
              rights of individuals in the EU and ensure that our communications comply with the
              GDPR, including obtaining explicit consent for processing personal data and providing
              clear information about data usage.
            </p>

            <h2 className="text-2xl font-serif mb-6">3. Monitoring and Enforcement</h2>
            <p className="text-xl mb-12">
              Pureleap Pty. Ltd. will regularly review and update our communication practices to
              ensure ongoing compliance with anti-spam laws. We will also monitor our systems to
              prevent unauthorised use and take appropriate action against any breaches of this
              policy.
            </p>

            <h2 className="text-2xl font-serif mb-6">4. Reporting Spam</h2>
            <p className="text-xl mb-12">
              If you believe you have received an unsolicited commercial electronic message from
              Pureleap Pty. Ltd. in violation of this policy, please contact us immediately. We will
              investigate the matter promptly and take appropriate corrective action.
            </p>

            <h2 className="text-2xl font-serif mb-6">5. Policy Updates</h2>
            <p className="text-xl mb-12">
              Pureleap Pty. Ltd. reserves the right to update this Anti-Spam Policy as necessary to
              reflect changes in legislation or our business practices. We encourage you to review
              this policy periodically to stay informed about how we are protecting your privacy.
            </p>

            <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
            <p className="text-xl mb-8">
              For any questions or concerns regarding this Anti-Spam Policy, please contact us at:
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

export default SpamPolicy;
