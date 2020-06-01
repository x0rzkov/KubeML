import React, { useState } from "react";
import { Button, Modal, Row, Col, ListGroupItem } from "react-bootstrap";

const PricingBreakdown = ({
  type,
  longTermNodes,
  shortTermNodes,
  longKernelHrs,
  shortKernelHrs,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ListGroupItem as="div" style={{ borderLeft: 0, borderRight: 0 }}>
      <i
        className="fas fa-angle-right"
        onClick={() => setModalShow(true)}
        style={{ marginRight: 5 }}
      ></i>
      {type} Pricing Details
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
        <Modal.Body>
          <h4>Continuous Running Nodes Pricing</h4>
          <Row className="show-grid">
            <Col md={3}>
              <p>Instance Type</p>
            </Col>
            <Col md={2}>
              <p>Node Qty.</p>
            </Col>
            <Col md={2}>
              <p>Cost per hour</p>
            </Col>
            <Col md={3}>
              <p>Hours per month</p>
            </Col>
            <Col md={2}>
              <p>Total</p>
            </Col>
          </Row>
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
          <Row className="show-grid">
            <Col md={3}>
              <p>Instance Type</p>
            </Col>
            <Col md={2}>
              <p>Node Qty.</p>
            </Col>
            <Col md={2}>
              <p>Cost per hour</p>
            </Col>
            <Col md={3}>
              <p>Hours per month</p>
            </Col>
            <Col md={2}>
              <p>Total</p>
            </Col>
          </Row>
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </ListGroupItem>
  );
};

export default PricingBreakdown;
