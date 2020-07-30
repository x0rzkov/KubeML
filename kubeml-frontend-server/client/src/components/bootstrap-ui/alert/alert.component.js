import React from "react";
import { Alert } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectNewAlert } from "../../../redux/alert/alert.selectors";
import { removeAlert } from "../../../redux/alert/alert.actions";

const AlertPopUp = ({ alertDetails, removeAlert }) => {
  if (alertDetails.show) {
    return (
      <Alert
        variant={alertDetails.variant}
        onClose={removeAlert}
        dismissible
        style={{
          display: "flex",
          marginTop: 0,
          justifyContent: "center",
          marginBottom: 0,
          height: 50,
        }}
      >
        <Alert.Heading style={{ fontSize: 20 }}>
          {alertDetails.message}
        </Alert.Heading>
      </Alert>
    );
  } else {
    return <div></div>;
  }
};

const mapStateToProps = createStructuredSelector({
  alertDetails: selectNewAlert,
});

export default connect(mapStateToProps, { removeAlert })(AlertPopUp);
