import "./NewProject.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function NewProject(props) {
  return (
    <div
      className={`${props.className}`}
      onMouseEnter={props.mouseEntered}
      onMouseLeave={props.mouseLeft}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className={`project__desc ${props.descClassName}`}>
        {props.description.split("\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        {props.demoLink === "" ? (
          ""
        ) : (
          <a
            className="demo__icon"
            href={props.demoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Give It a Try!
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  );
}
