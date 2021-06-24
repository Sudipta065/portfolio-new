import React from "react";
import "../styles/header.css";
import Typical from "react-typical";
import DP from "../assets/Picture.JPG";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodepen,
} from "react-icons/all";
const Header = () => {
  return (
    <div className="header-container">
      <div className="">
        <div className="row ">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center  left-container ">
            <div className="picture-container ">
              <img src={DP} className="picture" alt="Logo" />;
            </div>{" "}
            <div className="header-name">Sudipta Adhikary</div>
          </div>
          <div className="col-md-7 right-container">
            <div className="row words-container">
              <div className="fixed-word"> I Am A </div>
              <div className="animated-word">
                <Typical
                  steps={[
                    "Web Developer",
                    1800,
                    "Front End Developer",
                    1800,
                    "ReactJS Developer",
                    1800,
                    "React Native App Developer",
                    1800,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />{" "}
              </div>
              <div>
                <a
                  href="/Sudipta_Adhikary.pdf"
                  target="_blank"
                  className="resume-btn"
                >
                  Check Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
