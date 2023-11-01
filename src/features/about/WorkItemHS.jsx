import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemHS() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Commercial Outdoor Space</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Research/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Managed large-scale commercial projects throughout middle-west, from
            initial design research to construction documentation. Facilitated
            productive client meetings and provided essential research support.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">High-end Residences</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Research/3D Visualization/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Provided crucial support for permit applications and construction
            documentation. Contributed to project enhancement through 3D
            modeling, rendering, and construction detail development. Actively
            engaging with clients, I played a vital role in client meetings and
            provided essential research support to ensure project success.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Office Standards</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Chicago, IL
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Research/3D Visualization/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Led the development of graphic standards for various project phases
            in the office, including InDesign presentation graphics, Analysis
            vector library, Lumion tutorial with SketchUp/Rhino to ensure design
            consistency and enhance project visuals. I created templates and
            resources to streamline the design process, improving team
            efficiency and project quality.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemHS;
