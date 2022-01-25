import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Question() {
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
