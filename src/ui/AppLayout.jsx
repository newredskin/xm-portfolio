import { Outlet } from "react-router-dom";
import { useState } from "react";

import NavBar from "./NavBar";

function AppLayout() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  if (isNavExpanded) document.body.style.overflow = "hidden";
  if (!isNavExpanded) document.body.style.overflow = "auto";

  return (
    <div>
      <NavBar
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
