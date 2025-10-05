import giftBox from './gift-box-256x256.png';
import instructions from './handwritten-instructions.png';
import laptopMagic from './laptop-magic.png';
import magicBook from './magic-book.jpeg';
import notebook from './notebook.png';
import robotSorting from './robot-sorting.jpeg';
import teaCup from './tea-cup.png';

export function WhyGiveItATrySection() {
  function Row({ children }) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-start pb-16">{children}</div>
    );
  }

  function RowImage({ src, alt }) {
    return (
      <div className="mb-4 pl-2 sm:mb-0 sm:pl-0 sm:mr-8">
        <img
          src={src}
          alt={alt}
          className="w-32 h-32 sm:w-32 sm:h-32 object-cover rounded-lg"
        ></img>
      </div>
    );
  }

  function RowContent({ heading, text }) {
    return (
      <div className="max-w-md pr-2 sm:pr-0">
        <h3 className="text-xl font-semibold mb-2 text-center sm:text-left">{heading}</h3>
        <p className="text-lg text-center sm:text-left">{text}</p>
      </div>
    );
  }

  return (
    <section className="pt-32 flex justify-center flex-col items-center bg-white">
      <h2 className="text-5xl mb-16 text-center font-handwritten">Why give it a try?</h2>
      <div className="flex flex-col items-center justify-center">
        <Row>
          <RowImage src={teaCup} alt="simple" />
          <RowContent
            heading="It’s simple"
            text="No long list of features to learn. Just what you need, nothing more."
          />
        </Row>
        <Row>
          <RowImage src={magicBook} alt="not just a template" />
          <RowContent
            heading="Not just a template"
            text="We've included short guides how to use the template so it brings clarity not clutter."
          />
        </Row>
        <Row>
          <RowImage src={robotSorting} alt="use AI mindfully" />
          <RowContent
            heading="Use AI to enrich, not replace"
            text="Let AI help you with chores, not replace your thinking."
          />
        </Row>
        <Row>
          <RowImage src={notebook} alt="make it yours" />
          <RowContent
            heading="Make it yours"
            text="We've added a collection of free cover images so you can shape the template to your taste."
          />
        </Row>
        <Row>
          <RowImage src={giftBox} alt="it's free" />
          <RowContent
            heading="It’s free"
            text="A small gift from us to you. No catch. Just something we made to help."
          />
        </Row>
      </div>
    </section>
  );
}
