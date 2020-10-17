import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navBar ">
      <ul className="navList topBotomBordersOut">
        <li className="navItem">
          <NavLink
            className="navLink topBotomBordersOut"
            exact
            to="/KingsHifi/music"
          >
            MUSIC
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            className="navLink topBotomBordersOut"
            exact
            to="/KingsHifi/merch"
          >
            MERCH
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink
            className="navLink topBotomBordersOut"
            exact
            to="/KingsHifi/events"
          >
            EVENTS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
