import logoImg from "../images/FastRivi-logos.jpg";
import "./Navbar.css";
import { NavLink, Route } from "react-router-dom";
import React, { useState } from "react";
import Button from "./Button";
import menuItems from "./MenuItems";

function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navigation_class">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <img src={logoImg} className="company_logo" alt="Logo" />
              </a>
              
            </li>
          </ul>
        </div>
      </nav> */}
      <nav className="navbar">
        <h1 className="navbar-logo">
          <a href="/">
            <img src={logoImg} className="company_logo" alt="Logo" />
          </a>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
