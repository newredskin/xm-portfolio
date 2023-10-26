import RandomText from "./RandomText";

function TextBackground() {
  return (
    <div
      className="leading-4 text-stone-900/20 text-justify fixed -z-50 bg-gradient-to-t from-cyan-300 to-teal-950 h-full w-full"
      style={{ fontFamily: "Cutive Mono", userSelect: "none" }}
    >
      <RandomText />
    </div>
  );
}

export default TextBackground;

/*

 */
