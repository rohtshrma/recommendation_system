import React from "react";
import "./Header.css";
import logoImg from "../images/FastRivi-logos.jpeg";
import bannerImg from "../images/main-banner-4.png"

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      

        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" style={{backgroundColor: "#f8f9fa"}} href="#">
                <img src={logoImg} className="company_logo"  alt="Logo" />
              </a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="#">
          FastRivi
        </a>
      </nav>

      {/* header end */}

      {/* banner start */}

      <div
        className="static-slider10"
        style={{
          backgroundImage: "linear-gradient(to right, #4880EC, red)",
          width: "100vw",
        }}
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-12 align-self-center text-center">
            <img src={bannerImg}  className="bannerImage" alt="bannerImg"/>
              {/* <span className="badge rounded-pill badge-inverse text-white font-weight-light px-3 py-1">Creating Brands</span> */}
              <h1 className=" title text-white " style={{ fontSize: "35px", fontFamily:" 'Sedgwick Ave', cursive" }}>
                Get Product recommendation according to your Need
              </h1>
              <h6
                className="text-white font-weight-normal op-8"
                style={{ fontSize: "35px", fontFamily:" 'Sedgwick Ave', cursive" }}
              >
                What are you planning to buy?
              </h6>
              {/* <a className="btn btn-outline-light rounded-pill btn-md mt-3" href=""><span>Do you Need Help?</span></a> */}
            </div>
          </div>
        </div>
      </div>

      {/* banner end */}
    </>
  );
}

export default Header;
