import { NavLink, useNavigate } from "react-router-dom";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import DarkModeToggle from "./DarkModeToggle";

function NavBar({ isNavExpanded, setIsNavExpanded }) {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();

  function toggleNav() {
    setIsNavExpanded((e) => !e);
  }

  return (
    <nav className="fixed z-50">
      <div className="relative z-20 bg-teal-950 dark:bg-gray-900">
        <div className="px-3 md:px-10 lg:w-screen lg:px-6 lg:py-4 w-screen">
          <div className="flex items-center justify-between">
            <div className="flex relative z-20 items-center gap-2">
              <NavLink to="/">
                <CodeBracketSquareIcon className="w-10 h-10 text-red-700" />
              </NavLink>
              <span className="text-stone-200">XIYE MOU</span>
            </div>
            <div className="flex items-center justify-end mr-3">
              <DarkModeToggle />
              <button
                className="relative z-20 -mr-6 block cursor-pointer p-6 md:hidden"
                onClick={toggleNav}
              >
                <div
                  aria-hidden="true"
                  className={`m-auto h-0.5 w-6 rounded bg-stone-300 transition duration-300 ${
                    isNavExpanded ? "rotate-45 translate-y-1" : ""
                  }`}
                ></div>
                <div
                  aria-hidden="true"
                  className={`m-auto mt-2 h-0.5 w-6 rounded bg-stone-300 transition duration-300 ${
                    isNavExpanded ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></div>
              </button>

              {/* Side menu bar */}
              <div
                className={`${
                  isNavExpanded
                    ? "peer-checked:translate-x-0 backdrop-blur-sm"
                    : "translate-x-[-100%] backdrop-blur-0"
                } fixed inset-0 w-screen transition duration-300 md:static md:w-auto md:translate-x-0 bg-teal-950/80 dark:bg-gray-900/80`}
              >
                <div className="flex h-full flex-col justify-between md:flex-row md:items-center">
                  <ul
                    id="menuBar"
                    className="md:pl-8 pl-14 pr-14 pt-20 text-stone-200 text-xl md:flex md:space-x-8 md:space-y-0 md:pt-0 md:justify-end items-center"
                  >
                    {links.map((link) => (
                      <li
                        className={`${
                          isNavExpanded
                            ? "hover:cursor-pointer py-3 hover:bg-gradient-to-r hover:from-transparent hover:via-orange-50/20  hover:md:via-transparent hover:to-transparent transition-all duration-500 border-stone-100/50"
                            : "sm:py-5 lg:py-1"
                        }`}
                        key={link.name}
                        onClick={() => {
                          localStorage.setItem("projectActiveSort", "all");
                          navigate(link.path);
                          toggleNav();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={
                            isNavExpanded
                              ? null
                              : () =>
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  })
                          }
                          className={`${({ isActive }) =>
                            isActive
                              ? "active"
                              : "non-active"}} group relative before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:origin-right before:scale-x-0 before:bg-red-700 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100`}
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
