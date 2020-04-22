import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FormNumberInput = ({ label, controlId, placeholder }) => {
  return (
    <Form.Group
      as={Row}
      controlId={controlId}
      style={{
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <Form.Label column sm="9">
        {label}
      </Form.Label>
      <Col sm="2">
        <Form.Control placeholder={placeholder} />
      </Col>
    </Form.Group>
  );
};

export default FormNumberInput;
