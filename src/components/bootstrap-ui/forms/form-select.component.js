import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const SelectForm = ({
  label,
  controlId,
  placeholder,
  handleChange,
  numArray,
  ...otherprops
}) => {
  return (
    <Form.Group
      as={Row}
      controlId={controlId}
      style={{
        paddingTop: 25,
        paddingBottom: 25,
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
          as="select"
          onChange={handleChange}
          {...otherprops}
          custom
        >
          {numArray.map((number) => (
            <option key={number}>{number}</option>
          ))}
        </Form.Control>
      </Col>
    </Form.Group>
  );
};

export default SelectForm;
