import { useNavigate } from "react-router-dom";
import DynamicIntroText from "../features/home/DynamicIntroText";
import TextBackground from "../features/home/TextBackground";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(function () {
    setTimeout(() => setIsButtonVisible(true), 1500);
  }, []);

  return (
    <div>
      <TextBackground />
      <div className="flex flex-col justify-center items-center h-screen gap-8 mx-16">
        <DynamicIntroText />
        <div
          className={`transition-opacity duration-1000 ${
            isButtonVisible ? "opacity-80" : "opacity-0"
          }`}
        >
          <Button handleClick={() => navigate("/about")}>About</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
