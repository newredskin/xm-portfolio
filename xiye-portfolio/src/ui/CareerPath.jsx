import { useState } from "react";
import WorkItemHS from "../features/about/WorkItemHS";
import WorkItemFL from "../features/about/WorkItemFL";
import WorkItemAM from "../features/about/WorkItemAM";
import WorkItemHGA from "../features/about/WorkItemHGA";
import WorkItemMDH from "../features/about/WorkItemMDH";

function CareerPath() {
  const [isHSOpen, setIsHSOpen] = useState(false);
  const [isFLOpen, setIsFLOpen] = useState(false);
  const [isAMOpen, setIsAMOpen] = useState(false);
  const [isHGAOpen, setIsHGAOpen] = useState(false);
  const [isMDHOpen, setIsMDHOpen] = useState(false);

  return (
    <ul className="grid lg:grid-cols-8 gap-y-4 md:gap-y-6">
      {/* HS */}
      <li className="col-span-8 lg:col-start-5 lg:col-span-4 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 hover:bg-red-700 top-1/3 left-1/4 shadow-xl">
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

      <div className={`col-span-8 ${isHSOpen ? "block" : "hidden"}`}>
        <div className="rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemHS />
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

      <div className={`col-span-8 ${isFLOpen ? "block" : "hidden"}`}>
        <div className="rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemFL />
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

      <div className={`col-span-8 ${isAMOpen ? "block" : "hidden"}`}>
        <div className="rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemAM />
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

      <div className={`col-span-8 ${isHGAOpen ? "block" : "hidden"}`}>
        <div className="rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemHGA />
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

      <div className={`col-span-8 ${isMDHOpen ? "block" : "hidden"}`}>
        <div className="rounded-xl py-1 px-3 bg-orange-50/30 shadow-xl">
          <WorkItemMDH />
        </div>
      </div>
    </ul>
  );
}

export default CareerPath;

/*
      <li className="col-span-8 lg:col-start-6 lg:col-span-3 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-start">Freelance</h3>
          <div className="text-end inline-block text-sm">since 2020</div>
        </div>
        <p
          className="text-start text-stone-400 text-sm"
          style={{ fontFamily: "Cutive Mono" }}
        >
          Design/ Dev
        </p>
      </li>

      <li className="col-span-8 lg:col-start-3 lg:col-span-2 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
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
      </li>

      <li className="col-span-8 lg:col-start-2 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
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
      </li>

      <li className="col-span-8 lg:col-start-1 lg:col-span-1 container rounded-xl py-1 px-3 text-stone-200 bg-teal-950/80 top-1/3 left-1/4 shadow-xl">
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
      </li>


*/
