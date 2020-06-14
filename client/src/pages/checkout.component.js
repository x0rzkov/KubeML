import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import CustomButton from "../components/custom-button/custom-button.component";
import StripeCheckoutButton from "../components/stripe-button/stripe-button.component";
import { selectCurrentUser } from "../redux/user/user.selectors";
import {
  selectNewPlanConfig,
  selectNewNodeDetails,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const CheckoutPage = ({ nodeDetails, planDetails, currentUser, history }) => {
  const handlePlanPress = () => {
    history.push("/plans-and-pricing");
  };

  const handleSignInPress = () => {
    history.push("/signin");
  };

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
        ? nodeDetails.longTermNodes.map((item) => (
            <CheckoutItem key={item.node._id} cartItem={item} />
          ))
        : null}
      <Row>
        <Col className="my-col-2">
          <h5>
            TOTAL: ${planDetails ? planDetails.prices.KubeML_LongTerm : null}
          </h5>
        </Col>
      </Row>
      <Row>
        <Col className="align-center">
          {nodeDetails ? (
            currentUser ? (
              <StripeCheckoutButton
                price={planDetails.prices.KubeML_LongTerm}
              />
            ) : (
              <CustomButton
                handlePress={handleSignInPress}
                style={styles.button}
              >
                SIGN IN TO CHECKOUT
              </CustomButton>
            )
          ) : (
            <CustomButton handlePress={handlePlanPress} style={styles.button}>
              CONFIGURE A PLAN
            </CustomButton>
          )}
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
  currentUser: selectCurrentUser,
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
  button: {
    backgroundColor: "#4285f4",
    width: 300,
  },
};
