import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import NodeBreakdown from "./node-breakdown.component";
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
        <NodeBreakdown type="continuous" nodes={longTermNodes} />
        <NodeBreakdown type="onDemand" nodes={shortTermNodes} />
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
        <Card.Title>KubeML total pricing: </Card.Title>
        <h3>${prices ? `${prices.KubeML_total}/mo.` : null}</h3>
      </Card.Body>

      <Card.Body>
        <Card.Title>SageMaker total pricing:</Card.Title>
        <h3>${prices ? `${prices.SageMaker_total}/mo.` : null}</h3>
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
  cardImage: {
    width: "25%",
    alignSelf: "center",
    marginTop: 10,
  },
};
