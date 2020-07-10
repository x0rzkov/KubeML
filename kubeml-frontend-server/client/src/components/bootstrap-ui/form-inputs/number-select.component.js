import React from "react";
import { Col, Form } from "react-bootstrap";

const NumberSelect = ({
  label,
  controlId,
  placeholder,
  handleChange,
  numArray,
  ...otherprops
}) => {
  return (
    <Form.Row style={styles.row}>
      <Form.Label column sm="9">
        {label}
      </Form.Label>
      <Col sm="3" style={styles.col}>
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
    </Form.Row>
  );
};

export default NumberSelect;

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
