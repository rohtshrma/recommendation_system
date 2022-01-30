import React from "react";
import { Stack } from "react-bootstrap";
import "./style.css";
import Paper from '@mui/material/Paper';
import { MdKeyboardArrowRight } from "react-icons/md";



// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Sidebar() {
  return (
    <>

    <div className="">
      <Stack gap={3} className="mainContainer">
      <Paper className="question_slide">
        <div className="slide_box">
          <button className="active">Get&nbsp;Started <MdKeyboardArrowRight/></button>
        </div>
        <div className="slide_box">
          <button>Children <MdKeyboardArrowRight/> </button>
          
        </div>
        

        <div className="slide_box">
          <button>Room&nbsp;Size<MdKeyboardArrowRight/> </button>
        </div>
        <div className="slide_box">
          <button>Price <MdKeyboardArrowRight/></button>
        </div>
        <div className="slide_box">
          <button>Results<MdKeyboardArrowRight/> </button>
        </div>
        </Paper>
      </Stack>
    </div>
    </>
  );
}

export default Sidebar;
