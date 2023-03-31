import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__icons">
        <div className="footer__line left__line"></div>
        <a
          className="linkedIn"
          href="https://www.linkedin.com/in/polancoajose/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className="gitHub"
          href="https://github.com/joseapolanco"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <div className="footer__line right__line"></div>
      </div>
      <div className="footer__text">
        Designed & Developed by Jose Polanco 2023
      </div>
    </div>
  );
}
