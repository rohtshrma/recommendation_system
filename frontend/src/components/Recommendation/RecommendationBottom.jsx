import React, { useContext, useEffect, useState } from "react";
import "./Recommendations.css";
import recomImg1 from "../images/Microwave_image.jpeg";
import Button from "@mui/material/Button";
import { QuestionContext } from "../../globalContext/globalState";
import axios from "axios";

const RecommendationBottom = () => {
  const { questionData } = useContext(QuestionContext);
  //   console.log(questionData);
  const [products, setProducts] = useState(null);
  const getProduct = async () => {
    const apiUrl = `http://localhost:8000/answer/${questionData.ans1}/${questionData.ans2}/${questionData.ans3}/Refrigerator`;
    const { data } = await axios.get(apiUrl);
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  // console.log(products);

  return (
    <>
      <div
        className="right_recom"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="headingPart">
          <h5>
            {" "}
            Best Handpicked Products
            <h6 style={{ marginTop: "10px" }}>Refrigerator</h6>
          </h5>
        </div>

        <div className=" container-fluid recoms">
          <div className="row">
            {products &&
              products.map((product, index) => {
                return (
                  <>
                    <div className="col-md-5">
                      <img src={product.Imageurl} alt="Amazon" width={150} />
                    </div>
                    <div className="col-md-7 recomContent">
                      <h6>
                        <a href="#">{product.Price}</a>
                      </h6>
                      <p style={{ paddingTop: "20px" }}>
                        ORPAT Group is a pioneer in India to develop in-house
                        C.O.B. Technology. Being an ISO-9002 & 14001 Certified
                        Company, it assures quality process, quality management
                        systems and quality products. Quality Control and
                        Quality Assurance processes are well designed to ensure
                        superior quality products. Packaging processes are also
                        so well designed to ensure scratch free delivery to the
                        end users.
                      </p>

                      <Button className="latestPriceBtn" variant="contained">
                        Check the Latest Price
                      </Button>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendationBottom;
