import InnerHalfCircle from "../InnerHalfCircle/InnerHalfCircle";
import "./HalfCircle.css";

function HalfCircle(props) {
  return (
    <div className={`half-circle ${props.className}`}>
      <svg class="half-circle-svg" viewBox="0 0 215 450">
        <circle class="half-circle-circle"></circle>
      </svg>
      <InnerHalfCircle></InnerHalfCircle>
    </div>
  );
}

export default HalfCircle;
