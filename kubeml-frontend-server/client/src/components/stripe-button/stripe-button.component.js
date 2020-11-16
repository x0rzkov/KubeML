import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import CustomButton from "../custom-button/custom-button.component";

const StripeCheckoutButton = ({ price, user }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_bFQ25trvSuFKtAegy0Gs1NuS00oMkXUYBw";

  const onToken = async (token) => {
    try {
      await axios({
        url: "payments",
        method: "post",
        data: {
          amount: priceForStripe,
          userId: user.id,
          token,
        },
      });
      alert("Payment successful");
      createNamespace();
    } catch (err) {
      alert("There was an issue with your payment");
    }
  };

  const createNamespace = async () => {
    try {
      let namespace = user.id.toLowerCase();
      await axios({
        url: "jupyterhub/install",
        method: "post",
        data: {
          name: namespace,
          userId: user.id,
        },
      });
    } catch (err) {
      console.log("error: ", err);
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Seoz-Naxly Inc."
      billingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      style={{ width: 200, height: 32 }}
    >
      <CustomButton>Stripe Checkout</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
