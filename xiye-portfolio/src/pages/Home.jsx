import { useNavigate } from "react-router-dom";
import DynamicIntroText from "../features/home/DynamicIntroText";
import TextBackground from "../features/home/TextBackground";
import Button from "../ui/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <DynamicIntroText />
        <div className="absolute top-[60%] left-[45%] ">
          <Button handleClick={() => navigate("/about")}>About</Button>
        </div>
      </div>
      <TextBackground />
    </div>
  );
}

export default Home;
