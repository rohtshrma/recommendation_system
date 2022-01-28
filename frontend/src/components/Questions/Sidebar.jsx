import React from "react";
import { Stack } from "react-bootstrap";
import "./style.css";
import Paper from '@mui/material/Paper';

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Sidebar() {
  return (
    <>

    <div className="">
      <Stack gap={3} className="mainContainer">
      <Paper className="question_slide">
        <div className="slide_box">
          <button className="active">Get Started </button>
        </div>
        <div className="slide_box">
          <button>Children   </button>
          
        </div>
        

        <div className="slide_box">
          <button>Room Size</button>
        </div>
        <div className="slide_box">
          <button>Price</button>
        </div>
        <div className="slide_box">
          <button>Results</button>
        </div>
        </Paper>
      </Stack>
    </div>
    </>
  );
}

export default Sidebar;
