import React, { useState } from "react";
import { Card } from "react-bootstrap";

import PricingModal from "../modals/pricing-modal.component";

const PricingListItem = ({ type, longTermNodes, shortTermNodes }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card>
      <Card.Header style={styles.header}>
        {type} Pricing Details
        <i
          className="fas fa-plus-circle"
          onClick={() => setModalShow(true)}
        ></i>
      </Card.Header>
      <PricingModal show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
};

export default PricingListItem;

const styles = {
  header: {
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
  },
};
