import { NavLink } from "react-router-dom";
import {
  Bars3CenterLeftIcon,
  CodeBracketSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function NavBar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 focus:outline-none fixed top-0 z-50 bg-teal-950 w-full">
        <div className="flex items-center gap-2 ">
          <NavLink to="/">
            <CodeBracketSquareIcon className="w-10 h-10 text-red-700" />
          </NavLink>
          <span className="text-stone-200">XIYE MOU</span>
        </div>
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-200 rounded-lg sm:hidden hover:bg-gray-100/20 focus:outline-none focus:ring-2 focus:ring-gray-2"
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <XMarkIcon /> : <Bars3CenterLeftIcon />}
        </button>

        <div
          className={`w-full sm:block sm:w-auto ${isOpen ? "flex" : "hidden"}`}
          id="navbar-default"
        >
          <ul className={"sm:flex sm:gap-8"}>
            {links.map((link) => (
              <li className="text-xl m-2 text-stone-200 p-2" key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen((o) => !o)}
                  className="hover:bg-teal-700 hover:rounded-lg"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

/*





*/
