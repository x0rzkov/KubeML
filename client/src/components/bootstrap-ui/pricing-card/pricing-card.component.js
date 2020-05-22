import React from "react";
import { Card, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";
import NodeAccordion from "../list-item/node-list-item.component";
import PricingBreakdown from "./pricing-breakdown.component";

import "./pricing-card.styles.scss";

const PricingCard = ({
  prices,
  longTermNodes,
  shortTermNodes,
  longKernelHrs,
  shortKernelHrs,
}) => {
  return (
    <Card className="pricing-card">
      <Card.Img
        variant="top"
        src={require("../../../assets/3d.svg")}
        style={styles.cardImage}
      />
      <div style={styles.h5}>
        <h5>Based on your usage needs</h5>
      </div>
      <ListGroup>
        <ListGroupItem style={styles.thick}>
          Continuous running nodes:
        </ListGroupItem>
        <Accordion style={styles.dropdown}>
          {longTermNodes.map((item) => (
            <NodeAccordion key={item.node._id} item={item} />
          ))}
        </Accordion>
        <ListGroupItem style={styles.thick}>On Demand Nodes:</ListGroupItem>
        <Accordion style={styles.dropdown}>
          {shortTermNodes.map((item) => (
            <NodeAccordion key={item.node._id} item={item} />
          ))}
        </Accordion>

        <PricingBreakdown
          type={"KubeML"}
          eventNum={1}
          longTermNodes={longTermNodes}
          shortTermNodes={shortTermNodes}
          shortKernelHrs={shortKernelHrs}
        />
        <PricingBreakdown
          type={"AWS SageMaker"}
          eventNum={2}
          longTermNodes={longTermNodes}
          shortTermNodes={shortTermNodes}
          longKernelHrs={longKernelHrs}
          shortKernelHrs={shortKernelHrs}
        />
      </ListGroup>

      <Card.Body>
        <Card.Title>KubeML pricing: </Card.Title>
        {prices ? <h3>${prices.KubeML_total}</h3> : <h3>$--,----.---</h3>}
      </Card.Body>

      <Card.Body>
        <Card.Title>AWS Sagemaker pricing</Card.Title>
        {prices ? <h3>${prices.SageMaker_total}</h3> : <h3>$--,----.---</h3>}
      </Card.Body>
    </Card>
  );
};

export default PricingCard;

const styles = {
  h5: {
    display: "flex",
    alignItems: "center",
    paddingTop: 15,
    paddingLeft: 15,
    justifyContent: "center",
    marginBottom: 15,
  },
  dropdown: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  cardImage: {
    width: "25%",
    alignSelf: "center",
    marginTop: 10,
  },
};
