import React from "react";

import { Card, Accordion } from "react-bootstrap";

const NodeAccordion = ({ item }) => {
  return (
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={item.node.type}
        style={styles.header}
      >
        ({item.quantity}) {item.node.type}{" "}
        <i className="fas fa-plus-circle"></i>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={item.node.type}>
        <Card.Body style={styles.cardBody}>
          <div style={styles.columnDiv}>
            <div style={styles.upperRow}>
              <div style={styles.vCPU}>
                <h6>vCPU</h6>
                <h6>{item.node.vCPU}</h6>
              </div>
              <div style={styles.details}>
                <h6>Clock Speed</h6>
                <h6>{item.node.Clock_Speed} GHz</h6>
              </div>
            </div>

            <div style={styles.rowDiv}>
              <div style={styles.details}>
                <h6>Processor Family</h6>
                <h6>{item.node.Processor_Name}</h6>
              </div>
              <div style={styles.RAM}>
                <h6>RAM</h6>
                <h6>{item.node.RAM} GB</h6>
              </div>
            </div>
          </div>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default NodeAccordion;

const styles = {
  header: {
    backgroundColor: "#ECF4F7",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  },
  cardBody: {
    backgroundColor: "#D8EBF5",
    paddingTop: 5,
    paddingBottom: 5,
  },
  upperRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rowDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  columnDiv: {
    display: "flex",
    flexDirection: "column",
  },
  vCPU: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 65,
  },
  RAM: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 30,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
