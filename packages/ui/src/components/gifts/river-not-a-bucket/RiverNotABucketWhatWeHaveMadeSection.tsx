import { SectionHeading } from '../shared/SectionHeading';
import man from './man-sitting-by-the-riverside.jpeg';

export function RiverNotABucketWhatWeHaveMadeSection() {
  return (
    <section className="pt-32 bg-white" id="what-we-have-made">
      <SectionHeading>What we've made for you</SectionHeading>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div className="flex items-center font-sans text-center text-xl max-w-96 mb-8 md:mb-0">
          <div>
            <p className="mb-4">
              We treat what we collect as <b>tasks</b> for later.
            </p>
            <p className="mb-4">
              Why not see them as a <b>river of things</b> — some we'll pick up, others we'll let
              drift past?
            </p>
            <p className="mb-4">·</p>
            <p className="mb-4">
              Our <b>Notion template</b> helps put this idea into practice!
            </p>
            <p className="mt-16 text-sm text-gray">
              Inspired by{' '}
              <a
                href="https://www.goodreads.com/review/show/7707610951"
                target="_blank"
                rel="noopener"
                className="underline"
              >
                Meditations for Mortals
              </a>{' '}
              by Oliver Burkeman.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img className="w-64 md:w-64" src={man} alt="Man sitting by the riverside"></img>
        </div>
      </div>
    </section>
  );
}
