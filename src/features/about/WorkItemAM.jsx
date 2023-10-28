import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemAM() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Large-scale Urban Design</h3>
            <p className="text-sm text-stone-500">Chicago, IL</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Visualization/Analysis
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            At North Lake Shore Drive, Phase 1 in Chicago, I was involved in
            conceptual urban and landscape design, creating 3D presentation
            materials for public meetings. I also provided critical analysis and
            research support, including spatial and vegetation analysis, as well
            as developing a multi-use trail system. My contributions were
            instrumental in advancing the project&apos;s urban design goals and
            enhancing the public meeting experience.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Community Parks & Playgrounds</h3>
            <p className="text-sm text-stone-500">Multiple Locations</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Research/3D Visualization/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Worked on a range of community parks and playgrounds in Greater
            Chicago area, from master planning to construction documentation,
            from cost estimates to materials research. Provided essential
            graphic support for public meetings, contributing to the
            projects&apos; successes.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Neighborhood Sculptural Identifiers</h3>
            <p className="text-sm text-stone-500">Multiple Locations</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            3D Modeling/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            I&apos;ve completed a couple of sculptural identifiers on multiple
            locations in Chicago&apos;s neighborhood. Helped transform the pure
            sketch ideas to 3D models, worked closely with the sculpture
            installation workshop to produce comprehensive construction drawing
            set.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemAM;
