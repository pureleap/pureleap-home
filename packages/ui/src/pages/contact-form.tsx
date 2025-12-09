import type { EmailRequest } from 'api';
import { getEndpoint } from 'api';
import Head from 'next/head';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ShallyAndMax from './../img/contact-form-image.jpg';
import styles from '../styles/message-box.module.css';

const siteKey = '6LcCKs0qAAAAAPgqF5WMUCZKXHhPURI9188wK24W'; // process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/**
 * Contact form page component
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<EmailRequest>({
    message: '',
    name: '',
    email: '',
    phone: '',
    recaptchaToken: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'low-trust' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  useEffect(() => {
    // Initialize reCAPTCHA when component mounts
    if (!siteKey) {
      console.error('reCAPTCHA site key not configured');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.addEventListener('load', () => setRecaptchaLoaded(true));
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  /**
   * Handles form submission
   */
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      if (!recaptchaLoaded || !window.grecaptcha) {
        throw new Error('reCAPTCHA not loaded');
      }

      if (!siteKey) {
        throw new Error('reCAPTCHA site key not configured');
      }

      const token = await window.grecaptcha.execute(siteKey, {
        action: 'submit',
      });

      const response = await fetch(`${getEndpoint()}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          title: 'Contact Form Submission',
          recaptchaToken: token,
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          const errorData = await response.json();
          if (errorData.errorCode === 'LOW_TRUST_SCORE') {
            setStatus({
              type: 'low-trust',
              message: '',
            });
            setIsSubmitting(false);
            return;
          }
        }
        setStatus({
          type: 'error',
          message: 'Failed to send message',
        });
        setIsSubmitting(false);
        return;
      }

      setStatus({
        type: 'success',
        message: 'Your message has been sent successfully!',
      });
      setFormData({
        message: '',
        name: '',
        email: '',
        phone: '',
        recaptchaToken: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error ? error.message : 'An error occurred while sending your message',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {siteKey && (
        <Script
          id="recaptcha-load"
          strategy="afterInteractive"
          src={`https://www.google.com/recaptcha/api.js?render=${siteKey}`}
        />
      )}
      <Head>
        <title>Contact Form (Pureleap)</title>
        <meta name="description" content="Contact form for Pureleap Pty. Ltd." />
        <meta name="revisit-after" content="31 days"></meta>
      </Head>
      <Header></Header>
      <div className="font-sans">
        <section className="flex flex-col items-center justify-center pt-32 px-4 md:px-8 lg:px-16 bg-white">
          <h1 className="text-4xl text-center mb-16 font-serif">Contact Form</h1>
          <img
            className="max-w-md rounded-3xl"
            src={ShallyAndMax}
            alt="Shalveena and Max at the beach"
          ></img>
          <div className={`my-8 ${styles.box} p-4 max-w-sm`}>
            <p className="mb-2">Hi there 👋</p>
            <p className="mb-3">
              Looking forward to hearing from you. We respond to every message (if it's not spam,
              haha)
            </p>
            <p>Shally & Max</p>
          </div>
          <div className="max-w-2xl w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {status.type === 'low-trust' && (
                <div className="p-4 rounded-md bg-red-50 text-red-800">
                  We are very sorry, but Google thinks you are a bot. If not, please reach out to us
                  on{' '}
                  <a
                    href="https://www.linkedin.com/in/maxrohde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    LinkedIn
                  </a>
                  .
                </div>
              )}
              {status.message && status.type !== 'low-trust' && (
                <div
                  className={`p-4 rounded-md ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mb-4 inline-flex px-4 text-center bg-purple-500 text-white py-2 rounded-lg hover:bg-yellow hover:text-black transform transition-transform duration-200 hover:scale-105 
                   ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ContactForm;
