import { SectionHeading } from '../../SectionHeading';
import { SplitSection } from '../shared/SplitSection';
import { SplitSectionText } from '../shared/SplitSectionText';
import databasesImage from './commonplace-ecosystem-databases.png';

export function CommonplaceEcosystemWhatWeHaveMadeSection() {
  return (
    <section className="pt-32 bg-white" id="what-we-have-made">
      <SectionHeading>What we've made for you</SectionHeading>
      <div className="flex justify-center flex-col items-center text-body">
        <p className="text-center max-w-md">
          A simple, yet powerful Notion template to master your life with four databases:
        </p>
      </div>
      <div className="mt-8 md:mt-8 flex justify-center flex-col items-center mb-8 md:mb-8">
        <div>
          <img
            src={databasesImage}
            className="w-full md:max-w-3xl rounded-lg md:shadow-xl md:shadow-blue-gray-900/50"
            alt="Commonplace Ecosystem databases"
          ></img>
        </div>
      </div>
      <div className="mt-8 flex justify-center flex-col items-center text-body">
        <ul className="list-disc list-inside mb-4">
          <li>
            <em>Notes:</em> for all your thoughts
          </li>
          <li>
            <em>Topics:</em> to organise your notes
          </li>
          <li>
            <em>Tasks:</em> for everything you want to do
          </li>
          <li>
            <em>Initiatives:</em> to organise your tasks
          </li>
        </ul>
      </div>
    </section>
  );
}
