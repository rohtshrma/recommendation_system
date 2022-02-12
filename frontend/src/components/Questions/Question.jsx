import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";
import axios from "axios";
import Loading from "../Loading/Loading";
import { QuestionContext } from "../../globalContext/globalState";
import "./question.css";

function Question() {
  const [questions, setQuestions] = useState(null);
  const { product } = useParams();
  const [questionNo, setQuestionNo] = useState(0);
  const [ans, setAns] = useState(["0", "0", "0"]);
  // const { questionData, setQuestionData } = useContext(QuestionContext);
  const navigate = useNavigate();
  // console.log(val);

  // console.log(product);
  const handleNextBtn = () => {
    setQuestionNo((prev) => prev + 1);
  };

  const handlePrevBtn = () => {
    setQuestionNo((prev) => prev - 1);
  };
  const handleSubmit = () => {
    // setQuestionData({
    //   ans1: ans[0],
    //   ans2: ans[1],
    //   ans3: ans[2],
    //   product,
    // });
    localStorage.setItem(
      "questionData",
      JSON.stringify({
        ans1: ans[0],
        ans2: ans[1],
        ans3: ans[2],
        product,
      })
    );
    navigate("/newreco");
  };

  const getQuestions = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/getquestions/${product}`
      );

      setQuestions(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // setFormData({ ...formData, product });
    localStorage.removeItem("questionData");
    getQuestions();
  }, []);
  // console.log(formData);
  if (!questions) return <Loading />;
  return (
    <Container>
      <Row>
        <Col md={3} className="sidebar_mobile">
          <Sidebar
            questionNo={questionNo}
            data={questions}
            setQuestionNo={setQuestionNo}
          />
        </Col>
        <Col md={9} xs={12}>
          {questions.map(
            (question, index) =>
              questionNo === index && (
                <Main
                  key={index}
                  data={question}
                  questionNo={questionNo}
                  handleNextBtn={handleNextBtn}
                  handlePrevBtn={handlePrevBtn}
                  ans={ans}
                  setAns={setAns}
                  handleSubmit={handleSubmit}
                />
              )
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Question;
