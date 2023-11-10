import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemHGA() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Landscape Improvement for buildings</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Chicago
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            3D Modeling/Visualization/Research
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
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
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Landscape Water-use Calculator</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Minneapolis, MN
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Research/Excel
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
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
