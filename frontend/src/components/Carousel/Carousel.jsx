import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ac from "../images/AC_image.png";
import tv from "../images/TV_image.webp";
import washing from "../images/Washing_machine_image.png";
import micro from "../images/Microwave_image.jpeg";
import ref from "../images/Ref_image.jpeg";
import Button from "@mui/material/Button";

import "./style.css";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        loop
        nav
        margin={8}
        autoplay={true}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 4,
          },
        }}
      >
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={tv} alt="Img1" />
            <h1>TV</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/question/refrigerator")}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={washing} alt="Img1" />
            <h1>Washing machine</h1>
            {/* <p class="price">$19.99</p> */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/question/refrigerator")}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={micro} alt="Img1" />
            <h1>Micro Oven</h1>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/question/refrigerator")}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img " src={ac} alt="Img1" />
            <h1>AC</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/question/refrigerator")}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card refri_img">
            <img className="img " src={ref} alt="Img1" />
            <h1>Refrigerator</h1>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/question/refrigerator")}
            >
              Add to cart
            </Button>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
