import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectNewPlanConfig } from "../../redux/plans-and-pricing/plans-and-pricing.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ planDetails }) => {
  useEffect(() => {
    if (planDetails) {
      console.log("Plan details is: ", planDetails);
    }
  }, []);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div className="total">TOTAL: </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  planDetails: selectNewPlanConfig,
});

export default connect(mapStateToProps)(CheckoutPage);
