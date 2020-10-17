import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
import TextSection from "./textsection/TextSection";
import GridSection from "./gridsection/GridSection";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="aboutContainer">
      <div className="aboutTitle child">About</div>
      <GridSection className="child" />
      <TextSection className="child" />
    </div>
  );
};

export default About;
