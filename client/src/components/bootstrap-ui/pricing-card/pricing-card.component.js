import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import NodeBreakdown from "./node-breakdown.component";
import PricingBreakdown from "./pricing-breakdown.component";
import {
  selectNewPlanConfig,
  selectNewNodeDetails,
} from "../../../redux/plans-and-pricing/plans-and-pricing.selectors";

import "./pricing-card.styles.scss";

const PricingCard = ({
  nodeDetails,
  planDetails,
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
        <NodeBreakdown
          type="continuous"
          nodes={nodeDetails ? nodeDetails.longTermNodes : null}
        />
        <NodeBreakdown
          type="onDemand"
          nodes={nodeDetails ? nodeDetails.shortTermNodes : null}
        />
        <PricingBreakdown
          type={"KubeML"}
          eventNum={1}
          longTermNodes={nodeDetails ? nodeDetails.longTermNodes : null}
          shortTermNodes={nodeDetails ? nodeDetails.shortTermNodes : null}
          shortKernelHrs={shortKernelHrs}
        />
        <PricingBreakdown
          type={"AWS SageMaker"}
          eventNum={2}
          longTermNodes={nodeDetails ? nodeDetails.longTermNodes : null}
          shortTermNodes={nodeDetails ? nodeDetails.shortTermNodes : null}
          longKernelHrs={longKernelHrs}
          shortKernelHrs={shortKernelHrs}
        />
      </ListGroup>

      <Card.Body>
        <Card.Title>KubeML total pricing: </Card.Title>
        <h3>
          ${planDetails ? `${planDetails.prices.KubeML_total}/mo.` : null}
        </h3>
      </Card.Body>

      <Card.Body>
        <Card.Title>SageMaker total pricing:</Card.Title>
        <h3>
          ${planDetails ? `${planDetails.prices.SageMaker_total}/mo.` : null}
        </h3>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectNewPlanConfig,
  nodeDetails: selectNewNodeDetails,
});

export default connect(mapStateToProps)(PricingCard);

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
