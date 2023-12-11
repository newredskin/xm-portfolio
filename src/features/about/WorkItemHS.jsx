import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemHS() {
  return (
    <ul className="m-6 flex flex-col gap-6 md:mx-10">
      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">Commercial Space</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple Locations
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Design/Research/Visualation/CD Docs
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm  text-stone-500/80 dark:text-stone-400"
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
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              High-end Residences
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
            className="col-span-11 col-start-2 row-start-2 text-start text-sm  text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Provided crucial support through permit applications to construction
            documentation. Contributed to project enhancement through modeling,
            rendering, and construction detail development. Actively
            collaborating with the principal and project manager in charge, I
            tackled challenges in an engaging and effective manner. My
            involvement in both internal external meetings was crucial, offering
            essential support and insights that were instrumental in ensuring
            the successful realization of each project.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Office Standards & Resources
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Chicago, IL
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Visualization/Documentation
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            As a key member of the office standard and resource management team,
            my role involved establishing graphic standards and managing our
            in-house resource library. My contributions included creating
            presentation graphic templates, making modeling/rendering tutorials,
            developing an analysis assets library, and maintain the existing
            imagery collection. These efforts streamlined the design process,
            enhancing team efficiency, ensuring design consistency, and greatly
            improved the visual impact and overall quality of the projects.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemHS;
