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
    <div className="container bg-teal-950/70 text-center rounded-3xl text-sm text-stone-400 shadow-xl px-5 py-10 md:max-w-[66%] lg:max-w-[50%]">
      <span ref={el} />
    </div>
  );
}

export default DynamicIntroText;
