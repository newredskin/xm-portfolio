import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemAM() {
  return (
    <ul className="m-6 flex flex-col gap-6 md:mx-10">
      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Large-scale Urban Design
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Chicago, IL
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Design/Research/Visualization
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            In 'North Lake Shore Drive, Phase 1' project, I spearheaded the
            conceptual urban and landscape design for key locations along the
            lakeshore. Additionally, I developed perspective representation
            materials using innovative, time-efficient methods. This method
            established a benchmark for the rendering workflow in this project.
            It was adopted by my colleagues and continued to be used for an
            additional two years. My contributions played a pivotal role in
            furthering the project's urban design objectives and significantly
            enriched the experience of the public meetings.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Neighborhood Sculptural Identifiers
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            3D Modeling/CD Docs
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Successfully completed several gateway identifiers across various
            neighborhoods in Chicago, enhancing the aesthetic appeal of these
            areas. My role involved transforming initial design sketches into
            detailed 3D models, employing parametric design techniques to
            greatly improve workflow efficiency. Working closely with the
            principal in charge and manufacturers, I developed comprehensive
            construction details, which were crucial in successfully building
            these identifiers.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Community Parks & Playgrounds
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Design/Research/Visualization/CD Docs
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Worked on a range of community parks and playgrounds in Greater
            Chicago area. My involvement spanned from initial master planning to
            the preparation of detailed construction documentation, from cost
            estimates to materials research. Additionally, I provided essential
            graphic support for public meetings. All these help contribute to
            the projects's successes.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemAM;
