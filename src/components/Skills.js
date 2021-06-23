import React from "react";
import "../styles/skills.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  FaReact,
  SiRedux,
  AiOutlineHtml5,
  DiCss3,
  SiJavascript,
  DiSass,
  SiJquery,
  FaBootstrap,
  DiGitMerge,
} from "react-icons/all";
const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="header-skill">Skills</div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="skill-section"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <div className="skill-container">
            <SiJavascript className="javascript" />
            <div className="javascript-text">JavaScript - (ES6)</div>
          </div>
          <div className="skill-container">
            <FaReact className="react" />
            <div className="react-text">ReactJS</div>
          </div>
          <div className="skill-container">
            <SiRedux className="redux" />
            <div className="redux-text">Redux</div>
          </div>
          <div className="skill-container">
            <AiOutlineHtml5 className="html" />
            <div className="html-text">HMTL5</div>
          </div>
          <div className="skill-container">
            <DiCss3 className="css" />
            <div className="css-text">CSS3</div>
          </div>
          <div className="skill-container">
            <SiJquery className="jquery" />
            <div className="jquery-text">JQuery</div>
          </div>
          <div className="skill-container">
            <DiSass className="sass" />
            <div className="sass-text">SASS</div>
          </div>

          <div className="skill-container">
            <FaBootstrap className="bootstrap" />
            <div className="bootstrap-text">Bootstrap</div>
          </div>
          <div className="skill-container">
            <DiGitMerge className="git" />
            <div className="git-text">Git</div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Skills;
