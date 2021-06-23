import React from "react";
import "../styles/footer.css";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodepen,
} from "react-icons/all";
const Footer = () => {
  return (
    <div className="header-container">
      <div className="container">
        <div className="social-icons-container d-flex justify-content-center align-items-center">
          <a
            href={"https://github.com/Sudipta065"}
            target="_blank"
            className="social-icons"
          >
            <AiFillGithub size={30} />
          </a>

          <a
            href={"www.linkedin.com/in/sudipta-adhikary-null"}
            target="_blank"
            className="social-icons"
          >
            <AiFillLinkedin size={30} />
          </a>

          <a
            href={"https://codepen.io/sudipta065"}
            target="_blank"
            className="social-icons"
          >
            <AiOutlineCodepen size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
