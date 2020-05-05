import React from "react";

import { Card, Accordion } from "react-bootstrap";

const NodeAccordion = ({ item }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey="0"
          style={{
            paddingBottom: 5,
          }}
        >
          <h5>
            {item.type}, Qty. ({item.quantity})
          </h5>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NodeAccordion;
