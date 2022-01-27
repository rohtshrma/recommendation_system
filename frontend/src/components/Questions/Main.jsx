import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import children_img from './children.png';

function Main() {
  return (
    <> 
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
          </div>
        </div>
      </div>

      <div className="navBtns">
        <Button variant="outline-primary" className="navBtn">
          Prev
        </Button>
        <Button variant="outline-primary" className="navBtn">
          Next
        </Button>
      </div>

      
    </div>
    <div className="video my-3">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
      </>
  );
}

export default Main;
