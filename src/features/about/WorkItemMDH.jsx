import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemFL() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Graphic/Product Design</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              St.Paul, MN
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Graphic/Product Design
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            During my internship as graphic designer at the Climate & Health
            Assessment Section of the Minnesota Department of Health, I was
            involved in numerous projects, focusing primarily on the creation of
            public graphics and report templates. My work included designing
            compelling infographics on the health impacts of climate change,
            along with producing informative brochures, handouts on the subject.
            Moreover, I played a crucial role in developing a comprehensive
            suite of graphic products for the 2-day MN HIA Coalition Conference
            hosted in Minneapolis. This suite encompassed everything from logos
            and brochures to posters and website designs, contributing
            significantly to the conference's success.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemFL;
