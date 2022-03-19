import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
import { Grid } from "@mui/material";

import children_img from "./children.png";
import Paper from "@mui/material/Paper";

// import questionData from "./questionData";

function Main({
  data,
  questionNo,
  handleNextBtn,
  handlePrevBtn,
  ans,
  setAns,
  handleSubmit,
  lastQuestion,
}) {
  const [selected, setSelected] = useState(ans[questionNo]);
  const handleChange = (e) => {
    const newAns = [...ans];
    newAns.splice(questionNo, 1, e.target.value);
    setAns(newAns);
    setSelected(e.target.value);
  };

  return (
    <>
      <Paper>
        <div className="question-container">
          <div className="top-bar sidebar">
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                paddingTop: "10px",
              }}
            >
              {data.Title}
            </p>
            {/* <p>Why does this question matter?</p> */}
          </div>
          <Grid container>
            <Grid item xs={12} md={9}>
              <div>
                <div className="question-ans">
                  <p
                    style={{
                      fontSize: "26px",
                      fontWeight: "bolder",
                      marginTop: "8px",
                    }}
                  >
                    {/* Do you have children in your home? */}
                    {data.Question}
                  </p>
                  {data.Image !== "" && <img src={data.Image} alt="Imag" />}

                  <div>
                    {data.Answer.map(
                      (option, index) =>
                        option !== "" && (
                          <div
                            className="ans-options"
                            style={{ marginTop: "20px" }}
                            key={index}
                          >
                            <input
                              type="radio"
                              value={index}
                              name={`question${questionNo}`}
                              onChange={handleChange}
                              checked={selected == index}
                            />
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
                        )
                    )}
                  </div>
                </div>

                <div className="navBtns">
                  <Button
                    variant="outline-primary"
                    className="navBtn"
                    onClick={handlePrevBtn}
                    disabled={questionNo === 0}
                  >
                    Prev
                  </Button>

                  {questionNo !== lastQuestion ? (
                    <Button
                      variant="outline-primary"
                      className="navBtn"
                      onClick={handleNextBtn}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      variant="outline-primary"
                      className="navBtn"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  )}
                </div>
              </div>
            </Grid>
            <Grid item md={3} mt={5}>
              <div className="box_content">
                <p>{data.Text}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>

      <div className="video">
        <h5>For more information, watch this video</h5>
        <iframe
          className="video_player"
          title="hello"
          src={data.Video}
        ></iframe>
      </div>
    </>
  );
}

export default Main;
