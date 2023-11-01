import RandomText from "./RandomText";

function TextBackground() {
  return (
    <div
      className="leading-4 text-stone-900/20 text-justify fixed -z-50 bg-gradient-to-t from-orange-50/30 from-5% to-teal-950 dark:to-gray-900 h-full w-full"
      style={{ fontFamily: "Cutive Mono", userSelect: "none" }}
    >
      <RandomText />
    </div>
  );
}

export default TextBackground;

/*
bg-orange-50/80
cyan-300
 */
