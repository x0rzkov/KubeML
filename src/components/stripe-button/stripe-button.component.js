import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_SSP0VTjJCaFYZown37ESYHKk00jqSIoS33";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
    // since we do not have a backend setup to process the charge
    // we are only console logging the token
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="KubeML Inc."
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
