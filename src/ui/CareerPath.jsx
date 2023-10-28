import { useRef, useState } from "react";
import WorkItemHS from "../features/about/WorkItemHS";
import WorkItemFL from "../features/about/WorkItemFL";
import WorkItemAM from "../features/about/WorkItemAM";
import WorkItemHGA from "../features/about/WorkItemHGA";
import WorkItemMDH from "../features/about/WorkItemMDH";
import { XCircleIcon } from "@heroicons/react/24/outline";

function CareerPath() {
  const [isHSOpen, setIsHSOpen] = useState(false);
  const [isFLOpen, setIsFLOpen] = useState(false);
  const [isAMOpen, setIsAMOpen] = useState(false);
  const [isHGAOpen, setIsHGAOpen] = useState(false);
  const [isMDHOpen, setIsMDHOpen] = useState(false);

  const ref = useRef(null);

  function handleXclick(setter) {
    setter(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <ul
      className="flex flex-col lg:grid lg:grid-cols-8 gap-y-2 pt-16"
      ref={ref}
    >
      {/* HS */}
      <li className="col-span-8 lg:col-start-5 lg:col-span-4 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 shadow-xl">
        <button
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
        <div className="flex flex-col rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemHS />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsHSOpen)}
          />
        </div>
      </div>

      {/* Freelance */}
      <li className="col-span-8 lg:col-start-6 lg:col-span-3 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
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
        <div className="flex flex-col rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemFL />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsFLOpen)}
          />
        </div>
      </div>

      {/* Altamanu */}
      <li className="col-span-8 lg:col-start-3 lg:col-span-2 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
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
        <div className="flex flex-col rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemAM />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsAMOpen)}
          />
        </div>
      </div>

      {/* HGA */}
      <li className="col-span-8 lg:col-start-2 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
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
        <div className="flex flex-col rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemHGA />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => () => handleXclick(setIsHGAOpen)}
          />
        </div>
      </div>

      {/* MDH */}
      <li className="col-span-8 lg:col-start-1 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
        <button
          onClick={() => {
            setIsMDHOpen((o) => !o);
          }}
          className="w-full"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-start">MDH</h3>
            <div className="text-end inline-block text-sm">2016-2017</div>
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
        <div className="flex flex-col rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemMDH />
          <XCircleIcon
            className="w-6 h-6 self-center md:self-end md:mr-6 mb-4 hover:cursor-pointer"
            onClick={() => handleXclick(setIsMDHOpen)}
          />
        </div>
      </div>
    </ul>
  );
}

export default CareerPath;
