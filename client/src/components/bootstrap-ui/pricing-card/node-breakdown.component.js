import React, { useState } from "react";
import { Button, Modal, Row, Col, ListGroupItem } from "react-bootstrap";

const NodeBreakdown = ({ type, nodes }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ListGroupItem as="div" style={{ borderLeft: 0, borderRight: 0 }}>
      <i
        className="fas fa-angle-right"
        onClick={() => setModalShow(true)}
        style={{ marginRight: 5 }}
      ></i>
      {type === "continuous" ? "Continuous Running Nodes" : "On Demand Nodes"}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Node Specs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {type === "continuous"
              ? "Continuous Running Nodes"
              : "On Demand Nodes"}{" "}
            Pricing
          </h4>
          <Row className="show-grid">
            <Col md={3} style={{ paddingLeft: 0 }}>
              <p>Processor Family</p>
            </Col>
            <Col md={2}>
              <p>Instance Type</p>
            </Col>
            <Col md={2} style={{ paddingLeft: 25 }}>
              <p>vCPU</p>
            </Col>
            <Col md={2}>
              <p>Clock Speed</p>
            </Col>
            <Col md={2}>
              <p>RAM</p>
            </Col>
          </Row>
          <div>
            {nodes.map((item) => (
              <Row className="show-grid" key={item.node.type}>
                <Col md={3} style={{ paddingLeft: 0 }}>
                  <p>{item.node.Processor_Name}</p>
                </Col>
                <Col md={2}>
                  <p>{item.node.type}</p>
                </Col>
                <Col md={2} style={{ paddingLeft: 25 }}>
                  <p>{item.node.vCPU}</p>
                </Col>
                <Col md={2}>
                  <p>{item.node.Clock_Speed} Ghz</p>
                </Col>
                <Col md={2}>
                  <p>{item.node.RAM} GB</p>
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

export default NodeBreakdown;
