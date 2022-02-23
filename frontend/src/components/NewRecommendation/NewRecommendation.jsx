import React, { useState, useEffect, useContext } from "react";
import { Grid, Item, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { QuestionContext } from "../../globalContext/globalState";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import "./NewRecommendation.css";
import "./styleRecommendation.css";
import OwlCarousel from "react-owl-carousel";

import useStyles from "./style.js";

import Loading from "../Loading/Loading";

function NewRecommendation() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  // const { questionData } = useContext(QuestionContext);
  const [products, setProducts] = useState(null);
  const getProduct = async (ans, product) => {
    // console.log(ans1, ans2, ans3);
    const apiUrl = `${process.env.REACT_APP_API_URL}/answer/${ans}/Refrigerator`;
    const { data } = await axios.get(apiUrl);
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    if (localStorage.getItem("questionData")) {
      const { ans, product } = JSON.parse(localStorage.getItem("questionData"));
      // console.log(data);
      getProduct(ans, product);
      setFlag(true);
    }
  }, []);
  // console.log(products);
  if (!flag) {
    return <Loading />;
  }

  return (
    <div style={{ backgroundColor: "lightgrey " }}>
      <h1 className="text-center mb-5">All Best Recommendations For You</h1>

      <Grid container>
        <Grid item xs={3} md={2} style={{ paddingBottom: "70px" }}>
          <div style={{ height: "325px" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2 className="properties_title">Product Specification</h2>
          </div>
          <div className="product_spec">
            <p className="properties">Value for money</p>
            <p className="properties">Brand</p>
            <p className="properties">Popular</p>
            <p className="properties">After Sales</p>
            <p className="properties">Price</p>
            <p className="properties">Overall Score</p>
          </div>
        </Grid>

        {products && (
          <Grid item xs={9} md={10}>
            <OwlCarousel
              className="owl-theme"
              nav
              stagePadding={30}
              responsive={{
                0: {
                  items: 1,
                },
                700: {
                  items: 2,
                },
                1000: {
                  items: 3,
                },
              }}
            >
              {products.map((product, index) => {
                // console.log(product);
                return (
                  <div className={classes.productContainer}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "lightgrey ",
                      }}
                    >
                      <img
                        src={product.Image}
                        alt="Fridge"
                        style={{ width: "100px" }}
                      />
                      <p
                        style={{
                          color: "black",
                          fontWeight: "600",
                          fontSize: "20px",
                        }}
                      >
                        {product.Product}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      <Button
                        className={classes.FlipkartClass}
                        href={product.Flipkarturl}
                        target="_blank"
                      >
                        Flipkart
                      </Button>

                      <Button
                        className={classes.AmazonClass}
                        href={product.Amazonurl}
                        target="_blank"
                      >
                        Amazon
                      </Button>
                      <Button
                        className={classes.RelianceClass}
                        href={product.Relianceurl}
                        target="_blank"
                      >
                        Reliance
                      </Button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "25px",
                      }}
                    >
                      <p className="properties">{product.Valueformoney}</p>
                      <p className="properties">{product.Brand}</p>
                      <p className="properties">{product.Valueformoney}</p>
                      <p className="properties">{product.AfterSales}</p>
                      <p className="properties">{product.Price}</p>
                      <p className="properties">{product.Score}</p>
                    </div>
                  </div>
                  // </Grid>
                );
              })}
            </OwlCarousel>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default NewRecommendation;
