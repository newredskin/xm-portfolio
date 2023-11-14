import RandomText from "./RandomText";

function TextBackground() {
  return (
    <div
      className="fixed -z-50 h-full w-full bg-gradient-to-b from-orange-50 to-teal-700 text-justify leading-4 text-stone-200/20 dark:bg-gradient-to-b dark:from-gray-950 dark:from-30% dark:via-gray-900/50 dark:to-gray-800/60 dark:text-stone-400/10"
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
