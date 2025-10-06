import { SectionHeading } from '../shared/SectionHeading';
import man from './man-sitting-by-the-riverside.jpeg';

export function RiverNotABucketWhatWeHaveMadeSection() {
  return (
    <section className="pt-32 bg-white" id="what-we-have-made">
      <SectionHeading>What we've made for you</SectionHeading>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div className="flex items-center font-sans text-center text-xl max-w-96 mb-8 md:mb-0">
          <div>
            <p className="mb-4">We treat what we collect not as 'to dos' for later.</p>
            <p>
              Why don't we instead see them like a cherished river of things; some of which we may
              pick up later, and some we left drift past.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            className="w-full md:w-96 rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={man}
            alt="Man sitting by the riverside"
          ></img>
        </div>
      </div>
      <div className="mt-16 flex justify-center flex-col items-center">
        <div className="text-xl max-w-lg">
          <p className="max-w-lg text-center">
            We've made a <b>Notion template</b> so you can create your own digital Commonplace book.
          </p>
        </div>
        {/* <div>
          <img
            src={book}
            className="mt-8 max-w-3xl rounded-lg shadow-xl shadow-blue-gray-900/50"
            alt="Screenshot of Notion Commonplace book"
          ></img>
        </div> */}
      </div>
    </section>
  );
}
