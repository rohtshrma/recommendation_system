import React from "react";
import { Stack } from "react-bootstrap";
import "./style.css";
import Paper from "@mui/material/Paper";
import { MdKeyboardArrowRight } from "react-icons/md";

// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Sidebar({ questionNo, data, setQuestionNo }) {
  return (
    <>
      <div>
        <Stack gap={3} className="mainContainer">
          <Paper className="question_slide">
            {data.map((question, index) => {
              return (
                <div
                  key={index}
                  className={
                    questionNo === index ? "slide_box_active" : "slide_box"
                  }
                >
                  <button
                    onClick={() => setQuestionNo(index)}
                    className="sidebarBtns"
                  >
                    <div className="para">{question.Title}</div>
                    <MdKeyboardArrowRight />
                  </button>
                </div>
              );
            })}

            <div className="slide_box">
              <button className="sidebarBtns">
                <div className="para">Result</div>
                <MdKeyboardArrowRight />
              </button>
            </div>
          </Paper>
        </Stack>
      </div>
    </>
  );
}

export default Sidebar;
