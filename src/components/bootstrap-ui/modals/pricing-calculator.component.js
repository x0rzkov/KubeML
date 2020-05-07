import React from "react";
import { Row, Col } from "react-bootstrap";

const PriceCalculator = ({ array, type, shortKernelHrs }) => {
  const calculate = (quantity, price) => {
    const hrs = shortKernelHrs ? shortKernelHrs : 24;
    const num = 31 * quantity * price * hrs;
    return num.toFixed(2);
  };

  return (
    <div>
      {array.map((item) => (
        <Row className="show-grid" key={item.node.type}>
          <Col md={3}>
            <p>{item.node.type}</p>
          </Col>
          <Col md={2}>
            <p>{item.quantity}</p>
          </Col>
          <Col md={2}>
            <p>{item.node.Long_Term}</p>
          </Col>
          <Col md={3}>
            <p>31 * 24</p>
          </Col>
          <Col md={2}>
            <p>$ {calculate(item.quantity, item.node.Long_Term)}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default PriceCalculator;
