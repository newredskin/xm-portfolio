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
    <nav className="fixed z-50 mt-[-10px]">
      <div
        className={`relative z-20 bg-gradient-to-b from-orange-50 to-transparent to-80% ${
          isNavExpanded ? "" : "backdrop-blur-sm "
        } dark:from-gray-950 dark:to-gray-950`}
      >
        <div className="w-screen px-3 md:px-10 lg:w-screen lg:px-6 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="relative z-20 flex items-center gap-2">
              <NavLink to="/">
                <CodeBracketSquareIcon className="h-10 w-10 text-red-700" />
              </NavLink>
              <span className="text-red-700">XIYE MOU</span>
            </div>
            <div className="mr-3 flex items-center justify-end">
              <DarkModeToggle />
              <button
                className="group relative z-20 -mr-6 block cursor-pointer p-6 md:hidden"
                onClick={toggleNav}
              >
                <div
                  aria-hidden="true"
                  className={`m-auto h-0.5 w-6 rounded bg-teal-700/50 transition duration-300 group-hover:bg-teal-700 dark:bg-orange-50/50 dark:group-hover:bg-orange-50 ${
                    isNavExpanded ? "translate-y-1 rotate-45" : ""
                  }`}
                ></div>
                <div
                  aria-hidden="true"
                  className={`m-auto mt-2 h-0.5 w-6 rounded bg-teal-700/50 transition duration-300 group-hover:bg-teal-700 dark:bg-orange-50/50 dark:group-hover:bg-orange-50 ${
                    isNavExpanded ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                ></div>
              </button>

              {/* Side menu bar */}
              <div
                className={`${
                  isNavExpanded
                    ? "bg-teal-700/70 backdrop-blur-sm peer-checked:translate-x-0 sm:bg-transparent"
                    : "translate-x-[-100%] bg-transparent"
                } fixed inset-0 w-screen transition duration-300 dark:bg-gray-950/80 md:static md:w-auto  md:translate-x-0`}
              >
                <div className="flex h-full flex-col justify-between md:flex-row md:items-center">
                  <ul
                    id="menuBar"
                    className={`pl-14 pr-14 pt-20 md:pl-8 ${
                      isNavExpanded
                        ? "text-orange-100/70 dark:text-orange-100/70 sm:text-teal-700/70"
                        : "text-teal-700/70 dark:text-orange-100/70"
                    } items-center text-xl md:flex md:justify-end md:space-x-8 md:space-y-0 md:pt-0`}
                  >
                    {links.map((link) => (
                      <li
                        className={`${
                          isNavExpanded
                            ? "border-stone-100/50 py-2 transition-all duration-500 hover:cursor-pointer  hover:bg-gradient-to-r hover:from-transparent hover:via-red-700/20 hover:to-transparent dark:hover:via-orange-50/20 hover:md:via-transparent dark:hover:md:via-transparent"
                            : "py-2"
                        }`}
                        key={link.name}
                        onClick={() => {
                          localStorage.setItem("projectActiveSort", "all");
                          navigate(link.path);
                          toggleNav();
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }, 50);
                        }}
                      >
                        <NavLink
                          to={link.path}
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
