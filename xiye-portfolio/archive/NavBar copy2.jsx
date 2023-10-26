import { NavLink } from "react-router-dom";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function NavBar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  function toggleNav() {
    setIsNavExpanded((e) => !e);
  }

  /*
  .hamburger div:first-child {
    @apply rotate-45 translate-y-1;
  }
  .hamburger div:last-child {
    @apply -rotate-45 -translate-y-1.5;
  }

  */

  return (
    <nav>
      <div className="relative z-20 bg-teal-950 ">
        <div className="px-3 md:px-10 lg:w-screen lg:px-6 lg:py-4 w-screen">
          <div className="flex items-center justify-between">
            <div className="flex relative z-20 items-center gap-2">
              <NavLink to="/">
                <CodeBracketSquareIcon className="w-10 h-10 text-red-700" />
              </NavLink>
              <span className="text-stone-200">XIYE MOU</span>
            </div>
            <div className="flex items-center justify-end mr-3">
              <input
                type="checkbox"
                name="hamburger"
                id="hamburger"
                className="peer"
                hidden
              />
              <label
                htmlFor="hamburger"
                className="peer-checked:hamburger relative z-20 -mr-6 block cursor-pointer p-6 md:hidden"
                onClick={toggleNav}
              >
                <div
                  aria-hidden="true"
                  className="m-auto h-0.5 w-6 rounded bg-stone-300 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-stone-300 transition duration-300"
                ></div>
              </label>

              {/* Side menu bar */}
              <div
                className={`${
                  isNavExpanded
                    ? "peer-checked:translate-x-0"
                    : "translate-x-[-100%]"
                } fixed inset-0 w-screen  bg-teal-950/50 transition duration-300  md:static md:w-auto md:translate-x-0 `}
              >
                <div className="flex h-full flex-col justify-between md:flex-row md:items-center">
                  <ul
                    id="menuBar"
                    className="space-y-8 px-14 pt-20 text-stone-200 text-xl md:flex md:space-x-8 md:space-y-0 md:pt-0 md:justify-end"
                  >
                    {links.map((link) => (
                      <li className="" key={link.name}>
                        <NavLink
                          to={link.path}
                          className={`${({ isActive }) =>
                            isActive
                              ? "active"
                              : "non-active"}} group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-red-700 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100`}
                          onClick={toggleNav}
                        >
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

/*
{isNavbarExpanded && (<ul className={`md:hidden flex flex-col fixed left-0   w-3/4 h-screen top-[60px] bg-green-300 items-center justify-around transition-all ease-in-out duration-200 ${isNavExpanded ? "translate-x-0 " : "-translate-x-full"}`}>
        {links.map((item) => (
          <li key={`link-${item}`} className="nav-link">
            <a href={`#${item}`} className="">
              {item}
            </a>
          </li>
        ))}
      </ul>)}


      w-[calc(100%-4.5rem)]
*/
