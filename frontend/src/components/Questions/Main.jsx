import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
<<<<<<< HEAD
import children_img from './children.png';
import Paper from '@mui/material/Paper';
=======
import children_img from "./children.png";
import questionData from "./questionData";
>>>>>>> 5ca79b9baa188c421d17f4a2cfed5d07d4e9c685

function Main() {
  const [questionNo, setQuestionNo] = useState(0);
  const [data, setData] = useState(questionData[questionNo]);

  const handleNextBtn = () => {
    setQuestionNo((prev) => prev + 1);
  };

  const handlePrevBtn = () => {
    setQuestionNo((prev) => prev - 1);
  };
  // console.log(questionData);
  useEffect(() => {
    setData(questionData[questionNo]);
  }, [questionNo]);
  return (
<<<<<<< HEAD
    <> 
       <Paper >
    <div className="question-container">
      <div className="top-bar sidebar">
        <p style={{fontSize:"20px",fontWeight:"bold", paddingTop:"10px"}}>Children</p>
        {/* <p>Why does this question matter?</p> */}
      </div>
      <div className="question-ans">
        <p  style={{ fontSize:"26px",fontWeight:"bolder",marginTop:"8px"}}>
        Do you have children in your home?</p>
        <img src={children_img} alt="" />
        <div>
          <div className="ans-options" style={{marginTop:"20px"}}>
            <input type="radio" />
            <p  style={{ fontSize:"22px",fontWeight:"500" , marginLeft:"20px"}}>
            Yes I would like to protect them</p>
          </div>
          <div className="ans-options">
            <input  type="radio" />
            <p style={{ fontSize:"22px",fontWeight:"500", marginLeft:"20px"}}>NO</p>
=======
    <>
      <div className="question-container">
        <div className="top-bar sidebar">
          <p
            style={{ fontSize: "20px", fontWeight: "bold", paddingTop: "10px" }}
          >
            Children
          </p>
          {/* <p>Why does this question matter?</p> */}
        </div>
        <div className="question-ans">
          <p
            style={{ fontSize: "26px", fontWeight: "bolder", marginTop: "8px" }}
          >
            {/* Do you have children in your home? */}
            {data.Question}
          </p>
          <img src={children_img} alt="" />
          <div>
            {data.Options.map((option, index) => (
              <div
                className="ans-options"
                style={{ marginTop: "20px" }}
                key={index}
              >
                <input type="radio" />
                <p
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    marginLeft: "20px",
                  }}
                >
                  {/* Yes I would like to protect them */}
                  {option}
                </p>
              </div>
            ))}
>>>>>>> 5ca79b9baa188c421d17f4a2cfed5d07d4e9c685
          </div>
        </div>

<<<<<<< HEAD
      <Paper>
      <div className="content_side">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem iste corporis quo repellendus magnam itaque et, nihil rerum possimus reprehenderit vitae mollitia, dolore laboriosam suscipit deleniti quam inventore. Repudiandae.
      </p>
         
      </div>
      </Paper>

      <div className="navBtns">
        <Button variant="outline-primary" className="navBtn">
          Prev
        </Button>
        <Button variant="outline-primary" className="navBtn">
          Next
        </Button>
      </div>

      
    </div>
    </Paper>
    <div className="video my-3">
=======
        <div className="navBtns">
          {questionNo === 0 ? (
            <Button variant="outline-primary" className="navBtn" disabled>
              Prev
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              className="navBtn"
              onClick={handlePrevBtn}
            >
              Prev
            </Button>
          )}

          {questionNo !== 2 ? (
            <Button
              variant="outline-primary"
              className="navBtn"
              onClick={handleNextBtn}
            >
              Next
            </Button>
          ) : (
            <Button variant="outline-primary" className="navBtn">
              Submit
            </Button>
          )}
        </div>
      </div>
      <div className="video my-3">
>>>>>>> 5ca79b9baa188c421d17f4a2cfed5d07d4e9c685
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
<<<<<<< HEAD
      
      </>
=======
    </>
>>>>>>> 5ca79b9baa188c421d17f4a2cfed5d07d4e9c685
  );
}

export default Main;
