import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";
import MouseFollow from "./MouseFollow";

function AppLayout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(
    function () {
      const screenWidth = window.innerWidth;

      if (isNavExpanded && screenWidth < 768)
        document.body.style.overflow = "hidden";
      if (!isNavExpanded) document.body.style.overflow = "auto";
    },
    [isNavExpanded]
  );

  return (
    <>
      <div>
        <NavBar
          isNavExpanded={isNavExpanded}
          setIsNavExpanded={setIsNavExpanded}
        />
        <main>
          <MouseFollow />
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default AppLayout;
