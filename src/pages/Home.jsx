import { useNavigate } from "react-router-dom";
import DynamicIntroText from "../features/home/DynamicIntroText";
import TextBackground from "../features/home/TextBackground";
import Button from "../ui/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <TextBackground />
      <div className="flex flex-col justify-center items-center h-screen gap-8 mx-16">
        <DynamicIntroText />
        <div>
          <Button handleClick={() => navigate("/about")}>About</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
