import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Pic from "../images/img-1.jpg";
import "./style.css";

const Carousel = () => {
  return (
    <div>
      <OwlCarousel
        items={5}
        className="owl-theme"
        loop
        nav
        margin={8}
        autoplay={true}
      >
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={Pic} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={Pic} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={Pic} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={Pic} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={Pic} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={Pic} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <p class="price">$19.99</p>
            <p>Some text about the jeans..</p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
