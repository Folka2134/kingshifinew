import React from "react";
import "./cover.css";
import Banner2 from "../../../imgs/banner7.jpg";
import Banner3 from "../../../imgs/banner5.jpg";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Cover = () => {
  return (
    <div className="tc coverContainer">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
        className="slider"
        buttons={false}
        organicArrows={false}
        bullets={false}
        // fillParent={true}
      >
        <div>
          <img alt="banner1" src={Banner3} />
        </div>
        <div>
          <img alt="banner2" src={Banner3} />
        </div>
        <div>
          <img alt="banner3" src={Banner2} />
        </div>
      </AutoplaySlider>
    </div>
  );
};

export default Cover;
