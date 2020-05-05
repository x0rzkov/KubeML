import React from "react";
import { Card, ListGroup, ListGroupItem, Accordion } from "react-bootstrap";
import NodeAccordion from "../list-item/node-list-item.component";

const PricingCard = ({
  KubeML,
  SageMaker,
  longTermNodes,
  shortTermNodes,
  prices,
}) => {
  return (
    <Card style={{ width: "85%" }}>
      <Card.Img
        variant="top"
        src={require("../../../assets/3d.svg")}
        style={{ width: "25%", alignSelf: "center", marginTop: 10 }}
      />
      <div style={styles.h5}>
        <h5 style={{ fontWeight: 600 }}>Based on your usage needs</h5>
      </div>
      <ListGroup>
        <ListGroupItem style={{ fontWeight: 600 }}>
          Continuous running nodes:
        </ListGroupItem>

        <Accordion style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          {longTermNodes.map((item) => (
            <NodeAccordion key={item.type} item={item} />
          ))}
        </Accordion>

        <ListGroupItem style={{ fontWeight: 600 }}>
          On Demand Nodes:
        </ListGroupItem>

        <Accordion style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          {shortTermNodes.map((item) => (
            <NodeAccordion key={item.type} item={item} />
          ))}
        </Accordion>

        <ListGroupItem style={{ fontWeight: 600 }}>
          Long-term node pricing:
        </ListGroupItem>
        <ListGroupItem style={{ fontWeight: 600 }}>
          On-demand node pricing:
        </ListGroupItem>
      </ListGroup>

      <Card.Body>
        <Card.Title>KubeML pricing: </Card.Title>
        {KubeML ? <h3>${KubeML}</h3> : <h3>$--,----.---</h3>}
      </Card.Body>

      <Card.Body>
        <Card.Title>AWS Sagemaker pricing</Card.Title>
        {SageMaker ? <h3>${SageMaker}</h3> : <h3>$--,----.---</h3>}
      </Card.Body>
    </Card>
  );
};

export default PricingCard;

const styles = {
  h5: {
    display: "flex",
    alignItems: "center",
    paddingTop: 15,
    paddingLeft: 15,
    justifyContent: "center",
    marginBottom: 15,
  },
};
