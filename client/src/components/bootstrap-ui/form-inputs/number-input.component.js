import React from "react";
import { Col, Form } from "react-bootstrap";

const NumberInput = ({
  label,
  controlId,
  placeholder,
  handleChange,
  min,
  step,
  ...otherprops
}) => {
  return (
    <Form.Row style={styles.row}>
      <Form.Label column sm="9">
        {label}
      </Form.Label>
      <Col sm="3" style={styles.col}>
        <Form.Control
          type="number"
          min={min}
          step={step}
          placeholder={placeholder}
          onChange={handleChange}
          {...otherprops}
        />
      </Col>
    </Form.Row>
  );
};

export default NumberInput;

const styles = {
  row: {
    paddingTop: 25,
    paddingBottom: 25,
    marginBottom: 0,
    borderBottom: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
  },
  col: {
    paddingLeft: 45,
    paddingRight: 45,
  },
};
