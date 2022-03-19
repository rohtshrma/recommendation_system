import React, { useState, useEffect, useContext } from "react";
import { Grid, Item, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { QuestionContext } from "../../globalContext/globalState";
import axios from "axios";
import "./styleRecommendation.css";
import OwlCarousel from "react-owl-carousel";
import useStyles from "./style.js";
import Loading from "../Loading/Loading";

function NewRecommendation() {
  const classes = useStyles();

  const [products, setProducts] = useState(null);
  const [productName, setProductName] = useState("default");
  const getProduct = async (ans, product) => {
    // const apiUrl = `${process.env.REACT_APP_API_URL}/answer/${ans}/${product}`;
    const apiUrl = `/answer/${ans}/${product}`;
    const { data } = await axios.get(apiUrl);
    // console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    if (localStorage.getItem("questionData")) {
      const { ans, product } = JSON.parse(localStorage.getItem("questionData"));
      getProduct(ans, product);
      setProductName(product);
    }
  }, []);
  // console.log(products);
  if (!products) {
    return <Loading />;
  }

  return (
    <div>
      <div className="main_container">
        <p className="text-center heading">All Best Recommendations For You</p>
      </div>
      <Grid container>
        <Grid item xs={3} md={2} className="left_recomon">
          <div className="left_recom">
            <h2 className="properties_title">Product Specification</h2>
          </div>
          <div className="product_spec">
            <hr />
            <div className="product_list">
              <p className="properties1 properties">Value for money</p>
            </div>
            <hr />

            <div className="product_list">
              <p className="properties1 properties">Brand</p>
            </div>
            <hr />

            <div className="product_list ">
              <p className="properties1 properties">Popular</p>
            </div>
            <hr />

            <div className="product_list">
              <p className="properties1 properties">After Sales</p>
            </div>
            <hr />

            <div className="product_list ">
              <p className="properties1 properties">Price</p>
            </div>
            <hr />

            <div className="product_list">
              <p className="properties1 properties">Overall Score</p>
            </div>
            <hr />
          </div>
        </Grid>

        <Grid item xs={9} md={10} className="right_container">
          <OwlCarousel
            className="owl-theme"
            stagePadding={30}
            responsive={{
              0: {
                items: 1,
              },
              450: {
                items: 2,
              },
              700: {
                items: 3,
              },
              1000: {
                items: 4,
              },
            }}
          >
            {products.map((product, index) => {
              // console.log(product);
              return (
                <div className="productContainer">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      backgroundColor: "white ",
                    }}
                  >
                    <div>
                      <img
                        className={`product_img ${productName}`}
                        src={product.Image}
                        alt="ProductImage"
                      />
                    </div>

                    <a href={product.Amazonurl} target="_blank">
                      <p
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontSize: "12px",
                          fontFamily: "Gill Sans Extrabold",
                          textIndent: "20px",
                          textAlign: "center",
                          height: "50px",
                          overflow: "hidden",
                        }}
                      >
                        {product.ProductName}
                      </p>
                    </a>

                    <hr />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100px",
                      marginTop: "10px",
                    }}
                  >
                    {product.Amazonurl && (
                      <a href={product.Amazonurl} target="_blank">
                        <button className={classes.AmazonClass}>Amazon</button>
                      </a>
                    )}
                    {product.Flipkarturl && (
                      <a href={product.Flipkarturl} target="_blank">
                        <button className={classes.FlipkartClass}>
                          Flipkart
                        </button>
                      </a>
                    )}

                    {product.Relianceurl && (
                      <a href={product.Relianceurl} target="_blank">
                        <button className={classes.RelianceClass}>
                          Reliance
                        </button>
                      </a>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "25px",
                    }}
                  >
                    <hr />
                    <div className="product_list product_2">
                      <p className="properties data_props">
                        {product.Valueformoney}
                      </p>
                    </div>
                    <hr />
                    <div className="product_list ">
                      <p className="properties data_props">{product.Brand}</p>
                    </div>

                    <hr />
                    <div className="product_list product_2">
                      <p className="properties data_props">
                        {product.Valueformoney}
                      </p>
                    </div>

                    <hr />
                    <div className="product_list ">
                      <p className="properties data_props">
                        {product.AfterSales}
                      </p>
                    </div>

                    <hr />
                    <div className="product_list product_2">
                      <p className="properties data_props">{product.Price}</p>
                    </div>

                    <hr />
                    <div className="product_list ">
                      <p className="properties data_props">{product.Score}</p>
                    </div>
                  </div>
                </div>
                // </Grid>
              );
            })}
          </OwlCarousel>
        </Grid>
      </Grid>

      <div className="box_content" style={{ margin: "50px 30px 0 30px" }}>
        {products[0].Notes && (
          <>
            <h4>Note:</h4>
            <p>{products[0].Notes}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default NewRecommendation;
