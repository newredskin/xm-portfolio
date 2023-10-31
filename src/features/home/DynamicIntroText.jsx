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
    <div className="container bg-teal-950/70 text-center rounded-3xl text-sm text-stone-400 shadow-xl px-5 py-10 md:max-w-[50%]">
      <span ref={el} />
    </div>
  );
}

export default DynamicIntroText;

/*
    <div className="">
      <div className="container absolute rounded-xl p-10 text-sm text-center bg-teal-950/70 w-1/2 text-stone-400 top-1/3 left-1/4 shadow-xl">
        <span ref={el} />
      </div>
      <div className="inline-block">
        <Button handleClick={() => navigate("/about")}>About</Button>
      </div>
    </div>

*/
