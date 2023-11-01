import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";

function AppLayout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(
    function () {
      const body = document.getElementById("full-content");

      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        body.classList.add("bg-dark");
        body.classList.remove("bg-light");
      } else {
        document.documentElement.classList.remove("dark");
        body.classList.add("bg-light");
        body.classList.remove("bg-dark");
      }

      if (isNavExpanded) document.body.style.overflow = "hidden";
      if (!isNavExpanded) document.body.style.overflow = "auto";
    },
    [isDarkMode, isNavExpanded]
  );

  function toggleDarkMode() {
    setIsDarkMode((d) => !d);
  }

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
