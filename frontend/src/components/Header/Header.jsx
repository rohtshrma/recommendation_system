import React from "react";
import "./Header.css";
import bannerImg from "../images/banner-1400PX.png";
import { Button, Stack } from "@mui/material";

function Header() {
  return (
    <>
      {/* header end */}

      {/* banner start */}

      <div
        className="static-slider10 img-responsive img-fluid bg-white"
        style={{
          backgroundImage: "url(" + bannerImg + ")",
          height: "300px",
          backgroundColor: "lightgrey",
          backgroundSize: "1100px 300px",
          // boxShadow: "0 0 10px 10px grey",
          marginBottom: "30px",
          backgroundRepeat: "no-repeat",
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
        className=" title text-dark text-center font-weight-bold "
        style={{ fontSize: "35px" }}
      >
        Get Product recommendation according to your Need
      </h1>
      <h6
        className=" text-dark text-center font-weight-bold op-8 mb-5"
        style={{ fontSize: "35px" }}
      >
        What are you planning to buy?
      </h6>
      {/* <a className="btn btn-outline-light rounded-pill btn-md mt-3" href=""><span>Do you Need Help?</span></a> */}

      {/* <Grid container spacing={2}>
  <Grid  xs={2}>
    
    <Button variant="outlined">Outlined</Button>

    
  </Grid>
  <Grid  xs={2}>
    
    <Button variant="outlined">Outlined</Button>
    
  </Grid>
  <Grid  xs={2}>
    
      <Button variant="outlined">Outlined</Button>
    
  </Grid>
  <Grid  xs={2}>
    
    <Button variant="outlined">Outlined</Button>
    
  </Grid>
  <Grid    xs={2}>
    
    <Button variant="outlined">Outlined</Button>
    
  </Grid>
</Grid> */}

      <Stack spacing={2} direction="row" className="mb-3">
        <Button variant="contained">Television</Button>
        <Button variant="contained">Washing Machine</Button>
        <Button variant="contained">Micro Oven</Button>
        <Button variant="contained">Air Conditioner</Button>
        <Button variant="contained">Refrigerator</Button>
      </Stack>
    </>
  );
}

export default Header;
