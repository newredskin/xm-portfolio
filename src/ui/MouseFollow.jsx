import { useEffect, useState } from "react";

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

export default MouseFollow;
