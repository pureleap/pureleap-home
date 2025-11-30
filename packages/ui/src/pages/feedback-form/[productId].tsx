import type { EmailRequest } from 'api';
import { getEndpoint } from 'api';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ShallyAndMax from './../../img/contact-form-image.jpg';

const siteKey = '6LcCKs0qAAAAAPgqF5WMUCZKXHhPURI9188wK24W'; // process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/**
 * Interface for feedback questions
 */
interface Question {
  /** Question title */
  title: string;
  /** Optional description */
  description?: string;
  /** Whether the question is required (defaults to true) */
  required?: boolean;
}

/**
 * Interface for product feedback configuration
 */
interface ProductFeedback {
  /** Message component to display */
  message: React.ReactElement;
  /** Array of questions for the feedback form */
  questions: Question[];
}

/**
 * Map of product IDs to their feedback configurations
 */
const productMap: Record<string, ProductFeedback> = {
  'commonplace-book-notion-template': {
    message: (
      <div>
        <p className="mb-2">Hi there 👋</p>
        <p className="mb-3">
          Thank you for taking the time to provide feedback for our Commonplace Book template.
        </p>
        <p className="mb-3">Looking forward to read your thoughts.</p>
        <p>Shally & Max</p>
      </div>
    ),
    questions: [
      {
        title: 'Is there anything you would like added or changed?',
        description:
          "Anything suggestions you'd like to make, anything that is bothering you about this template, or any features you'd like to see in the future.",
        required: true,
      },
      {
        title: 'Is there any feature that you absolutely love?',
        description:
          "If there is anything that you absolutely love, and would like to share with me, I'd love to hear about it. It would make my day!",
        required: true,
      },
    ],
  },
};

/**
 * Feedback form page component
 */
const FeedbackForm: React.FC = () => {
  const router = useRouter();
  const { productId } = router.query;
  const productIdStr = Array.isArray(productId) ? productId[0] : productId;
  const product = productIdStr ? productMap[productIdStr] : undefined;

  if (!product) {
    return (
      <>
        <Head>
          <title>Product Not Found</title>
        </Head>
        <Header />
        <div className="font-sans flex flex-col items-center justify-center pt-32 px-4">
          <h1 className="text-4xl text-center mb-16 font-serif">Product Not Found</h1>
          <p>The feedback form for this product is not available.</p>
        </div>
        <Footer />
      </>
    );
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    answers: (product as ProductFeedback).questions.map(() => ''),
    recaptchaToken: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
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

      const message = `Product: ${productIdStr}\n\n${(product as ProductFeedback).questions
        .map((q, i) => `${q.title}\n${formData.answers[i]}`)
        .join('\n\n')}`;

      const emailRequest: EmailRequest = {
        message,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        recaptchaToken: token,
      };

      const response = await fetch(`${getEndpoint()}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailRequest),
      });

      if (!response.ok) {
        throw new Error('Failed to send feedback');
      }

      setStatus({
        type: 'success',
        message: 'Your feedback has been sent successfully!',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        answers: (product as ProductFeedback).questions.map(() => ''),
        recaptchaToken: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error ? error.message : 'An error occurred while sending your feedback',
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
        <title>Feedback Form - {productIdStr}</title>
        <meta name="description" content={`Feedback form for ${productIdStr}`} />
        <meta name="revisit-after" content="31 days"></meta>
      </Head>
      <Header />
      <div className="font-sans">
        <section className="flex flex-col items-center justify-center pt-32 px-4 md:px-8 lg:px-16 bg-white">
          <h1 className="text-4xl text-center mb-16 font-serif">Feedback Form</h1>
          <img
            className="max-w-md rounded-3xl"
            src={ShallyAndMax}
            alt="Shalveena and Max at the beach"
          ></img>
          <div className="my-8">{product.message}</div>
          <div className="max-w-2xl w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {product.questions.map((question, index) => (
                <div key={index}>
                  <label
                    htmlFor={`question-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {question.title} {question.required !== false ? '*' : ''}
                  </label>
                  {question.description && (
                    <p className="text-sm text-gray-600 mt-1">{question.description}</p>
                  )}
                  <textarea
                    id={`question-${index}`}
                    required={question.required !== false}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                    rows={4}
                    value={formData.answers[index]}
                    onChange={(e) => {
                      const newAnswers = [...formData.answers];
                      newAnswers[index] = e.target.value;
                      setFormData({ ...formData, answers: newAnswers });
                    }}
                  />
                </div>
              ))}

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

              {status.message && (
                <div
                  className={`p-4 rounded-md ${status.type === 'success'
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
                  {isSubmitting ? 'Sending...' : 'Send Feedback'}
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

export default FeedbackForm;
