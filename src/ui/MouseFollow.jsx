import { useEffect, useState } from "react";

function MouseFollow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isWideScreen, setIsWideScreen] = useState(
    () => window.innerWidth > 1024
  );

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

    function checkScreenSize() {
      setIsWideScreen(window.innerWidth > 1024);
    }

    addEventListeners();
    checkScreenSize();
    return () => removeEventListeners();
  }, []);

  if (!isWideScreen) return null;

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

/*

function MouseFollow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(function () {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="bg-teal-400/5 rounded-full w-[30rem] h-[30rem] blur-3xl -z-50"
      style={{
        position: "fixed",
        top: position.y - 240 + "px",
        left: position.x - 240 + "px",
      }}
    ></div>
  );
}



*/
