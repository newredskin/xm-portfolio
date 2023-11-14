import { useEffect, useRef } from "react";
import Typed from "typed.js";

function DynamicIntroText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(function () {
    const intros = {
      strings: [
        `{ "I am a ^1000 Landscape Architect." }`,
        `{ "I am on the way to become a ^1000 full stack developer." }`,
        `{ "I am deeply ^1000 passionate about crafting excitements across both physical and digital world", ...full stack developer, ...landscape architect }`,
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
      className="container rounded-3xl bg-orange-100/30 px-5 py-10 text-center text-sm text-teal-900 shadow-xl shadow-teal-900/10 dark:border-[1px] dark:border-orange-50/50 dark:bg-gray-950/50 dark:text-orange-50/80 dark:shadow-gray-950 md:max-w-[66%] lg:max-w-[50%] lg:text-base"
      style={{ userSelect: "none" }}
    >
      <span ref={el} />
    </div>
  );
}

export default DynamicIntroText;
