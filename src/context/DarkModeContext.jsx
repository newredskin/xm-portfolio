import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });

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
    },
    [isDarkMode]
  );

  useEffect(
    function () {
      localStorage.setItem("darkMode", isDarkMode);
    },
    [isDarkMode, toggleDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((d) => !d);
  }

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
