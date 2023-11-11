import { useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { useScreenWidth } from "../context/ScreenWidthContext";

function MouseFollow() {
  const { isDarkMode } = useDarkMode();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const { isWideScreen, checkScreenSize } = useScreenWidth();

  useEffect(function () {
    function addEventListeners() {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", checkScreenSize);
    }

    function removeEventListeners() {
      window.removeEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", checkScreenSize);
    }

    function onMouseMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    addEventListeners();
    checkScreenSize();
    return () => removeEventListeners();
  }, []);

  if (!isWideScreen || !isDarkMode) return null;

  return (
    <div
      className="fixed left-0 top-0 z-50 pointer-events-none w-6 h-6 rounded-full shadow-lg transform -translate-x-1/2 -translate-y-1/2"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
        boxShadow: "0 0 150px 150px rgba(255, 255, 255, 0.05)",
        backgroundColor: "rgba(255, 247, 237, 0.05)",
      }}
    ></div>
  );
}

export default MouseFollow;
