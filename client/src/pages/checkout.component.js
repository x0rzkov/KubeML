import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../components/stripe-button/stripe-button.component";

import {
  selectNewPlanConfig,
  selectNewNodeDetails,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const CheckoutPage = ({ nodeDetails, planDetails }) => {
  return (
    <Container>
      <Row>
        <Col className="py-row-1">
          <h4 style={{ marginBottom: 5 }}>
            Review Instances and Launch Platform
          </h4>
          <p style={{ fontSize: 16 }}>
            KubeML will charge you a monthly subsciption for continuous running
            nodes which are always available for hosting workloads
          </p>
        </Col>
      </Row>
      <Row style={styles.rowTwo}>
        <Col>
          <h5 style={{ marginBottom: 0 }}>Continuous Running Nodes</h5>
        </Col>
      </Row>

      <Row style={styles.thead}>
        <Col className="col center p-left-1 brdr-gray-left" md={3}>
          <p className="m-bot-0 py-10">Instance Type</p>
        </Col>
        <Col className="col center p-left-1 brdr-gray" md={2}>
          <p className="m-bot-0">vCPUs</p>
        </Col>
        <Col className="col center p-left-1 brdr-gray" md={2}>
          <p className="m-bot-0">Memory (GB)</p>
        </Col>
        <Col className="col center p-left-1 brdr-gray" md={2}>
          <p className="m-bot-0">Price ($/hr)</p>
        </Col>
        <Col className="col center p-left-1 brdr-gray" md={2}>
          <p className="m-bot-0">Quantity</p>
        </Col>
      </Row>

      {nodeDetails
        ? nodeDetails.map((item) => (
            <CheckoutItem key={item.node._id} cartItem={item} />
          ))
        : null}

      <Row>
        <Col className="my-col-2">
          <h5>TOTAL: ${planDetails.KubeML_LongTerm}</h5>
        </Col>
      </Row>
      <Row>
        <Col className="align-center">
          <StripeCheckoutButton price={planDetails.KubeML_LongTerm} />
        </Col>
      </Row>
      <Row className="my-col-2">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </Row>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectNewPlanConfig,
  nodeDetails: selectNewNodeDetails,
});

export default connect(mapStateToProps)(CheckoutPage);

const styles = {
  rowTwo: {
    justifyContent: "space-between",
    marginTop: 20,
    fontSize: 18,
    borderColor: "lightgray",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  thead: {
    marginTop: 10,
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 25,
  },
};
