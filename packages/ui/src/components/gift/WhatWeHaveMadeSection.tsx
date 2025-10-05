import book from './commonplace-book.png';
import study from './Vittore_carpaccio.jpg';
import { WhatsIncluded } from './WhatsIncluded';
export function WhatWeHaveMadeSection() {
  return (
    <section className="mt-32 bg-white" id="what-we-have-made">
      <h2 className="text-5xl mb-32 text-center font-handwritten">What we've made for you</h2>
      <div className="flex flex-row justify-evenly">
        <div className="flex items-center font-sans text-center text-xl max-w-96">
          <div>
            <p className="mb-4">Since ancient times, people have kept journals.</p>
            <p>
              One form, the <b>Commonplace book</b>, served as a central place to grow knowledge and
              understanding.
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-96 rounded-lg shadow-xl shadow-blue-gray-900/50"
            src={study}
            alt="Oil painting: Vittore carpaccio, visione di sant'agostino 01"
          ></img>
        </div>
      </div>
      <div className="mt-48 flex justify-center flex-col items-center">
        <div className="text-xl max-w-lg">
          <p className="max-w-lg text-center">
            We made a <b>Notion template</b> that allows you to create your own digital Commonplace
            book.
          </p>
        </div>
        <div>
          <img
            src={book}
            className="mt-8 max-w-3xl rounded-lg shadow-xl shadow-blue-gray-900/50"
            alt="Screenshot of Notion Commonplace book"
          ></img>
        </div>
      </div>
      <WhatsIncluded />
    </section>
  );
}
