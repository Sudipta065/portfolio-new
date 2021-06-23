import React from "react";
import "../styles/experience.css";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/all";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import * as experienceData from "../assets/experienceData.json";
const Experience = () => {
  const experiences = experienceData.data;
  return (
    <>
      <div className="experiences-container">
        {" "}
        <div className="header-experience">Work Experiences</div>
        <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: " #91C788",
                color: "#206A5D",
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}
              contentArrowStyle={{ borderRight: "7px solid  #91C788" }}
              date={experience.date}
              iconStyle={{ background: "#FEFFDE", color: "#206A5D" }}
              key={experience.key}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {experience.position}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.company}
              </h4>
              <ul>
                {experience.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
              <div style={{ textAlign: "center" }}>
                <a
                  className="companyLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={experience.link}
                >
                  Visit Company
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
