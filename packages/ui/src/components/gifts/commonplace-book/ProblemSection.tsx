import pulled from './person-undecided.jpeg';
export function ProblemSection() {
  return (
    <section className="pt-32 bg-white" id="details">
      <h2 className="text-5xl mb-16 text-center font-handwritten">The problem</h2>
      <div className="flex flex-row justify-evenly">
        <div>
          <img className="h-96" src={pulled} alt="Person pulled in many directions"></img>
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
