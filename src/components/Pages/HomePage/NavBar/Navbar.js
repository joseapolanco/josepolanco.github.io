/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";

export default function Navbar(props) {
  const handleClick = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" }); // use 'start' to align the element to the top of the container
  };
  return (
    <nav className={`navbar__container ${props.className}`}>
      <div className="navbar__logo">JP_</div>
      <ul className="navbar__list">
        <li>
          <a href="#" onClick={(event) => handleClick(event, "about_section")}>
            {" "}
            &#47;&#47; About
          </a>
        </li>
        <li>
          <a href="#" onClick={(event) => handleClick(event, "skills_section")}>
            &#47;&#47; Skills
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClick(event, "experience_section")}
          >
            &#47;&#47; Experience
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={(event) => handleClick(event, "projects_section")}
          >
            &#47;&#47; Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
