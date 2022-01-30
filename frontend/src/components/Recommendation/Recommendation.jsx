import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Main from "./Main";
import AllRecommendations from "./AllRecommendations";
import Sidebar from "../Questions/Sidebar";
import RecommendationBottom from "./RecommendationBottom";
import { QuestionContext } from "../../globalContext/globalState";
import Loading from "../Loading/Loading";
import Error404 from "../Error404/Error404";

const Recommendation = () => {
  const { questionData } = useContext(QuestionContext);
  // console.log(questionData);
  if (!questionData) {
    return <Error404 />;
  }
  return (
    <>
      <Container>
        <Row gap={2}>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col>
            <AllRecommendations />

            <RecommendationBottom />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Recommendation;
