import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { node, quantity } = cartItem;
  const { type, Long_Term, Processor_Name } = node;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <p>{type}</p>
      </div>
      <span className="name">{Processor_Name}</span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">{Long_Term}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
