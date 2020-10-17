import React from "react";
import "./merchpage.css";
import Merch1 from "../../imgs/merch/bikelogo.jpg";
import Merch2 from "../../imgs/merch/hifilogo.jpg";
import Merch3 from "../../imgs/merch/rizlalogo.jpg";

const MerchPage = () => {
  return (
    <div className="merchContainer">
      <div className="tc merchGrid">
        <a
          className="merchItem"
          href="https://kingshifi.bandcamp.com/merch/kings-hi-fi-rasta-bike-t-shirt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="record1" src={Merch1} /> <span>£20</span>
        </a>
        <a
          className="merchItem"
          href="https://kingshifi.bandcamp.com/merch/kings-hi-fi-black-lion-t-shirt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="record2" src={Merch2} /> <span>£20</span>
        </a>
        <a
          className="merchItem"
          href="https://kingshifi.bandcamp.com/merch/kings-hi-fi-rizla-t-shirt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="record2" src={Merch3} /> <span>£20</span>
        </a>
      </div>
    </div>
  );
};

export default MerchPage;
