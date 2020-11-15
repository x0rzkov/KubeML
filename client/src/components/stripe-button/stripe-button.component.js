import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_SSP0VTjJCaFYZown37ESYHKk00jqSIoS33";

  const onToken = (token) => {
    axios({
      // axios will use whatever url we are at and then append 'payment' to it
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful");
      })
      .catch((err) => {
        console.log("Payment error: ", JSON.parse(err));
        alert("There was an issue with your payment");
      });
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
      style={{ width: 200 }}
    />
  );
};

export default StripeCheckoutButton;
