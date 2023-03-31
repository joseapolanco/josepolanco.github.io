import "./CircleContainer.css";
import OuterCircle from "./OuterCircle/OuterCircle";
import HalfCircle from "./HalfCircle/HalfCircle";
import CenterCircle from "./CenterCircle/CenterCircle";

function CircleContainer() {
  return (
    <div class="container">
      <OuterCircle></OuterCircle>
      <HalfCircle className=""></HalfCircle>
      <HalfCircle className="rotate nofill"></HalfCircle>
      <CenterCircle></CenterCircle>
    </div>
  );
}

export default CircleContainer;
