import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemFL() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Product Design - Graphic</h3>
            <p className="text-sm text-stone-500">St.Paul, MN</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Graphic Design/Website Design
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Worked at the Climate & Health Assessment Section, Minnesota
            Department of Health, I was actively involved in various projects,
            including creating a presentation report on the impact of climate
            change on health. I also designed infographics highlighting the
            health effects of climate change in Minnesota and produced brochures
            on the topic. Additionally, I played a key role in preparing a range
            of graphic products, from logo, brochure, posters to websites for
            the 2-day MN HIA Coalition - 2015 Conference hosted in Minneapolis
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemFL;
