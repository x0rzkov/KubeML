import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../components/stripe-button/stripe-button.component";

import {
  selectNewPlanConfig,
  selectNewNodeDetails,
} from "../redux/plans-and-pricing/plans-and-pricing.selectors";

const CheckoutPage = ({ nodeDetails }) => {
  const [total] = useState(4399);

  return (
    <Container>
      <Row style={styles.titleRow}>
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

      {nodeDetails
        ? nodeDetails.map((item) => (
            <Row>
              <CheckoutItem key={item.node._id} cartItem={item} />
            </Row>
          ))
        : null}

      <Row style={styles.total}>TOTAL: $total</Row>
      <div style={styles.card}>
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

const styles = {
  titleRow: {
    justifyContent: "space-between",
    marginTop: 25,
    padding: 10,
    fontSize: 18,
    borderColor: "darkgrey",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  total: {
    marginTop: 50,
    fontSize: 24,
  },
  card: {
    marginTop: 40,
    fontSize: 18,
    textAlign: "center",
  },
};
