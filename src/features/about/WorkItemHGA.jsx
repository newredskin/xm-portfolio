import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemHGA() {
  return (
    <ul className="m-6 flex flex-col gap-6 md:mx-10">
      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Landscape Improvement for buildings
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Chicago
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            3D Modeling/Visualization/Research
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            worked on a series of landscape improvement projects for various
            building types, ranging from educational institutions and corporate
            offices to museums. My involvement includes site planning, planting
            design, and digital modeling. I supported client reviews with
            insightful diagrams and detailed renderings. Furthermore, I
            maintained a close collaboration with the architecture team,
            seamlessly integrating landscape elements into their Revit, Rhino,
            and 3D printed models. This synergy was crucial in the successful
            delivery of each project, ensuring a cohesive blend of architecture
            and landscape design.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Landscape Water-use Calculator
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Minneapolis, MN
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Research/Excel
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Developed a conceptual landscape water-use calculator in Excel to
            assess the water usage conditions of projects based on location at
            an early design stage. This tool was instrumental in generating
            preliminary estimates of the required stormwater reuse and guiding
            whether selection of specific plant species is needed. The primary
            objective of the calculator is to align with sustainable
            requirements such as LEED and Sustainable Sites.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemHGA;
