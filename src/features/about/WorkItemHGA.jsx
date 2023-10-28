import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemHGA() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Landscape Improvements for buildings</h3>
            <p className="text-sm text-stone-500">Chicago</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Visualization/Research
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Worked on a couple of landscape improvements around different types
            of building, from school, corporate to musemum. Contributed to site
            and planting design, digital modeling, conducted analysis, supported
            client reviews by diagrams and renderings.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Landscape & Stormwater Calculator</h3>
            <p className="text-sm text-stone-500">Minneapolis, MN</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Research/Excel
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            dolorem tempore vel, at officia reprehenderit, non rerum temporibus
            accusantium deserunt, sed voluptates fugiat aliquid consectetur
            quos. Debitis perferendis suscipit pariatur.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemHGA;
