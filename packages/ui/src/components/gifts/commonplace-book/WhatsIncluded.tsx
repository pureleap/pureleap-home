import instructions from './handwritten-instructions.png';
import views from './views.png';

export function WhatsIncluded() {
  function Row({ children }) {
    return <div className="flex flex-row items-center justify-evenly mb-16">{children}</div>;
  }

  function RowImage({ src, alt, className }) {
    return (
      <div>
        {/* https://new.express.adobe.com/id/urn:aaid:sc:AP:79a9ebcb-18d1-4680-be7b-295e9e8da54f?invite=true&accept=true?preload=sharesheet */}
        <img src={src} alt={alt} className={className}></img>
      </div>
    );
  }

  function RowText({ children }) {
    return <div className="mx-16 max-w-md text-lg">{children}</div>;
  }

  return (
    <section className="mt-32 flex justify-center flex-col items-center">
      <h2 className="text-5xl mb-16 text-center font-handwritten">What's included</h2>
      <div className="flex flex-col items-center justify-center">
        <Row>
          <RowImage
            src={instructions}
            alt="handwritten instructions"
            className="w-64 h-32 object-cover object-top rounded-lg shadow-xl shadow-blue-gray-900/50"
          />
          <RowText>
            Handwritten notes to help you <em>slow down</em> and create something meaningful.
          </RowText>
        </Row>
        <Row>
          <RowImage
            src={views}
            alt="Notion views"
            className="max-w-64 rounded-lg shadow-xl shadow-blue-gray-900/50"
          />
          <RowText>
            Notion views optimised for <em>browsing leisurely</em> through your entries.
          </RowText>
        </Row>
      </div>
    </section>
  );
}
