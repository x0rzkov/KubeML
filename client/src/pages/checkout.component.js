import React, { useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import axios from "axios";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import CustomButton from "../components/custom-button/custom-button.component";
import StripeCheckoutButton from "../components/stripe-button/stripe-button.component";
import { selectCurrentUser } from "../redux/user/user.selectors";
import {
  setClientMonthlyTotal,
  setClusterURL,
} from "../redux/plans-and-pricing/plans-and-pricing.actions";
import {
  selectPlanConfig,
  selectNodeDetails,
  selectMonthlyTotal,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const CheckoutPage = ({
  nodeDetails,
  planDetails,
  monthlyTotal,
  currentUser,
  history,
  setClientMonthlyTotal,
  setClusterURL,
}) => {
  const [showTopAlert, setShowTopAlert] = useState(true);
  const [showBottomAlert, setShowBottomAlert] = useState(true);

  const handlePlanPress = () => {
    history.push("/plans-and-pricing");
  };

  const handleSignInPress = () => {
    history.push("/signin");
  };

  const handleConsolePress = () => {
    history.push("/console");
  };

  const onToken = async (token) => {
    try {
      await axios({
        url: "payment",
        method: "post",
        data: {
          amount: planDetails.prices.KubeML_LongTerm * 100,
          user: currentUser,
          token,
        },
      });
      setClientMonthlyTotal(planDetails.prices.KubeML_LongTerm);
      alert("Payment successful");
      createNamespace();
    } catch (err) {
      console.log("Payment error: ", JSON.parse(err));
      alert("There was an issue with your payment");
    }
  };

  const createNamespace = async () => {
    try {
      let namespace = makeid(7).toLowerCase();
      const res = await axios({
        url: "kubernetes",
        method: "post",
        data: {
          name: namespace,
          user: currentUser,
        },
      });
      setClusterURL(res);
      console.log(res);
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const makeid = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
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
        <Col className="align-center" style={{ marginTop: 25 }}>
          {!nodeDetails && (
            <CustomButton handlePress={handlePlanPress} style={styles.button}>
              CONFIGURE A PLAN
            </CustomButton>
          )}
          {nodeDetails && !currentUser && (
            <CustomButton handlePress={handleSignInPress} style={styles.button}>
              SIGN IN TO CHECKOUT
            </CustomButton>
          )}
          {nodeDetails && currentUser && !monthlyTotal && (
            <StripeCheckoutButton
              price={planDetails.prices.KubeML_LongTerm}
              onToken={onToken}
            />
          )}
          {monthlyTotal && nodeDetails && currentUser && (
            <CustomButton
              handlePress={handleConsolePress}
              style={styles.button}
            >
              VIEW YOUR CLUSTER
            </CustomButton>
          )}
        </Col>
      </Row>
      {monthlyTotal && nodeDetails && currentUser && showBottomAlert && (
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
      {nodeDetails && currentUser && !monthlyTotal && (
        <Row className="my-col-2">
          *Please use the following test credit card for payments*
          <br />
          4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
        </Row>
      )}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectPlanConfig,
  nodeDetails: selectNodeDetails,
  currentUser: selectCurrentUser,
  monthlyTotal: selectMonthlyTotal,
});

export default connect(mapStateToProps, {
  setClientMonthlyTotal,
  setClusterURL,
})(CheckoutPage);

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
