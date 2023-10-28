import { ChevronUpIcon } from "@heroicons/react/24/outline";

function BackToTopButton() {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex justify-center items-center text-stone-400/50 hover:text-stone-400">
      <button className="h-10 w-10">
        <ChevronUpIcon onClick={handleClick} />
      </button>
    </div>
  );
}

export default BackToTopButton;
