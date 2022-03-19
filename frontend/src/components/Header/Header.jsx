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

      <h1 className="heading_text title text-dark text-center font-weight-500">
        Get Product recommendation according to your Need
      </h1>
      <h6 className="heading_text text-dark text-center font-weight-bolder op-8">
        What are you planning to buy?
      </h6>
      {/* <a className="btn btn-outline-light rounded-pill btn-md mt-3" href=""><span>Do you Need Help?</span></a> */}

      <Grid
        container
        spacing={-5}
        className=" mb-3 buttons_grid"
        style={{ margin: "0 0 0 2%" }}
      >
        <Grid md={1}></Grid>
        <Grid xs={12} sm={6} md={2} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/tv")}
          >
            Television
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={2} className="btn_cont ">
          <Button
            variant="contained"
            className="btn-classes "
            onClick={() => navigate("/question/washingmachine")}
          >
            Washing Machine
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={2} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/microwave")}
          >
            Microwave Oven
          </Button>
        </Grid>
        <Grid xs={12} sm={6} md={2} className="btn_cont">
          <Button
            variant="contained"
            className="btn-classes"
            onClick={() => navigate("/question/ac")}
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
        <Grid md={1}></Grid>
      </Grid>
    </>
  );
}

export default Header;
