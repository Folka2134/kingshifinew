import React from "react";
import "./footer.css";
// import Contact from "./contact/Contact";
// import Copywrite from "./copywrite/Copywrite";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="contactContainer">
        <p>
          <u>Contact</u>
          <br /> info@kingshifi.com
        </p>
      </div>
      <div className="copywriteContainer">
        <p>© 2020 Copyright KingsHifi. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
