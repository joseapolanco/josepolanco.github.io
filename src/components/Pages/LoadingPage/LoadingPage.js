import "./LoadingPage.css";
import Loading from "./Loading/Loading";
import CircleContainer from "./CircleContainer/CircleContainer";

function LoadingPage(props) {
  return (
    <div className={`loading_page ${props.className}`}>
      <CircleContainer></CircleContainer>
      <Loading></Loading>
    </div>
  );
}

export default LoadingPage;
