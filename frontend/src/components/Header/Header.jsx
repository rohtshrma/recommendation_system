import React from "react";
import "./Header.css";
import logoImg from "../images/FastRivi-logos.jpg";
import bannerImg from "../images/banner-1400PX.png";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



// import bannerImg2 from "../images/main-banner-5.png"

function Header() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <nav className="navbar navbar-expand-lg navigation_class">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a
                className="nav-link"
                // style={{ backgroundColor: "#f8f9fa" }}
                href="#"
              >
                <img src={logoImg} className="company_logo" alt="Logo" />
              </a>
            </li>
          </ul>
        </div>
        {/* <a className="navbar-brand" href="#">
          FastRivi
        </a> */}
      </nav>

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
    

      <Grid container spacing={4} className=" mb-3" style={{margin:"0 9%"}} >
  <Grid  xs={2} >
    
    <Button variant="contained" className="btn-classes"  >Television</Button>

    
  </Grid>
  <Grid  xs={2} >
   
    <Button variant="contained" className="btn-classes" >Washing Machine</Button>
    
  </Grid>
  <Grid  xs={2}>
    
      <Button variant="contained" className="btn-classes" >Micro Oven</Button>
    
  </Grid>
  <Grid  xs={2}>
    
    <Button variant="contained" className="btn-classes" >Air Conditioner</Button>
    
  </Grid>
  <Grid    xs={2}>
    
    <Button variant="contained" className="btn-classes" >Refrigerator</Button>
    
  </Grid>
</Grid>


{/* <Stack spacing={2} direction="row" className="mb-3">
      <Button variant="contained">Television</Button>
      <Button variant="contained">Washing Machine</Button>
      <Button variant="contained">Micro Oven</Button>
      <Button variant="contained">Air Conditioner</Button>
      <Button variant="contained">Refrigerator</Button>
    </Stack> */}



    </>
  );
}

export default Header;
