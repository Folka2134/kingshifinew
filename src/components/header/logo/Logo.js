import React from "react";
import "./logo.css";
import kingshifiLogo1 from "../../../imgs/kingshifilogo5.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className="logoContainer" exact to="/KingsHifi/home">
      <img alt="kingshifi Logo" src={kingshifiLogo1} />
    </NavLink>
  );
};

export default Logo;
