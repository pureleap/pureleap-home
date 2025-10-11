import { SectionHeading } from '../../SectionHeading';
import man from './man-sitting-by-the-riverside.jpeg';

export function RiverNotABucketWhatWeHaveMadeSection() {
  return (
    <section className="pt-32 bg-white" id="what-we-have-made">
      <SectionHeading>What we've made for you</SectionHeading>
      <div className="flex flex-col md:flex-row justify-center md:justify-center items-center">
        <div className="flex items-center font-sans text-center text-lg max-w-96 pr-8">
          <div>
            <p className="mb-4">
              A Notion Template based on an idea by Oliver Burkeman
              <span className="align-super">*</span>:
            </p>
            <p className="mb-4">·</p>
            <p className="mb-4">
              Don't treat what you collect as <b>tasks</b> for later.
            </p>
            <p className="mb-4">
              Treat it as flotsam on a <b>river</b>: pick up what calls to you, and let the rest{' '}
              <em>drift past</em>.
            </p>
            <p className="mb-4">·</p>
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
