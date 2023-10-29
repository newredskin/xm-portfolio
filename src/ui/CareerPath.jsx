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

  function handleXclick(setter, ref) {
    setter(false);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });

    const viewportHeight = window.innerHeight;
    const refTop = ref?.current.getBoundingClientRect().top;
    const offset = (viewportHeight - ref?.current.clientHeight) / 2;
    const scrollToCenter = refTop + window.scrollY - offset;

    window.scrollTo({ top: scrollToCenter, behavior: "smooth" });
    console.log(ref);
  }

  return (
    <ul className="flex flex-col lg:grid lg:grid-cols-8 gap-y-2 pt-16">
      {/* HS */}
      <li className="col-span-8 lg:col-start-5 lg:col-span-4 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 shadow-xl">
        <button
          ref={refHS}
          onClick={() => {
            setIsHSOpen((o) => !o);
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-start">Hoerr Schadut</h3>
            <div className="text-end inline-block text-sm">2019-2023</div>
          </div>
          <p
            className="text-start text-stone-400 text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Landscape Architect
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 transition-opacity duration-500 ${
          isHSOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <ExternalSiteLink link="https://hoerrschaudt.com/" />
          <WorkItemHS />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer hover:text-red-700"
            onClick={() => handleXclick(setIsHSOpen, refHS)}
          />
        </div>
      </div>

      {/* Freelance */}
      <li className="col-span-8 lg:col-start-6 lg:col-span-3 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
          ref={refFL}
          onClick={() => {
            setIsFLOpen((o) => !o);
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-start">Freelance</h3>
            <div className="text-end inline-block text-sm">since 2021</div>
          </div>
          <p
            className="text-start text-stone-400 text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Design/ Dev
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isFLOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <div
            className="mt-5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ExternalSiteLink link="#" />
          </div>
          <WorkItemFL />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsFLOpen, refFL)}
          />
        </div>
      </div>

      {/* Altamanu */}
      <li className="col-span-8 lg:col-start-3 lg:col-span-2 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
          ref={refAM}
          onClick={() => {
            setIsAMOpen((o) => !o);
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-start">Altamanu</h3>
            <div className="text-end inline-block text-sm">2017-2019</div>
          </div>
          <p
            className="text-start text-stone-400 text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Landscape Designer
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isAMOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <ExternalSiteLink link="https://www.facebook.com/AltamanuInc/" />
          <WorkItemAM />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsAMOpen, refAM)}
          />
        </div>
      </div>

      {/* HGA */}
      <li className="col-span-8 lg:col-start-2 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
          ref={refHGA}
          onClick={() => {
            setIsHGAOpen((o) => !o);
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-start">HGA</h3>
            <div className="text-end inline-block text-sm">2016-2017</div>
          </div>
          <p
            className="text-start text-stone-400 text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Landscape Designer
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isHGAOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <ExternalSiteLink link="https://hga.com/" />
          <WorkItemHGA />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsHGAOpen, refHGA)}
          />
        </div>
      </div>

      {/* MDH */}
      <li className="col-span-8 lg:col-start-1 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
          ref={refMDH}
          onClick={() => {
            setIsMDHOpen((o) => !o);
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-start">MDH</h3>
            <div className="text-end inline-block text-sm">2015-2016</div>
          </div>
          <p
            className="text-start text-stone-400 text-sm"
            style={{ fontFamily: "Cutive Mono" }}
          >
            Graphic Designer
          </p>
        </button>
      </li>

      <div
        className={`col-span-8 ${
          isMDHOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <ExternalSiteLink link="https://www.health.state.mn.us/" />
          <WorkItemMDH />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsMDHOpen, refMDH)}
          />
        </div>
      </div>
    </ul>
  );
}

export default CareerPath;
