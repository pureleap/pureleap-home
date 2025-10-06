import { SectionHeading } from '../shared/SectionHeading';
import study from './Vittore_carpaccio.jpg';

export function CommonplaceBookWhatWeHaveMadeSection() {
  return (
    <section className="pt-32 bg-white" id="what-we-have-made">
      <SectionHeading>What we've made for you</SectionHeading>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div className="flex items-center font-sans text-center text-xl max-w-96 mb-8 md:mb-0">
          <div>
            <p className="mb-4">Since ancient times, people have kept journals.</p>
            <p>
              One form, the <b>Commonplace book</b>, served as a central place to grow knowledge and
              understanding.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            className="w-full md:w-96 rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={study}
            alt="Oil painting: Vittore carpaccio, visione di sant'agostino 01"
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
