import "./Experience.css";
import React from "react";

export default function Experience() {
  return (
    <React.Fragment>
      <div className="experience__title">
        <p>Work Experience</p>
      </div>
      <div className="experience__body">
        <div className="company__name">
          <span>Deloitte</span>
        </div>
        <div className="company__work__info">
          <div className="company__position">
            <span>Solutions Analyst</span>
            <a
              href="https://www2.deloitte.com/us/en.html"
              target="_blank"
              rel="noreferrer"
            >
              @Deloitte
            </a>
          </div>
          <div className="company__tenure">
            <span>June 2022 - Present</span>
          </div>
          <div className="company__work__desc">
            <ul>
              <li>
                Translated business and design objectives to technical
                requirements to ensure solutions met client needs and
                expectations.
              </li>
              <li>
                Utilized data, analytics assets, statistical methods and
                technologies to help clients make informed business decisions,
                providing actionable insights that improved business
                performance.
              </li>
              <li>
                Analyzed client data, collaborated with subject matter experts,
                and utilized data analytics tools to provide recommendations on
                improvement opportunities.
              </li>
              <li>
                Designed, developed, implemented, and maintained technology
                applications, ensuring their stability, scalability, and
                security throughout their lifecycle.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
