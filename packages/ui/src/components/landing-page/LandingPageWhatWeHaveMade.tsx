import React from 'react';
import man from './img/man-sitting-by-the-riverside.jpeg';

/**
 * Props for LandingPageWhatWeHaveMade component
 */
interface LandingPageWhatWeHaveMadeProps {
  /** Additional CSS classes for the section */
  className?: string;
}

/**
 * Landing page what we have made section component
 * @param className - Additional CSS classes for the section
 */
export function LandingPageWhatWeHaveMade({ className }: LandingPageWhatWeHaveMadeProps) {
  return (
    <section className={` bg-white ${className || ''}`} id="what-we-have-made">
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center">
        <div className="flex items-center font-sans text-center max-w-lg pr-8">
          <div className="text-body">
            <p className="mb-4">
              We begin with an idea by Oliver Burkeman
              <span className="align-super">*</span>:
            </p>
            <p className="mb-4">〰️</p>
            <p className="mb-6">
              Treat what you collect like flotsam on a river, not as bucket to empty.
            </p>
            <p className="mb-0">Pick up what calls to you.</p>
            <p className="mb-4">Let the rest drift by.</p>
            <p className="mb-4">〰️ </p>
            <p></p>
            <p className="mt-16 text-sm text-gray">
              * From the book{' '}
              <a
                href="https://www.goodreads.com/review/show/7707610951"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Meditations for Mortals
              </a>{' '}
            </p>
          </div>
        </div>
        <div className="pl-8">
          <img
            className="hidden md:block w-64 md:w-64"
            src={man}
            alt="Man sitting by the riverside"
          ></img>
        </div>
      </div>
    </section>
  );
}
