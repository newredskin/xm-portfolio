import RandomText from "./RandomText";

function TextBackground() {
  return (
    <div
      className="leading-4 text-stone-200/20 dark:text-stone-500/10 text-justify fixed -z-50 bg-gradient-to-b from-orange-50 to-teal-700 dark:bg-gradient-to-b dark:from-gray-950 dark:from-65% dark:via-gray-900/50 dark:to-orange-50/20 h-full w-full"
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
