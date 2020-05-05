import React from "react";

import { Card, Accordion } from "react-bootstrap";

const PricingListItem = ({ type, longTermNodes, shortTermNodes, eventNum }) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={eventNum}
          style={styles.header}
        >
          {type} Pricing Details<i className="fas fa-plus-circle"></i>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={eventNum}>
          <Card.Body style={{ backgroundColor: "#D8EBF5" }}>
            <p>LongTermPricing</p>
            <p>ShortTermPricing</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default PricingListItem;

const styles = {
  header: {
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  },
};
