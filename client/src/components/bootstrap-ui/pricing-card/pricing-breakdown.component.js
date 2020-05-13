import React, { useState } from "react";
import { Card, Button, Modal, Container, Row, Col } from "react-bootstrap";

import TitleRow from "../modal-components/pricing-title-row.component";

const PricingBreakdown = ({
  type,
  longTermNodes,
  shortTermNodes,
  longKernelHrs,
  shortKernelHrs,
}) => {
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

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
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
          <Container style={styles.container1}>
            <h4>Continuous Running Nodes Pricing</h4>
            <TitleRow />
            <div>
              {longTermNodes.map((item) => (
                <Row className="show-grid" key={item.node.type}>
                  <Col md={3}>
                    <p>{item.node.type}</p>
                  </Col>
                  <Col md={2}>
                    <p>{item.quantity}</p>
                  </Col>
                  <Col md={2}>
                    <p>
                      {type === "KubeML"
                        ? item.node.Long_Term
                        : item.node.SageMaker}
                    </p>
                  </Col>
                  <Col md={3}>
                    <p>31 * {longKernelHrs ? longKernelHrs : 24}</p>
                  </Col>
                  <Col md={2}>
                    <p>
                      $
                      {(
                        31 *
                        (longKernelHrs ? longKernelHrs : 24) *
                        (type === "KubeML"
                          ? item.node.Long_Term
                          : item.node.SageMaker) *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                  </Col>
                </Row>
              ))}
            </div>
            <h4>On-Demand Nodes Pricing</h4>
            <TitleRow />
            <div>
              {shortTermNodes.map((item) => (
                <Row className="show-grid" key={item.node.type}>
                  <Col md={3}>
                    <p>{item.node.type}</p>
                  </Col>
                  <Col md={2}>
                    <p>{item.quantity}</p>
                  </Col>
                  <Col md={2}>
                    <p>
                      {type === "KubeML"
                        ? item.node.On_Demand
                        : item.node.SageMaker}
                    </p>
                  </Col>
                  <Col md={3}>
                    <p>31 * {shortKernelHrs}</p>
                  </Col>
                  <Col md={2}>
                    <p>
                      $
                      {(
                        31 *
                        shortKernelHrs *
                        (type === "KubeML"
                          ? item.node.On_Demand
                          : item.node.SageMaker) *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                  </Col>
                </Row>
              ))}
            </div>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default PricingBreakdown;

const styles = {
  header: {
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
    fontWeight: 600,
  },
  modalContainer: {
    padding: 0,
  },
  container1: {
    marginBottom: 0,
    marginTop: 0,
  },
};
