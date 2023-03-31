import "./About.css";
import React, { useState, useEffect } from "react";

export default function About() {
  const [index, setIndex] = useState(0);

  const images = [
    "/personal-site/images/anime.jpg",
    "/personal-site/images/gaming.avif",
    "/personal-site/images/nyg.png",
    "/personal-site/images/wrx.png",
  ];

  // function to change the image index
  const changeImage = () => {
    setIndex((index + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <React.Fragment>
      <div className="about__title">
        <p>About Me</p>
      </div>
      <div className="about__body">
        <div className="body__desc">
          <p>
            Hey, I'm Jose Polanco, a recent graduate of Bloomsburg University
            with a degree in Computer Science. I'm a Full-Stack Developer with a
            passion for solving complex problems and bringing ideas to life.
          </p>
          <p>
            Interested in all fields of development. Currently focusing on a
            budgeting service that integrates AI for personalized financial
            planning and advice.{" "}
          </p>
          <p>
            My interests outside of work include following sports, cars, gaming
            and watching anime.
          </p>
        </div>
        <div className="body__img">
          {images.map((image, i) => (
            <img
              key={i}
              className={`about__img ${index === i ? "active-img" : ""}`}
              src={image}
              alt=""
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
