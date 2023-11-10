import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemFL() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Product Design</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple firms
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Visualization
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Assisted firms with their branding and marketing materials. This
            included designing logos and creating custom designs for a range of
            company merchandise such as bags, notebooks, cups, and websites.
            Additionally, I also crafted graphic posters for events from large
            state-wide conferences to smaller group meetings. My work in these
            areas has consistently supported clients in enhancing their identity
            and effectively communicating their messages through visually
            compelling designs.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Web Dev</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple firms
            </p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            JavaScript/React/HTML/CSS/MangoDB/etc
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Through dedicated self-study, I have achieved proficiency in web
            development, mastering essential technologies such as HTML, CSS,
            JavaScript, and React. This self-guided journey has empowered me
            with the skills to develop user-friendly and responsive websites and
            applications. I am enthusiastic about utilizing my acquired
            expertise to assist and create value for more people in their
            digital endeavors.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemFL;
