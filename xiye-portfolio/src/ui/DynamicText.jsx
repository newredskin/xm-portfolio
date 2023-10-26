import { useEffect, useRef } from "react";
import Typed from "typed.js";

function DynamicText({ content, style }) {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(
    function () {
      const texts = {
        strings: [...content],
        smartBackspace: true,
        typeSpeed: 50,
        backSpeed: 15,
      };

      typed.current = new Typed(el.current, texts);

      return () => {
        typed.current.destroy();
      };
    },
    [content]
  );

  return (
    <div className={`inline-block ${style}`}>
      <span ref={el} />
    </div>
  );
}

export default DynamicText;
