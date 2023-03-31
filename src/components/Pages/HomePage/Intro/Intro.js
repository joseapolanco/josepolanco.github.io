import "./Intro.css";
import React from "react";

export default function Intro() {
  return (
    <React.Fragment>
      <div className="intro__text">
        <p className="name">Jose Polanco</p>
        <p className="desc">
          <span className="white"> A </span> Developer
          <span className="white"> Working To Overcome </span> Impostor Syndrome
        </p>
      </div>
      <div className="intro__image">
        <img src="/cartoon.png" alt="" />
      </div>
    </React.Fragment>
  );
}
