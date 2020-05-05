import React from "react";

import { Card, Accordion } from "react-bootstrap";

const RenderComponent = (array) => {
  return (
    <div>
      {array.map((item) => (
        <h5 key={item.type}>{item.type}</h5>
      ))}
    </div>
  );
};

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
          <Card.Body style={styles.cardBody}>
            <div>
              <p>LongTermPricing: </p>
              {longTermNodes ? RenderComponent(longTermNodes) : null}
            </div>
            <div>
              <p>ShortTermPricing</p>
              {shortTermNodes ? RenderComponent(shortTermNodes) : null}
            </div>
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
  cardBody: {
    backgroundColor: "#D8EBF5",
    paddingTop: 5,
    paddingBottom: 0,
    marginBottom: 0,
  },
};
