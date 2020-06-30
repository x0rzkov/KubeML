import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price, user }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_SSP0VTjJCaFYZown37ESYHKk00jqSIoS33";

  const onToken = async (token) => {
    try {
      await axios({
        url: "payment",
        method: "post",
        data: {
          amount: priceForStripe,
          user,
          token,
        },
      });
      alert("Payment successful");
      createNamespace();
    } catch (err) {
      console.log("Payment error: ", JSON.parse(err));
      alert("There was an issue with your payment");
    }
  };

  const createNamespace = async () => {
    try {
      let namespace = user.id.toLowerCase();
      await axios({
        url: "kubernetes",
        method: "post",
        data: {
          name: namespace,
          user,
        },
      });
    } catch (err) {
      console.log("error: ", err);
    }
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
