import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import NodeAccordion from "../list-item/node-list-item.component";

const PricingCard = ({ KubeML, SageMaker, longTermNodes, shortTermNodes }) => {
  return (
    <Card style={{ width: "85%", paddingRight: 0 }}>
      <Card.Img
        variant="top"
        src={require("../../../assets/3d.svg")}
        style={{ width: "25%", alignSelf: "center", marginTop: 10 }}
      />
      <div style={styles.h5}>
        <h5>Based on your usage needs: </h5>
      </div>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Continuous running nodes:</ListGroupItem>
        {longTermNodes.map((item) => (
          <NodeAccordion key={item.type} item={item} />
        ))}
        <ListGroupItem>On Demand Nodes:</ListGroupItem>
        {shortTermNodes.map((item) => (
          <NodeAccordion key={item.type} item={item} />
        ))}
        <ListGroupItem>Long-term node pricing: </ListGroupItem>
        <ListGroupItem>On-demand node pricing: </ListGroupItem>
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
  },
};
