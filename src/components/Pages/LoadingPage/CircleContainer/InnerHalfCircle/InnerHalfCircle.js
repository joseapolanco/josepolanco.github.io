import "./InnerHalfCircle.css";

function InnerHalfCircle(props) {
  return (
    <div className={`inner-hc`}>
      <svg class="inner-hc-svg" viewBox="0 0 200 375">
        <circle class="inner-hc-circle"></circle>
      </svg>
    </div>
  );
}

export default InnerHalfCircle;
