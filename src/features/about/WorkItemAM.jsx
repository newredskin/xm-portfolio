import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemAM() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Large-scale Urban Design</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Chicago, IL
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Research/Visualization
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            In my role within the 'North Lake Shore Drive, Phase 1' project, I
            spearheaded the conceptual urban and landscape design for key
            locations along the drive. Additionally, I developed perspective
            representation materials using innovative, time-efficient methods.
            This approach was crucial in aligning with the expectations for a
            series of public meetings. My contributions played a pivotal role in
            furthering the project's urban design objectives and significantly
            enriched the experience of the public meetings.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Community Parks & Playgrounds</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Research/Visualization/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
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

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Neighborhood Sculptural Identifiers</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            3D Modeling/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Successfully completed several sculptural identifiers across various
            neighborhoods in Chicago. My role involved transforming initial
            design sketches into detailed 3D models. Working closely with the
            pricinpal in charge and manufacturers, I developed comprehensive
            construction details, which were crucial in successfully building
            these identifiers. My contributions in this process not only brought
            the initial concepts to life but also contributed significantly to
            the aesthetic enhancement of Chicago's neighborhoods.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemAM;
