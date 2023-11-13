import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemFL() {
  return (
    <ul className="m-6 flex flex-col gap-6 md:mx-10">
      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">
              Graphic/Product Design
            </h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              St.Paul, MN
            </p>
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Graphic/Product Design
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
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
