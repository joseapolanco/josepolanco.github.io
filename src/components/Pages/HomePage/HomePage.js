import About from "./About/About";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import "./HomePage.css";
import Intro from "./Intro/Intro";
import Navbar from "./NavBar/Navbar";
import Projects from "./Projects/Projects";
import SectionContainer from "./SectionContainer/SectionContainer";
import Skills from "./Skills/Skills";
import { useState, useEffect, useRef } from "react";
import debounce from "lodash.debounce";

const sections = [
  {
    id: "intro_section",
    className: "intro__container",
    component: <Intro />,
  },
  {
    id: "about_section",
    className: "about__container",
    component: <About />,
  },
  {
    id: "skills_section",
    className: "skills__container",
    component: <Skills />,
  },
  {
    id: "experience_section",
    className: "experience__container",
    component: <Experience />,
  },
  {
    id: "projects_section",
    className: "projects__container",
    component: <Projects />,
  },
];

function HomePage() {
  const [isSticky, setIsSticky] = useState(false);
  const [observer, setObserver] = useState(null);

  const [introVisible, setIntroVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const myDivRef = useRef(null);

  const handleScroll = () => {
    setIsSticky(myDivRef.current.scrollTop > 5);
  };

  const handleIntersect = debounce((entries) => {
    console.log("DEBOUNCED");
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // console.log(`Section ${entry.target.id} is visible`);
        if (entry.target.id === "about_section") {
          setAboutVisible(true);
        } else if (entry.target.id === "skills_section") {
          setSkillsVisible(true);
        } else if (entry.target.id === "intro_section") {
          setIntroVisible(true);
        } else if (entry.target.id === "experience_section") {
          setExperienceVisible(true);
        } else if (entry.target.id === "projects_section") {
          setProjectsVisible(true);
        }
      } else {
        if (entry.target.id === "about_section") {
          setAboutVisible(false);
        } else if (entry.target.id === "skills_section") {
          setSkillsVisible(false);
        } else if (entry.target.id === "intro_section") {
          setIntroVisible(false);
        } else if (entry.target.id === "experience_section") {
          setExperienceVisible(false);
        } else if (entry.target.id === "projects_section") {
          setProjectsVisible(false);
        }
      }
    });
  }, 500);

  useEffect(() => {
    const myDiv = myDivRef.current;
    myDiv.addEventListener("scroll", handleScroll);
    return () => myDiv.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: myDivRef.current,
      rootMargin: "0px 0px 0px 150%", // top, right, bottom, left,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    setObserver(observer);
  }, []);

  useEffect(() => {
    if (observer) {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        observer.observe(element);
      });
    }
  }, [observer]);

  return (
    <div className="wrapper" ref={myDivRef}>
      <Navbar className={isSticky ? "sticky" : ""} />
      {sections.map(({ id, className, component }) => (
        <SectionContainer
          id={id}
          className={`${className} ${
            id === "intro_section"
              ? introVisible
                ? "visible"
                : "hidden"
              : id === "about_section"
              ? aboutVisible
                ? "visible"
                : "hidden"
              : id === "skills_section"
              ? skillsVisible
                ? "visible"
                : "hidden"
              : id === "experience_section"
              ? experienceVisible
                ? "visible"
                : "hidden"
              : id === "projects_section"
              ? projectsVisible
                ? "visible"
                : "hidden"
              : ""
          }`}
          key={id}
        >
          {component}
        </SectionContainer>
      ))}
      <Footer />
    </div>
  );
}

export default HomePage;
