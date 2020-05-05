import React, { Component, Fragment } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { withRouter } from "react-router-dom";

import CarouselSlide from "../../components/bootstrap-ui/carousel/carousel.component";
import PricingCard from "../../components/bootstrap-ui/cards/pricing-card.component";
import SelectForm from "../../components/bootstrap-ui/forms/form-select.component";
import FormNumberInput from "../../components/bootstrap-ui/forms/form-number-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./plans-and-pricing.styles.scss";

import { setNewPlanConfig } from "../../redux/plans-and-pricing/plans-and-pricing.actions";
import { sizeNodeInstance } from "./plans-and-pricing.utils";

const ramArray = [8, 16, 32, 64, 160, 196];
const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class PlansAndPricingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avgUsers: 0,
      avgKernels: 0,
      percentLongWorkloads: 0,
      shortKernelHrs: 0,
      minRAM: 0,
      KubeML_Price: "",
      SageMaker_Price: "",
      longTermNodes: [],
      shortTermNodes: [],
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { setNewPlanConfig } = this.props;

    setNewPlanConfig({
      avgUsers: this.state.avgUsers,
      avgKernels: this.state.avgKernels,
      percentLongWorkloads: this.state.percentLongWorkloads,
      shortKernelHrs: this.state.shortKernelHrs,
      minRAM: this.state.minRAM,
    });

    const res = sizeNodeInstance(this.state);
    const { nodesArray, KubeML, SageMaker, array2 } = res;

    this.setState({
      KubeML_Price: KubeML,
      SageMaker_Price: SageMaker,
      longTermNodes: nodesArray,
      shortTermNodes: array2,
    });

    console.log("nodesArray: ", nodesArray);
  };

  handleCheckout = () => {
    const { history } = this.props;
    history.push("/checkout");
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Fragment>
        <Container
          style={{
            marginBottom: 150,
          }}
        >
          <Row style={{ marginBottom: 40 }}>
            <CarouselSlide />
          </Row>

          <Row>
            <Col lg="8" style={styles.col}>
              <h2 style={styles.h2}>
                Let the KubeML pricing tool calculate for you!
              </h2>
              <Form onSubmit={this.handleSubmit}>
                <FormNumberInput
                  label="Enter your organizations daily active users (Researches/Data
                    Scientists/ Developers)"
                  controlId="avgUsers"
                  placeholder="Integer"
                  name="avgUsers"
                  value={this.state.avgUsers}
                  handleChange={this.handleChange}
                />
                <FormNumberInput
                  label="Enter average kernels a user utilizes simultaneously for
                  building/training ML models"
                  controlId="avgKernels"
                  placeholder="0.0"
                  name="avgKernels"
                  value={this.state.avgKernels}
                  handleChange={this.handleChange}
                />
                <FormNumberInput
                  label=" Enter percentage of kernels running for 10+ hrs/day"
                  controlId="percentLongWorkloads"
                  placeholder="0.0"
                  name="percentLongWorkloads"
                  value={this.state.percentLongWorkloads}
                  handleChange={this.handleChange}
                />
                <SelectForm
                  label="Enter average runtime (hrs) for kernels running less than
                  10hrs/day"
                  controlId="shortKernelHrs"
                  numArray={hoursArray}
                  name="shortKernelHrs"
                  value={this.state.shortKernelHrs}
                  handleChange={this.handleChange}
                />
                <SelectForm
                  label="Enter minimum RAM (GB) desired per kernel"
                  controlId="minRAM"
                  numArray={ramArray}
                  name="minRAM"
                  value={this.state.minRAM}
                  handleChange={this.handleChange}
                />

                <CustomButton
                  type="submit"
                  style={{
                    marginTop: 75,
                  }}
                >
                  Check Price
                </CustomButton>
              </Form>
              <div style={styles.buttonDiv}>
                <CustomButton
                  handlePress={this.handleCheckout}
                  style={styles.CustomButton}
                >
                  Proceed to Checkout handleCheckout
                </CustomButton>
              </div>
            </Col>

            <Col lg="4" style={styles.col2}>
              <PricingCard
                KubeML={this.state.KubeML_Price}
                SageMaker={this.state.SageMaker_Price}
                longTermNodes={this.state.longTermNodes}
                shortTermNodes={this.state.shortTermNodes}
              />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  setNewPlanConfig: (planDetails) => dispatch(setNewPlanConfig(planDetails)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PlansAndPricingPage)
);

const styles = {
  col: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  col2: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: 0,
  },
  h2: {
    marginBottom: 35,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
  },
  CustomButton: {
    marginTop: 100,
  },
};
