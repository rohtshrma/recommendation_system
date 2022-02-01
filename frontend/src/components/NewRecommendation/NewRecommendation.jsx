import React from "react";
import { Grid, Item, Stack } from "@mui/material";
import Img from "../images/Washing_machine_image.png";
import Button from "@mui/material/Button";

function NewRecommendation() {
  return (
    <div>
      <Grid container>

      <Grid item xs={12}>
        <h1 className="text-center mb-5">All Best Recommendations For You</h1>
      </Grid>
</Grid>

      <Grid container  >
        <Grid item xs={2} style={{ paddingBottom:"70px"}} >
          <div style={{ height: "55%" }}><br/>
          <br/><br/><br/><br/>
            <h2 style={{textAlign:"center"}}>Product Specification</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Value for money</p>
            <p>Brand</p>
            <p>Popular</p>
            <p>After Sales</p>
            <p>Price</p>
            <p>Overall Score</p>
          </div>
        </Grid>
        <Grid item xs={2.5} style={{border:"2px solid black", paddingBottom:"50px"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "55%",
            }}
          >
            <img src={Img} alt="Fridge" width={150} />
            <p>Washing Machine</p>
            <div
              style={{
                display: "flex",
              }}
            >
              <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Flipkart</Button>
              <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Amazon</Button>
              <Button  style={{border:"2px solid grey", borderRadius:"10px"}}>Reliance</Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>30</p>
            <p>10</p>
            <p>100</p>
            <p>20</p>
            <p>30</p>
            <p>30</p>
          </div>
        </Grid>
        <Grid item xs={2.5} style={{border:"2px solid black", paddingBottom:"50px"}}  >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "55%",
            }}
          >
            <img src={Img} alt="Fridge" width={150} />
            <p>Washing Machine</p>
            <div style={{ display: "flex" }}>
            <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Flipkart</Button>
              <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Amazon</Button>
              <Button  style={{border:"2px solid grey", borderRadius:"10px"}}>Reliance</Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>30</p>
            <p>10</p>
            <p>100</p>
            <p>20</p>
            <p>30</p>
            <p>30</p>
          </div>
        </Grid>
        <Grid item xs={2.5} style={{border:"2px solid black", paddingBottom:"50px"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "55%",
            }}
          >
            <img src={Img} alt="Fridge" width={150} />
            <p>Washing Machine</p>
            <div style={{ display: "flex" }}>
            <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Flipkart</Button>
              <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Amazon</Button>
              <Button  style={{border:"2px solid grey", borderRadius:"10px"}}>Reliance</Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>30</p>
            <p>10</p>
            <p>100</p>
            <p>20</p>
            <p>30</p>
            <p>30</p>
          </div>
        </Grid>
        <Grid item xs={2.5} style={{border:"2px solid black", paddingBottom:"50px"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "55%",
            }}
          >
            <img src={Img} alt="Fridge" width={150} />
            <p>Washing Machine</p>
            <div style={{ display: "flex" }}>
            <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Flipkart</Button>
              <Button style={{border:"2px solid grey", borderRadius:"10px",marginRight:"2px"}}>Amazon</Button>
              <Button  style={{border:"2px solid grey", borderRadius:"10px"}}>Reliance</Button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>30</p>
            <p>10</p>
            <p>100</p>
            <p>20</p>
            <p>30</p>
            <p>30</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewRecommendation;
