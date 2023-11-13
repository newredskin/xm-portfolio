import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="flex items-center justify-center text-teal-700/50 transition-all duration-300 hover:text-red-700 dark:text-gray-700/50">
      {showButton && (
        <button className="h-10 w-10">
          <ChevronUpIcon onClick={handleClick} />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
