import React from "react";
import "./homepage.css";
import Cover from "./cover/Cover";
import About from "./about/About";
import Rig from "./rig/Rig";

const HomePage = () => {
  return (
    <div className="mainContainer">
      <Cover />
      <About />
      <Rig />
    </div>
  );
};

export default HomePage;
