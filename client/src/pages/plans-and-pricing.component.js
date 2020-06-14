import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CarouselSlide from "../components/bootstrap-ui/carousel/carousel.component";
import PricingCard from "../components/bootstrap-ui/pricing-card/pricing-card.component";
import NumberSelect from "../components/bootstrap-ui/form-inputs/number-select.component";
import NumberInput from "../components/bootstrap-ui/form-inputs/number-input.component";
import CustomButton from "../components/custom-button/custom-button.component";
import {
  setNewPlanConfig,
  setClientsNodeInfo,
} from "../redux/plans-and-pricing/plans-and-pricing.actions";
import { selectNewPlanConfig } from "../redux/plans-and-pricing/plans-and-pricing.selectors";
import { sizeNodeInstance } from "../utils/plans-and-pricing/plans-and-pricing.utils";

const ramArray = [8, 16, 32, 64, 160, 196];
const hoursArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const longhoursArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

class PlansAndPricingPage extends Component {
  constructor(props) {
    super(props);

    const { planDetails } = this.props;
    this.state = {
      avgUsers: planDetails ? planDetails.avgUsers : 0,
      avgKernels: planDetails ? planDetails.avgKernels : 0,
      percentLongWorkloads: planDetails ? planDetails.percentLongWorkloads : 0,
      longKernelHrs: planDetails ? planDetails.longKernelHrs : 0,
      shortKernelHrs: planDetails ? planDetails.shortKernelHrs : 0,
      minRAM: planDetails ? planDetails.minRAM : 0,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const res = sizeNodeInstance(this.state);
    const { setNewPlanConfig } = this.props;
    setNewPlanConfig({
      avgUsers: this.state.avgUsers,
      avgKernels: this.state.avgKernels,
      percentLongWorkloads: this.state.percentLongWorkloads,
      longKernelHrs: this.state.longKernelHrs,
      shortKernelHrs: this.state.shortKernelHrs,
      minRAM: this.state.minRAM,
      prices: res.prices,
    });
    const { setClientsNodeInfo } = this.props;
    setClientsNodeInfo({
      longTermNodes: res.continuousNodes,
      shortTermNodes: res.onDemandNodes,
    });
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
      <Container>
        <Row>
          <CarouselSlide />
        </Row>
        <Row className="py-row-2">
          <Col lg={9} className="p-row-right">
            <h2>Let the KubeML pricing tool calculate for you!</h2>
            <br></br>
            <Form onSubmit={this.handleSubmit}>
              <NumberInput
                label="Enter your organizations daily active users (Researches/Data
                    Scientists/ Developers)"
                controlId="avgUsers"
                placeholder="0"
                name="avgUsers"
                min={1}
                step={1}
                value={this.state.avgUsers}
                handleChange={this.handleChange}
              />
              <NumberInput
                label="Enter average kernels a user utilizes simultaneously for
                  building/training ML models"
                controlId="avgKernels"
                placeholder="0.0"
                name="avgKernels"
                min={1}
                step={0.1}
                value={this.state.avgKernels}
                handleChange={this.handleChange}
              />
              <NumberInput
                label=" Enter percentage of kernels running for 10+ hrs/day"
                controlId="percentLongWorkloads"
                placeholder="0.0"
                name="percentLongWorkloads"
                min={0.01}
                max={1.0}
                step={0.01}
                value={this.state.percentLongWorkloads}
                handleChange={this.handleChange}
              />
              <NumberSelect
                label="Enter average runtime (hrs) for kernels running more than
                  10hrs/day"
                controlId="longKernelHrs"
                numArray={longhoursArray}
                name="longKernelHrs"
                value={this.state.longKernelHrs}
                handleChange={this.handleChange}
              />
              <NumberSelect
                label="Enter average runtime (hrs) for kernels running less than
                  10hrs/day"
                controlId="shortKernelHrs"
                numArray={hoursArray}
                name="shortKernelHrs"
                value={this.state.shortKernelHrs}
                handleChange={this.handleChange}
              />
              <NumberSelect
                label="Enter minimum RAM (GB) desired per kernel"
                controlId="minRAM"
                numArray={ramArray}
                name="minRAM"
                value={this.state.minRAM}
                handleChange={this.handleChange}
              />

              <CustomButton type="submit" style={{ marginTop: 40 }}>
                Check Price
              </CustomButton>
            </Form>
          </Col>
          <Col lg={3} className="p-row-0">
            <PricingCard
              longKernelHrs={this.state.longKernelHrs}
              shortKernelHrs={this.state.shortKernelHrs}
            />
          </Col>
        </Row>
        <div className="row">
          <CustomButton
            handlePress={this.handleCheckout}
            style={{
              marginTop: 75,
              backgroundColor: "#4285f4",
              width: 350,
            }}
          >
            Proceed to Checkout
          </CustomButton>
        </div>
        <br></br>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  planDetails: selectNewPlanConfig,
});

export default withRouter(
  connect(mapStateToProps, { setNewPlanConfig, setClientsNodeInfo })(
    PlansAndPricingPage
  )
);
