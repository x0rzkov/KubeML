import React from "react";
import { Button, Modal, Container } from "react-bootstrap";
import TitleRow from "./pricing-title-row.component";
import PricingCalculator from "./pricing-calculator.component";

const PricingModal = ({
  shortKernelHrs,
  longTermNodes,
  shortTermNodes,
  type,
  show,
  onHide,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {type} Pricing Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalContainer}>
        <Container style={styles.container}>
          <h4>Continuous Running Nodes Pricing</h4>
          <TitleRow />
          <PricingCalculator array={longTermNodes} type={type} />
          <h4>On-Demand Nodes Pricing</h4>
          <TitleRow />
          <PricingCalculator
            array={shortTermNodes}
            type={type}
            shortKernelHrs={shortKernelHrs}
          />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PricingModal;

const styles = {
  modalContainer: {
    padding: 0,
  },
  container: {
    marginBottom: 0,
    marginTop: 0,
  },
};
