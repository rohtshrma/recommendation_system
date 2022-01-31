import React from "react";
import { Grid, Item, Stack } from "@mui/material";
import Img from "../images/Washing_machine_image.png";

function NewRecommendation() {
  return (
    <div>
      <Grid container>
        <Grid item xs={2}>
          <div style={{ height: "65%" }}>
            <h2>Product Specification</h2>
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
        <Grid item xs={2.5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "65%",
            }}
          >
            <img src={Img} alt="Fridge" width={200} />
            <p>Washing Machine</p>
            <div
              style={{
                display: "flex",
              }}
            >
              <button>Flipkart</button>
              <button>Amazon</button>
              <button>Reliance</button>
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
        <Grid item xs={2.5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "65%",
            }}
          >
            <img src={Img} alt="Fridge" width={200} />
            <p>Washing Machine</p>
            <div style={{ display: "flex" }}>
              <button>Flipkart</button>
              <button>Amazon</button>
              <button>Reliance</button>
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
        <Grid item xs={2.5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "65%",
            }}
          >
            <img src={Img} alt="Fridge" width={200} />
            <p>Washing Machine</p>
            <div style={{ display: "flex" }}>
              <button>Flipkart</button>
              <button>Amazon</button>
              <button>Reliance</button>
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
        <Grid item xs={2.5}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "65%",
            }}
          >
            <img src={Img} alt="Fridge" width={200} />
            <p>Washing Machine</p>
            <div style={{ display: "flex" }}>
              <button>Flipkart</button>
              <button>Amazon</button>
              <button>Reliance</button>
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
