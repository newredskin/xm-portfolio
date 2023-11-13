import { useEffect, useRef } from "react";
import Typed from "typed.js";

function DynamicIntroText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(function () {
    const intros = {
      strings: [
        `{ "I am a ^1000 Landscape Architect." }`,
        `{ "I am a ^1000 full stack developer in training." }`,
        `{ "I am deeply ^1000 passionate about crafting excitement in both physical and digital world", ...full stack developer, ...landscape architect }`,
      ],
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 15,
    };

    typed.current = new Typed(el.current, intros);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div
      className="container bg-orange-100/30 dark:bg-gray-950/50 dark:outline dark:outline-1 dark:outline-orange-50/50 text-center rounded-3xl text-sm text-teal-900 dark:text-orange-50/80 shadow-xl shadow-teal-900/10 dark:shadow-gray-950 px-5 py-10 md:max-w-[66%] lg:max-w-[50%]"
      style={{ userSelect: "none" }}
    >
      <span ref={el} />
    </div>
  );
}

export default DynamicIntroText;
