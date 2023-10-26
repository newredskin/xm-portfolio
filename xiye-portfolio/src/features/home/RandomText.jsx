import { useEffect, useState } from "react";

function RandomText() {
  const [texts, setTexts] = useState([]);

  useEffect(function () {
    function generateRandomText() {
      const newText = {
        text: generateRandomString(Math.floor(Math.random() * 200) + 30),
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
      };
      setTexts((preTexts) => [...preTexts, newText]);
    }

    setInterval(generateRandomText, 50);

    return () => clearInterval(generateRandomText);
  }, []);

  function generateRandomString(length) {
    let result = "";
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars.charAt(randomIndex);
    }
    return result;
  }

  return (
    <div
      id="random-text-container"
      className="fixed top-0 left-0 w-screen h-screen overflow-hidden -z-10"
    >
      {texts.map((text, index) => (
        <div
          key={index}
          className="random-text"
          style={{ top: text.top, left: text.left }}
        >
          {text.text}
        </div>
      ))}
    </div>
  );
}

export default RandomText;
