import React from "react";
import { Row, Col } from "react-bootstrap";

const CheckoutItem = ({ cartItem }) => {
  const { node, quantity } = cartItem;
  const { type, Long_Term, vCPU, RAM } = node;

  return (
    <Row style={styles.thead}>
      <Col className="col center p-left-1 brdr-white-top" md={3}>
        <p className="m-bot-0 py-10">{type}</p>
      </Col>
      <Col className="col center p-left-1 brdr-gray-top" md={2}>
        <p className="m-bot-0">{vCPU}</p>
      </Col>
      <Col className="col center p-left-1 brdr-gray-top" md={2}>
        <p className="m-bot-0">{RAM}</p>
      </Col>
      <Col className="col center p-left-1 brdr-gray-top" md={2}>
        <p className="m-bot-0">{Long_Term}</p>
      </Col>
      <Col className="col center p-left-1 brdr-gray-top" md={2}>
        <p className="m-bot-0">{quantity}</p>
      </Col>
    </Row>
  );
};

export default CheckoutItem;

const styles = {
  thead: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 25,
  },
};
