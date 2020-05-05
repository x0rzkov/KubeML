import React from "react";

import { Card, Accordion } from "react-bootstrap";

const NodeAccordion = ({ item }) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={item.type}
        style={styles.header}
      >
        ({item.quantity}) {item.type} <i className="fas fa-plus-circle"></i>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={item.type}>
        <Card.Body style={{ backgroundColor: "#D8EBF5" }}>
          <ul>
            <li>{item.vCPU}</li>
            <li>{item.RAM}</li>
            <li>{item.Processor_Name}</li>
            <li>{item.Clock_Speed}</li>
          </ul>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default NodeAccordion;

const styles = {
  header: {
    backgroundColor: "#ECF4F7",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  },
};
