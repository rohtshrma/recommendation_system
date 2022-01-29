import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Question() {
  const [formData, setFormData] = useState({
    question1: 0,
    question2: 0,
    question3: 1,
    product: "Refrigerator",
  });
  return (
    <Container>
      <Row gap={2}>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col>
          <Main />
        </Col>
      </Row>
    </Container>
  );
}

export default Question;
