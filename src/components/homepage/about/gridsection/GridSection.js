import React from "react";
import "./gridsection.css";
import record1 from "../../../../imgs/labelart/nattywickedwhite.png";
import record2 from "../../../../imgs/labelart/pathoftherighteousnessdubwhite.png";
import record3 from "../../../../imgs/labelart/vixonsoundleftbehindwhite.png";

const GridSection = () => {
  return (
    <div className="gridContainer" id="about">
      <img alt="record 1" src={record1} />

      <img alt="record 1" src={record2} />

      <img alt="record 1" src={record3} />

      <img alt="record 1" src={record1} />
    </div>
  );
};

export default GridSection;
