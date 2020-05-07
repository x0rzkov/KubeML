import React from "react";
import { Row, Col } from "react-bootstrap";

const TitleRow = () => {
  return (
    <Row className="show-grid">
      <Col md={3}>
        <p>Instance Type</p>
      </Col>
      <Col md={2}>
        <p>Node Qty.</p>
      </Col>
      <Col md={2}>
        <p>Cost per hour</p>
      </Col>
      <Col md={3}>
        <p>Hours per month</p>
      </Col>
      <Col md={2}>
        <p>Total</p>
      </Col>
    </Row>
  );
};

export default TitleRow;
