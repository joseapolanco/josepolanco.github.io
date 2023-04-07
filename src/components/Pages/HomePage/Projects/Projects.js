import "./Projects.css";
import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import NewProject from "./NewProject";

export default function Projects() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const projects = [
    {
      title: "Campground",
      imageUrl: "/personal-site/images/campground.png",
      description:
        "Campground website that enabled customers to easily manage their reservations and profile information through a user-friendly interface that included reservation editing, payment processing, and notifications. Also implemented admin controls for employees to view reservations, send payment reminders, and make edits as necessary. ",
      demo: "",
    },
    {
      title: "Passhub",
      imageUrl: "/personal-site/images/passhub.png",
      description:
        "Developed a mobile app that simplifies managing online accounts. With a friendly interface, users can easily create an account, save their email, username, and password, and access them later. The app also includes a password generator and autofill feature, making logging into websites a breeze.",
      demo: "https://appetize.io/app/4fvrkogse3j5cnxie7tcclbugq?device=galaxytabs7&osVersion=11.0&scale=75&deviceColor=black",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const interval = 30000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) =>
        currentIndex === projects.length - 1 ? 0 : currentIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [projects, interval]);

  const handleLeftArrow = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    );
  };

  const handleRightArrow = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <React.Fragment>
      <div className="projects__title section__title">
        <p>Personal Projects</p>
      </div>
      <div className="projects__body">
        <div className="left___arrow" onClick={handleLeftArrow}>
          <AiOutlineLeft className="arrow__icon" />
        </div>
        <div className="newproject__slideshow">
          {projects.map((project, index) => (
            <NewProject
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              descClassName={`${isHovered ? "hovered" : ""}`}
              mouseEntered={handleMouseEnter}
              mouseLeft={handleMouseLeave}
              demoLink={project.demo}
            />
          ))}
        </div>
        <div className="right___arrow" onClick={handleRightArrow}>
          <AiOutlineRight className="arrow__icon" />
        </div>
      </div>
    </React.Fragment>
  );
}
