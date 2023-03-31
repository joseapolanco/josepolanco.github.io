import "./SectionContainer.css";

export default function SectionContainer(props) {
  return (
    <div id={props.id} className={`section__background ${props.className}`}>
      {props.children}
    </div>
  );
}
