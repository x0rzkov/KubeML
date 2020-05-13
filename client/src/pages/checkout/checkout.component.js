import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectNewPlanConfig,
  selectNewNodeDetails,
} from "../../redux/plans-and-pricing/plans-and-pricing.selectors";

import styles from "./checkout.styles.js";

const CheckoutPage = ({ nodeDetails }) => {
  const [total] = useState(4399);

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

      <Row style={styles.row2}>TOTAL: $total</Row>
      <div style={styles.row3}>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectNewPlanConfig,
  nodeDetails: selectNewNodeDetails,
});

export default connect(mapStateToProps)(CheckoutPage);
