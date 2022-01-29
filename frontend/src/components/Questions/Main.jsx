import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import children_img from './children.png';
import Paper from '@mui/material/Paper';

function Main() {
  return (
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
          </div>
        </div>
      </div>

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
