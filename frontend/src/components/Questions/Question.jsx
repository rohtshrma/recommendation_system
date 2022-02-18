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
  const [ans, setAns] = useState([]);
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
    console.log(ans);
    let ansStr = "";
    ans.map((oneAns) => (ansStr += parseInt(oneAns) + 1));
    // console.log(ansStr);
    localStorage.setItem(
      "questionData",
      JSON.stringify({
        ans: ansStr,
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

      // console.log(data);
      const noOfQuestion = data.length;
      const newAns = [];
      for (let i = 0; i < noOfQuestion; i++) {
        newAns.push("0");
      }
      setAns(newAns);

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
                  ans={ans}
                  setAns={setAns}
                  handleNextBtn={handleNextBtn}
                  handlePrevBtn={handlePrevBtn}
                  handleSubmit={handleSubmit}
                  lastQuestion={questions.length - 1}
                />
              )
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Question;
