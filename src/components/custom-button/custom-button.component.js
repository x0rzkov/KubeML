import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  handlePress,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    onClick={handlePress}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
