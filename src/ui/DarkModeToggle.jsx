import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="text-stone-100 hover:cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </div>
  );
}

export default DarkModeToggle;
