import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import NodeBreakdown from "./node-breakdown.component";
import PricingBreakdown from "./pricing-breakdown.component";
import {
  selectPlanConfig,
  selectNodeDetails,
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
      <div style={styles.header}>
        <p style={styles.headerText}>Based on your usage needs: </p>
      </div>
      <ListGroup style={{ borderTop: "none", borderBottom: "none" }}>
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
  planDetails: selectPlanConfig,
  nodeDetails: selectNodeDetails,
});

export default connect(mapStateToProps)(PricingCard);

const styles = {
  header: {
    paddingLeft: 15,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 0,
  },
  cardImage: {
    width: "15%",
    alignSelf: "center",
    marginTop: 10,
  },
};
