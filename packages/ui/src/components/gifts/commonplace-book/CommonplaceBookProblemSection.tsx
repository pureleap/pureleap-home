import pulled from './person-undecided.jpeg';
import { SectionHeading } from './SectionHeading';

export function CommonplaceBookProblemSection() {
  return (
    <section className="pt-32 bg-white" id="details">
      <SectionHeading>The problem</SectionHeading>
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
        <div className="mb-8 md:mb-0">
          <img className="h-64 md:h-96" src={pulled} alt="Person pulled in many directions"></img>
        </div>
        <div className="flex items-center font-sans text-center text-xl max-w-96">
          <div>
            <p className="mb-4">There are endless possibilities of what we can become.</p>
            <p>Yet, too much choice overwhelms us and we end up ... nowhere.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
