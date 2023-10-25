import { useEffect, useRef } from "react";
import Typed from "typed.js";

function DynamicIntroText() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(function () {
    const intros = {
      strings: [
        `{ "I am a ^1000 Landscape Architect." }`,
        `{ "I am a ^1000 full stack developer in training", ...landscape architect }`,
        `{ "I am deeply passionate about crafting excitement in both physical and digital world", ...full stack developer, ...landscape architect }`,
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
    <div className="container absolute rounded-xl p-10 text-sm text-center bg-teal-950/70 w-1/2 text-stone-400 top-1/3 left-1/4 shadow-xl">
      <span ref={el} />
    </div>
  );
}

export default DynamicIntroText;
