import React from "react";
import "./Header.css";
import bannerImg from "../images/banner-1400PX.png";
import { Button, Stack, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      {/* header end */}

      {/* banner start */}

      <div
        className="static-slider10 img-responsive img-fluid bg-white"
        style={{
          backgroundImage: "url(" + bannerImg + ")",
          height: "300px",
          // backgroundColor: "lightgrey",
          // backgroundSize: "1100px 300px ",
          // boxShadow: "0 0 10px 10px grey",
          // marginBottom: "30px",
          backgroundRepeat: "no-repeat",
          backgroundSize: " 75% 95%",
        }}
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-12 align-self-center text-center"></div>
          </div>
        </div>
      </div>

      {/* banner end */}

      <h1
        className=" title text-dark text-center font-weight-500 "
        style={{ fontSize: "2vw" }}
      >
        Get Product recommendation according to your Need
      </h1>
      <h6
        className=" text-dark text-center font-weight-bolder op-8 "
        style={{ fontSize: "2vw" }}
      >
        What are you planning to buy?
      </h6>
      {/* <a className="btn btn-outline-light rounded-pill btn-md mt-3" href=""><span>Do you Need Help?</span></a> */}

      <Grid
        container
        spacing={-5}
        className=" mb-3 buttons_grid"
        style={{ margin: "0 0 0 2%" }}
      >
        <Grid xs={12} sm={6} md={2} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/refrigerator")}
          >
            Television
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={3} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/refrigerator")}
          >
            Washing Machine
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={2} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/refrigerator")}
          >
            Micro Oven
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={3} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/refrigerator")}
          >
            Air Conditioner
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={2} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/refrigerator")}
          >
            Refrigerator
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
