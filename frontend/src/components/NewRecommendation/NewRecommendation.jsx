import React, { useState, useEffect, useContext } from "react";
import { Grid, Item, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { QuestionContext } from "../../globalContext/globalState";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./NewRecommendation.css";
import useStyles from "./style.js";

function NewRecommendation() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { questionData } = useContext(QuestionContext);
  //   console.log(questionData);
  const [products, setProducts] = useState(null);
  const getProduct = async () => {
    const apiUrl = `http://localhost:8000/answer/${questionData.ans1}/${questionData.ans2}/${questionData.ans3}/Refrigerator`;
    const { data } = await axios.get(apiUrl);
    // console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  // console.log(products);

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <h1 className="text-center mb-5">All Best Recommendations For You</h1>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={2} style={{ paddingBottom: "70px" }}>
          <div style={{ height: "55%" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 style={{ textAlign: "center" }}>Product Specification</h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p className="check">Value for money</p>
            <p>Brand</p>
            <p>Popular</p>
            <p>After Sales</p>
            <p>Price</p>
            <p>Overall Score</p>
          </div>
        </Grid>

        {products &&
          products.map((product, index) => {
            return (
              <Grid
                key={index}
                item
                xs={2.5}
                style={{ border: "2px solid black", paddingBottom: "50px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "55%",
                  }}
                >
                  <img src={product.Imageurl} alt="Fridge" width={100} />
                  <p>{product.Product}</p>
                  <div style={{ display: "flex" }}>
                    <Button
                      className={classes.btnClass}
                      href={product.Flipkart}
                    >
                      Flipkart
                    </Button>
                    <Button
                      style={{
                        border: "2px solid grey",
                        borderRadius: "10px",
                        marginRight: "2px",
                      }}
                      href={product.Amazon}
                    >
                      Amazon
                    </Button>
                    <Button
                      style={{ border: "2px solid grey", borderRadius: "10px" }}
                      href={product.Reliance}
                    >
                      Reliance
                    </Button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p>{product.Valueformoney}</p>
                  <p>{product.Brand}</p>
                  <p>{product.Valueformoney}</p>
                  <p>{product.AfterSales}</p>
                  <p>{product.Price}</p>
                  <p>{product.Score}</p>
                </div>
              </Grid>
            );
          })}

        {/* <Grid
          item
          xs={2.5}
          style={{ border: "2px solid black", paddingBottom: "50px" }}
        >
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
              <Button
                style={{
                  border: "2px solid grey",
                  borderRadius: "10px",
                  marginRight: "2px",
                }}
              >
                Flipkart
              </Button>
              <Button
                style={{
                  border: "2px solid grey",
                  borderRadius: "10px",
                  marginRight: "2px",
                }}
              >
                Amazon
              </Button>
              <Button
                style={{ border: "2px solid grey", borderRadius: "10px" }}
              >
                Reliance
              </Button>
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
        <Grid
          item
          xs={2.5}
          style={{ border: "2px solid black", paddingBottom: "50px" }}
        >
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
              <Button
                style={{
                  border: "2px solid grey",
                  borderRadius: "10px",
                  marginRight: "2px",
                }}
              >
                Flipkart
              </Button>
              <Button
                style={{
                  border: "2px solid grey",
                  borderRadius: "10px",
                  marginRight: "2px",
                }}
              >
                Amazon
              </Button>
              <Button
                style={{ border: "2px solid grey", borderRadius: "10px" }}
              >
                Reliance
              </Button>
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
        </Grid> */}
      </Grid>
    </div>
  );
}

export default NewRecommendation;
