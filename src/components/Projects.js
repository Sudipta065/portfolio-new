import React from "react";
import "../styles/project.css";
import resort from "../assets/resort.jpg";
import natours from "../assets/natours.jpg";
import phoneApp from "../assets/phone-app.jpg";
import wiki from "../assets/wiki.jpg";
import weather from "../assets/weather.jpg";
import corona from "../assets/corona.jpg";
import { Grid, Segment } from "semantic-ui-react";
const Projects = () => {
  return (
    <>
      <div className="projects-container">
        {" "}
        <div className="header-project">Projects</div>
        <div className="project-container">
          <div className="project-row d-flex">
            <div>
              <div class="card ">
                <img src={resort} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">
                    {" "}
                    <a
                      href={"https://github.com/Sudipta065"}
                      target="_blank"
                      className="project-btn"
                    >
                      Resort Booking App
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            <div>
              {" "}
              <div class="card ">
                <img src={phoneApp} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">
                    <a
                      href={"https://github.com/Sudipta065"}
                      target="_blank"
                      className="project-btn"
                    >
                      E-Commerce Phone Store
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card ">
                <img src={corona} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">
                    {" "}
                    <a
                      href={"https://github.com/Sudipta065"}
                      target="_blank"
                      className="project-btn"
                    >
                      Corona Virus Update
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="project-row d-flex">
            <div>
              <div class="card ">
                <img src={wiki} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">
                    {" "}
                    <a
                      href={"https://github.com/Sudipta065"}
                      target="_blank"
                      className="project-btn"
                    >
                      Wikipedia Viewer
                    </a>
                  </h5>
                </div>
              </div>
            </div>

            <div>
              {" "}
              <div class="card ">
                <img src={natours} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">
                    <a
                      href={"https://github.com/Sudipta065"}
                      target="_blank"
                      className="project-btn"
                    >
                      Natours
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="card ">
                <img src={weather} class="card-img" alt="..." />
                <div class="card-img-overlay">
                  <h5 class="card-title">
                    {" "}
                    <a
                      href={"https://github.com/Sudipta065"}
                      target="_blank"
                      className="project-btn"
                    >
                      Local Weather Update
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
