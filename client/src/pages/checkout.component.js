import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import CustomButton from "../components/custom-button/custom-button.component";
import StripeCheckoutButton from "../components/stripe-button/stripe-button.component";
import { fetchUserData } from "../firebase/firebase.utils";
import { selectCurrentUser } from "../redux/user/user.selectors";
import {
  selectPlanConfig,
  selectNodeDetails,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const CheckoutPage = ({ nodeDetails, planDetails, currentUser, history }) => {
  //Initial State
  const [showTopAlert, setShowTopAlert] = useState(true);
  const [showBottomAlert, setShowBottomAlert] = useState(true);
  const [longTermPrice, setLongTermPrice] = useState(null);
  // Event Handlers
  useEffect(() => {
    async function fetchData() {
      const data = await fetchUserData(currentUser);
      setLongTermPrice(data.longTermPrice);
    }
    if (currentUser) fetchData();
  }, [currentUser]);

  const buttonPress = (route) => {
    history.push(route);
  };

  return (
    <Container>
      <Row>
        <Col className="py-row-1-0">
          <h4>Review Instances and Launch Platform</h4>
          <p style={{ fontSize: 16 }}>
            KubeML will charge you a monthly subsciption for continuous running
            nodes (which are sized based on your organizations average usage).
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="py-row-0" style={{ backgroundColor: "#00FFFF" }}>
          {showTopAlert && (
            <Alert
              variant="info"
              style={styles.alertTop}
              onClose={() => setShowTopAlert(false)}
              dismissible
            >
              <p style={{ marginTop: 0, marginBottom: 0, fontWeight: "bold" }}>
                View Pricing Details
              </p>
              <p style={{ marginTop: 0, marginBottom: 5 }}>
                The plans page shows a pricing breakdown of both KubeML and
                competitor services. The console page shows on-demand usage,
                which bills at the end of the cycle
              </p>
            </Alert>
          )}
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
            /mo.
          </h5>
        </Col>
      </Row>
      <Row>
        {longTermPrice ? (
          <Col className="align-center" style={{ marginTop: 25 }}>
            <CustomButton
              handlePress={() => buttonPress("/console")}
              style={styles.button}
            >
              VIEW YOUR CLUSTER
            </CustomButton>
          </Col>
        ) : (
          <Col className="align-center" style={{ marginTop: 25 }}>
            {!nodeDetails && (
              <CustomButton
                handlePress={() => buttonPress("/plans-and-pricing")}
                style={styles.button}
              >
                CONFIGURE A PLAN
              </CustomButton>
            )}
            {nodeDetails &&
              (!currentUser ? (
                <CustomButton
                  handlePress={() => buttonPress("/signin")}
                  style={styles.button}
                >
                  SIGN IN TO CHECKOUT
                </CustomButton>
              ) : (
                <Col className="align-center">
                  <StripeCheckoutButton
                    price={planDetails.prices.KubeML_LongTerm}
                    user={currentUser}
                  />
                  <p className="my-col-2">
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
                  </p>
                </Col>
              ))}
          </Col>
        )}
      </Row>
      {longTermPrice && showBottomAlert && (
        <Row>
          <Col style={{ marginTop: 15 }}>
            <Alert
              variant="warning"
              style={styles.alertBottom}
              onClose={() => setShowBottomAlert(false)}
              dismissible
            >
              <p>
                Thank you for choosing KubeML as your platform of choice for
                building and training machine learning workloads. To modify your
                cluster size or change preferences, please contact the KubeML
                team! Your existing cluster will always be accessible via the
                url shown on the console page
              </p>
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectPlanConfig,
  nodeDetails: selectNodeDetails,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);

const styles = {
  rowTwo: {
    justifyContent: "space-between",
    marginTop: 25,
    fontSize: 18,
    borderColor: "lightgray",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  thead: {
    marginTop: 25,
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: 25,
  },
  button: {
    backgroundColor: "#4285f4",
    width: 300,
  },
  alertTop: {
    height: 70,
    paddingTop: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  alertBottom: {
    height: 80,
    backgroundColor: "#FFFF99",
  },
};
