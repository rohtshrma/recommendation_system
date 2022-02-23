import React from "react";
import logoImg from "../images/FastRivi-logos.jpg";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navigation_class">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                <img src={logoImg} className="company_logo" alt="Logo" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
