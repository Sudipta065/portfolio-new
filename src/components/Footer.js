import React from "react";
import "../styles/footer.css";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodepen,
} from "react-icons/all";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container d-flex align-items-center flex-column ">
        <div className="social-icons-container d-flex justify-content-center align-items-center">
          <a
            href={"https://github.com/Sudipta065"}
            target="_blank"
            className="social-icons"
          >
            <AiFillGithub size={50} />
          </a>

          <a
            href={"www.linkedin.com/in/sudipta-adhikary-null"}
            target="_blank"
            className="social-icons"
          >
            <AiFillLinkedin size={50} />
          </a>

          <a
            href={"https://codepen.io/sudipta065"}
            target="_blank"
            className="social-icons"
          >
            <AiOutlineCodepen size={50} />
          </a>
        </div>

        <div className="footer-text">All rights reserved. Sudipta ©2021</div>
      </div>
    </div>
  );
};

export default Footer;
