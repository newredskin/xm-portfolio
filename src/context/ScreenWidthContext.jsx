import { createContext, useContext, useEffect, useState } from "react";

const ScreenWidthContext = createContext();

function ScreenWidthProvider({ children }) {
  const [isWideScreen, setIsWideScreen] = useState(
    () => window.innerWidth >= 1024
  );
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 640);

  useEffect(
    function () {
      checkScreenSize();
    },
    [isWideScreen, isMobile]
  );

  function checkScreenSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024) {
      setIsWideScreen(true);
      setIsMobile(false);
    } else if (windowWidth <= 640) {
      setIsWideScreen(false);
      setIsMobile(true);
    }
  }

  return (
    <ScreenWidthContext.Provider
      value={{
        checkScreenSize,
        isMobile,
        isWideScreen,
      }}
    >
      {children}
    </ScreenWidthContext.Provider>
  );
}

function useScreenWidth() {
  const context = useContext(ScreenWidthContext);
  if (context === undefined)
    throw new Error(
      "ScreenWidthContext was used outside of ScreenWidthProvider"
    );
  return context;
}

export { ScreenWidthProvider, useScreenWidth };
