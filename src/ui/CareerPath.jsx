import { useRef, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

import WorkItemHS from "../features/about/WorkItemHS";
import WorkItemFL from "../features/about/WorkItemFL";
import WorkItemAM from "../features/about/WorkItemAM";
import WorkItemHGA from "../features/about/WorkItemHGA";
import WorkItemMDH from "../features/about/WorkItemMDH";
import ExternalSiteLink from "./ExternalSiteLink";

function CareerPath() {
  const [isHSOpen, setIsHSOpen] = useState(false);
  const [isFLOpen, setIsFLOpen] = useState(false);
  const [isAMOpen, setIsAMOpen] = useState(false);
  const [isHGAOpen, setIsHGAOpen] = useState(false);
  const [isMDHOpen, setIsMDHOpen] = useState(false);

  const refHS = useRef(null);
  const refFL = useRef(null);
  const refAM = useRef(null);
  const refHGA = useRef(null);
  const refMDH = useRef(null);

  function centerElement(ref) {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    const viewportHeight = window.innerHeight;
    const refTop = ref?.current.getBoundingClientRect().top;
    const offset = (viewportHeight - ref?.current.clientHeight) / 2;
    const scrollToCenter = refTop + window.scrollY - offset;

    window.scrollTo({ top: scrollToCenter, behavior: "smooth" });
  }

  function handleXclick(setter, ref) {
    setter(false);
    centerElement(ref);
  }

  function handleExpandClick(setter, ref) {
    setter((o) => !o);
    centerElement(ref);
  }

  return (
    <ul className="flex flex-col items-center justify-center gap-y-2 pt-16 lg:grid lg:grid-cols-8">
      {/* HS */}
      <li className="container col-span-8 box-border rounded-2xl bg-teal-950/80 px-3 py-1 text-stone-200 shadow-xl hover:bg-red-700 dark:border-[1px] dark:border-orange-50/50 dark:bg-gray-900 dark:text-orange-50 dark:shadow-orange-50/5 dark:hover:bg-red-700/80 lg:col-span-4 lg:col-start-5">
        <button
          ref={refHS}
          onClick={() => handleExpandClick(setIsHSOpen, refHS)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-start font-bold">Hoerr Schadut</h3>
            <div className="inline-block text-end text-sm">2019-2023</div>
          </div>
          <p
            className="text-start text-sm text-stone-300/60"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Landscape Architect
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 transition-opacity duration-500 ${
          isHSOpen ? "opacity-100" : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl bg-orange-50/30 via-20% px-3 py-1 shadow-xl shadow-teal-700/20 dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:via-20% dark:to-gray-950 dark:to-80% dark:text-orange-50/90 dark:shadow-orange-50/5">
          <ExternalSiteLink link="https://hoerrschaudt.com/" />
          <WorkItemHS />
          <XCircleIcon
            className="mb-4 h-6 w-6 self-center hover:cursor-pointer hover:text-red-700 md:mr-6 md:self-end"
            onClick={() => handleXclick(setIsHSOpen, refHS)}
          />
        </div>
      </div>

      {/* Freelance */}
      <li className="container left-1/4 top-1/3 col-span-8 rounded-xl bg-teal-950/80 px-3 py-1 text-stone-200 shadow-xl hover:bg-red-700 dark:border-[1px] dark:border-orange-50/50 dark:bg-gray-900 dark:text-orange-50 dark:shadow-orange-50/5 dark:hover:bg-red-700/80 lg:col-span-3 lg:col-start-6">
        <button
          ref={refFL}
          onClick={() => handleExpandClick(setIsFLOpen, refFL)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-start font-bold">Freelance</h3>
            <div className="inline-block text-end text-sm">since 2021</div>
          </div>
          <p
            className="text-start text-sm text-stone-300/60"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Design/ Dev
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isFLOpen ? "opacity-100" : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl bg-orange-50/30 px-3 py-1 shadow-xl shadow-teal-700/20 dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:via-20% dark:to-gray-950 dark:to-80% dark:text-orange-50/90 dark:shadow-orange-50/5">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="self-end"
          >
            <ExternalSiteLink link="#" />
          </div>
          <WorkItemFL />
          <XCircleIcon
            className="mb-4 h-6 w-6 self-center hover:cursor-pointer hover:text-red-700 md:mr-6 md:self-end"
            onClick={() => handleXclick(setIsFLOpen, refFL)}
          />
        </div>
      </div>

      {/* Altamanu */}
      <li className="container left-1/4 top-1/3 col-span-8 rounded-xl bg-teal-950/80 px-3 py-1 text-stone-200 shadow-xl hover:bg-red-700 dark:border-[1px] dark:border-orange-50/50 dark:bg-gray-900 dark:text-orange-50 dark:shadow-orange-50/5 dark:hover:bg-red-700/80 lg:col-span-2 lg:col-start-3">
        <button
          ref={refAM}
          onClick={() => handleExpandClick(setIsAMOpen, refAM)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-start font-bold">Altamanu</h3>
            <div className="inline-block text-end text-sm">2017-2019</div>
          </div>
          <p
            className="text-start text-sm text-stone-300/60"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Landscape Designer
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isAMOpen ? "opacity-100" : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl bg-orange-50/30 px-3 py-1 shadow-xl shadow-teal-700/20 dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:via-20% dark:to-gray-950 dark:to-80% dark:text-orange-50/90 dark:shadow-orange-50/5">
          <ExternalSiteLink link="https://www.facebook.com/AltamanuInc/" />
          <WorkItemAM />
          <XCircleIcon
            className="mb-4 h-6 w-6 self-center hover:cursor-pointer hover:text-red-700 md:mr-6 md:self-end"
            onClick={() => handleXclick(setIsAMOpen, refAM)}
          />
        </div>
      </div>

      {/* HGA */}
      <li className="container left-1/4 top-1/3 col-span-8 rounded-xl bg-teal-950/80 px-3 py-1 text-stone-200 shadow-xl hover:bg-red-700 dark:border-[1px] dark:border-orange-50/50 dark:bg-gray-900 dark:text-orange-50 dark:shadow-orange-50/5 dark:hover:bg-red-700/80 lg:col-span-1 lg:col-start-2">
        <button
          ref={refHGA}
          onClick={() => handleExpandClick(setIsHGAOpen, refHGA)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-start font-bold">HGA</h3>
            <div className="inline-block text-end text-sm">2016-2017</div>
          </div>
          <p
            className="text-start text-sm text-stone-300/60"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Landscape Designer
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isHGAOpen ? "opacity-100" : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl bg-orange-50/30 px-3 py-1 shadow-xl shadow-teal-700/20 dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:via-20% dark:to-gray-950 dark:to-80% dark:text-orange-50/90 dark:shadow-orange-50/5">
          <ExternalSiteLink link="https://hga.com/" />
          <WorkItemHGA />
          <XCircleIcon
            className="mb-4 h-6 w-6 self-center hover:cursor-pointer hover:text-red-700 md:mr-6 md:self-end"
            onClick={() => handleXclick(setIsHGAOpen, refHGA)}
          />
        </div>
      </div>

      {/* MDH */}
      <li className="container left-1/4 top-1/3 col-span-8 rounded-xl bg-teal-950/80 px-3 py-1 text-stone-200 shadow-xl hover:bg-red-700 dark:border-[1px] dark:border-orange-50/50 dark:bg-gray-900 dark:text-orange-50 dark:shadow-orange-50/5 dark:hover:bg-red-700/80 lg:col-span-1 lg:col-start-1">
        <button
          ref={refMDH}
          onClick={() => handleExpandClick(setIsMDHOpen, refMDH)}
          className="w-full"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-start font-bold">MDH</h3>
            <div className="inline-block text-end text-sm">2015-2016</div>
          </div>
          <p
            className="text-start text-sm text-stone-300/60"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Graphic Designer
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isMDHOpen ? "opacity-100" : "h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl bg-orange-50/30 px-3 py-1 shadow-xl dark:bg-gradient-to-b dark:from-gray-800 dark:via-gray-900 dark:via-20% dark:to-gray-950 dark:to-80% dark:text-orange-50/90 dark:shadow-orange-50/5">
          <ExternalSiteLink link="https://www.health.state.mn.us/" />
          <WorkItemMDH />
          <XCircleIcon
            className="mb-4 h-6 w-6 self-center hover:cursor-pointer hover:text-red-700 md:mr-6 md:self-end"
            onClick={() => handleXclick(setIsMDHOpen, refMDH)}
          />
        </div>
      </div>
    </ul>
  );
}

export default CareerPath;
