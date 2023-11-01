import { Outlet } from "react-router-dom";
import { useState } from "react";

import NavBar from "./NavBar";

function AppLayout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode((d) => !d);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  if (isNavExpanded) document.body.style.overflow = "hidden";
  if (!isNavExpanded) document.body.style.overflow = "auto";

  return (
    <>
      <div>
        <NavBar
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
