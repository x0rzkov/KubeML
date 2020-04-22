import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const SelectForm = ({ label, controlId, numArray }) => {
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
        <Form.Control as="select" custom>
          {numArray.map((number) => (
            <option>{number}</option>
          ))}
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

export default SelectForm;
