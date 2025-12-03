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
      <div className="mt-8 md:mt-8 flex justify-center flex-col items-center">
        <div>
          <img
            src={databasesImage}
            className="mt-8 max-w-3xl rounded-lg shadow-xl shadow-blue-gray-900/50"
            alt="Commonplace Ecosystem databases"
          ></img>
        </div>
      </div>
      <div className="mt-8 flex justify-center flex-col items-center text-body">
        <ul className="list-disc list-inside mb-4">
          <li>
            <b>Notes:</b> for all your thoughts
          </li>
          <li>
            <b>Topics:</b> to organise your notes
          </li>
          <li>
            <b>Tasks:</b> for everything you want to do
          </li>
          <li>
            <b>Initiatives:</b> to organise your tasks
          </li>
        </ul>
      </div>
    </section>
  );
}
