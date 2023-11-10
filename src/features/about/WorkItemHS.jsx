import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemHS() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Commercial Space</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Research/Visualation/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Worked on large-scale commercial projects across the Midwest,
            handling every phase from the initial design study and research to
            the finalization of construction documentation. In this capacity, I
            assumed multiple roles, effectively juggling a wide array of tasks
            simultaneously. This versatility enabled me to facilitate productive
            client meetings and provide continuous support throughout the
            project lifecycle.
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
            Design/Research/Visualization/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Provided crucial support for permit applications and construction
            documentation. Contributed to project enhancement through 3D
            modeling, rendering, and construction detail development. Actively
            collaborating with the principal in charge, I tackled challenges in
            an engaging and effective manner. My involvement in
            client/consultant meetings was crucial, offering essential support
            and insights that were instrumental in ensuring the successful
            realization of each project.
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
            Visualization/Documentation
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            As a key member of the office standard team, I played an important
            role in establishing graphic standards through project phases. My
            contributions included setting up InDesign presentation graphics,
            developing an Analysis library, and creating Lumion tutorials that
            integrate with SketchUp and Rhino. These efforts streamlined the
            design process, enhancing team efficiency, ensuring design
            consistency, and significantly elevating the visual impact and
            overall quality of the projects.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemHS;
