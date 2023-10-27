import { CheckCircleIcon } from "@heroicons/react/24/outline";

function WorkItemFL() {
  return (
    <ul className="m-6 md:mx-10 flex flex-col gap-6">
      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Product Design</h3>
            <p className="text-sm text-stone-500">Multiple firms</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            Design/Research/CD Docs
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            As a freelancer, I&apos;ve assisted firms in logo design, brand
            development, and website design. My work has focused on creating
            compelling visual identities and user-friendly digital experiences
            to leave a lasting impact on their audience.
          </p>
        </div>
      </li>

      <li>
        <div className="grid grid-cols-12 gap-5 items-center">
          <CheckCircleIcon className="w-[100%] h-[100%] md:w-[60%] md:h-[60%] justify-self-center" />
          <div className="col-start-2 col-span-8 md:col-span-6 justify-self-start text-start">
            <h3 className="font-bold">Web Dev</h3>
            <p className="text-sm text-stone-500">Multiple firms</p>
          </div>
          <p className="col-start-2 col-span-12 md:col-start-9 md:col-span-4 justify-self-end self-start text-xs">
            React/JavaScript/MangoDB/etc
          </p>
          <div className="row-start-2 border-l border-red-700 h-full w-1/2 justify-self-end" />
          <p
            className="row-start-2 col-start-2 col-span-11 text-start text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Through self-study, I&apos;ve gained proficiency in web development,
            mastering key technologies like HTML, CSS, JavaScript and React.
            This journey has equipped me to create user-friendly and responsive
            websites and applications, and I&apos;m excited to apply my skills
            in the field.
          </p>
        </div>
      </li>
    </ul>
  );
}

export default WorkItemFL;
