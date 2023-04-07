import "./Skills.css";
import React from "react";
import { FaReact, FaJava, FaAngular, FaFigma } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import NewSkill from "./NewSkill";

export default function Skills() {
  return (
    <React.Fragment>
      <div className="skills__title section__title">
        <p>Skills</p>
      </div>
      <div className="skills__body">
        <div className="skills__body_background">
          <div className="skills__body__section">
            <NewSkill>
              <FaReact />
              <span>React</span>
            </NewSkill>
            <NewSkill>
              <FaJava />
              <span>Java</span>
            </NewSkill>
            <NewSkill>
              <SiJavascript />
              <span>Javascript</span>
            </NewSkill>
            <NewSkill>
              <GrMysql />
              <span>MySQL</span>
            </NewSkill>
          </div>
          <div className="skills__body__section">
            <NewSkill>
              <SiMongodb />
              <span>MongoDB</span>
            </NewSkill>
            <NewSkill>
              <FaAngular />
              <span>Angular</span>
            </NewSkill>
            <NewSkill>
              <SiTypescript />
              <span>Typescript</span>
            </NewSkill>
            <NewSkill>
              <FaFigma />
              <span>Figma</span>
            </NewSkill>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
