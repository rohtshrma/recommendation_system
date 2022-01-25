import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";

function Main() {
  return (
    <div className="question-container">
      <div className="top-bar sidebar">
        <p>Children</p>
        <p>Why does this question matter?</p>
      </div>
      <div className="question-ans">
        <p>Do you have children in your home?</p>
        <div>
          <div className="ans-options">
            <input type="radio" />
            <p>Yes I would like to protect them</p>
          </div>
          <div className="ans-options">
            <input type="radio" />
            <p>NO</p>
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

      <div className="video">
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>
    </div>
  );
}

export default Main;
