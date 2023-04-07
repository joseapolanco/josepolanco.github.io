/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import { useState } from "react";

export default function Navbar(props) {
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const windowWidth = window.innerWidth;

  console.log(windowWidth);

  const handleClick = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" }); // use 'start' to align the element to the top of the container
    setIsHamburgerMenu(false);
  };

  const handleHamburger = () => {
    setIsHamburgerMenu(!isHamburgerMenu);
  };

  return (
    <nav
      className={`navbar__container ${
        windowWidth > 768 ? props.className : ""
      }`}
    >
      <div
        className={`hamburger__menu ${isHamburgerMenu ? "menu__x" : ""}`}
        onClick={handleHamburger}
      >
        <input type="checkbox" />
      </div>
      <div className="navbar__logo">JP_</div>
      {isHamburgerMenu ? <div className="menu__backdrop"></div> : ""}
      <ul className={`navbar__list ${isHamburgerMenu ? "open" : ""}`}>
        <li>
          <a href="#" onClick={(event) => handleClick(event, "about_section")}>
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
