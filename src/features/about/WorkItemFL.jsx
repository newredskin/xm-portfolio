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
            {/* <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple firms
            </p> */}
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            Design/Visualization
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Assisted a few firm/organization with their branding and marketing
            materials. This included logo design and custom design for a range
            of company merchandise such as bags, notebooks, as well as websites.
            Additionally, I also crafted graphic posters for events from large
            state-wide conference to smaller group meeting. My work has
            consistently supported clients in enhancing their identity and
            effectively communicating their messages through visually compelling
            approaches.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 items-center gap-5">
          <CheckCircleIcon className="h-[24px] w-[24px] justify-self-center md:h-[32px] md:w-[32px]" />
          <div className="col-span-8 col-start-2 justify-self-start text-start md:col-span-6">
            <h3 className="font-bold dark:text-orange-50">Web Dev</h3>
            {/* <p className="text-sm text-stone-500 dark:text-stone-400">
              Multiple firms
            </p> */}
          </div>
          <p className="col-span-12 col-start-2 self-start justify-self-end text-xs md:col-span-4 md:col-start-9">
            JavaScript/React/HTML/CSS/MangoDB/etc
          </p>
          <div className="row-start-2 h-full w-1/2 justify-self-end border-l border-red-700" />
          <p
            className="col-span-11 col-start-2 row-start-2 text-start text-sm text-stone-500/80 dark:text-stone-400"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Through dedicated self-study, I have achieved proficiency in web
            development, mastering essential tech stack of HTML&CSS, JavaScript,
            and React. This self-guided journey has empowered me with the skills
            to develop user-friendly and responsive websites and applications. I
            am passionate about applying my gained skills to support and add
            value to others in their digital pursuits. These tools also empower
            me to approach challenges with a technological mindset, addressing
            the inefficiencies prevalent in the traditional design industry.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemFL;
