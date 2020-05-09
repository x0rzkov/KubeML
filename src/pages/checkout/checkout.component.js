import React, { useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectNewPlanConfig,
  selectNewNodeDetails,
} from "../../redux/plans-and-pricing/plans-and-pricing.selectors";

import styles from "./checkout.styles.js";

const CheckoutPage = ({ planDetails, nodeDetails }) => {
  useEffect(() => {
    if (planDetails) {
    }
  }, [planDetails, nodeDetails]);

  return (
    <Container style={styles.container}>
      <Row style={styles.row1}>
        <div>
          <span>Product</span>
        </div>
        <div>
          <span>Description</span>
        </div>
        <div>
          <span>Quantity</span>
        </div>
        <div>
          <span>Price</span>
        </div>
        <div>
          <span>Remove</span>
        </div>
      </Row>
      {nodeDetails.map((item) => (
        <CheckoutItem key={item.node._id} cartItem={item} />
      ))}

      <div className="total">TOTAL: $total</div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      {/* <StripeCheckoutButton price={total} /> */}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectNewPlanConfig,
  nodeDetails: selectNewNodeDetails,
});

export default connect(mapStateToProps)(CheckoutPage);
