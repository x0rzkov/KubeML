import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const FormNumberInput = ({
  label,
  controlId,
  placeholder,
  handleChange,
  ...otherprops
}) => {
  return (
    <Form.Group
      as={Row}
      controlId={controlId}
      style={{
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 0,
        borderBottom: 1,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
      }}
    >
      <Form.Label column sm="9">
        {label}
      </Form.Label>
      <Col sm="2">
        <Form.Control
          placeholder={placeholder}
          onChange={handleChange}
          {...otherprops}
        />
      </Col>
    </Form.Group>
  );
};

export default FormNumberInput;
