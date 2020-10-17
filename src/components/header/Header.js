import React from "react";
import Logo from "./logo/Logo";
import NavBar from "./navbar/NavBar";
import SocialBar from "./socialbar/SocialBar";
import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <Logo />
      <NavBar />
      <SocialBar />
    </div>
  );
};

export default Header;
