import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Main from "./Main";
import AllRecommendations from './AllRecommendations'
import Sidebar from "../Questions/Sidebar";
import RecommendationBottom from "./RecommendationBottom"


const Recommendation = () => {
  return (<>
    <Container>
      <Row gap={2}>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <AllRecommendations />
          
          <RecommendationBottom/>
        </Col>
      </Row>
    </Container>

  </>
  );
};

export default Recommendation;
