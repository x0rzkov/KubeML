import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ReactComponent as Logo } from "../assets/diagram-one.svg";
import { ReactComponent as Logo2 } from "../assets/JupyterHub.svg";
import { ReactComponent as Logo3 } from "../assets/Jupyter-Notebook.svg";
import { ReactComponent as Logo4 } from "../assets/Scalability.svg";

const HomePage = () => (
  <Container fluid>
    <Row style={{ backgroundColor: "#0076c2" }}>
      <Row className="landing">
        <Row className="row-inner py-row-2">
          <Col className="center my-3" style={{ alignItems: "center" }}>
            <h1 className="x-large raleway-bold">KubeML</h1>
            <p className="lead raleway-bold">
              Build, train, and test machine-learning models
            </p>
          </Col>
        </Row>
      </Row>
    </Row>

    <Row>
      <Row className="row-inner px-row-1">
        <Col
          className="my-3"
          xl={5}
          style={{
            paddingTop: 25,
            justifyContent: "center",
          }}
        >
          <h4>
            KubeML is an online platform that provides cloud infrastructure for
            efficiently running data-science workloads.
          </h4>
          <p className="home" style={{ marginTop: 16 }}>
            KubeML provides clients access to a fully-managed cluster hosted on
            cloud infrastructure. The KubeML team provides an online IDE powered
            by Jupyter Notebooks connected to a gateway which leverages
            kubernetes to efficiently distribute individual kernels across the
            cluster
          </p>
        </Col>
        <Col className="my-3" xl={7}>
          <Logo style={{ height: 300, width: "100%" }} />
        </Col>
      </Row>
    </Row>

    <Row>
      <Row className="row-inner p-row-2">
        <Col className="my-3" xl={4}>
          <Logo2 style={{ width: "100%", paddingRight: 15 }} />
        </Col>
        <Col className="my-2" xl={8} style={{ paddingTop: 10 }}>
          <h4>Powered by Jupyter Notebooks</h4>
          <p className="home">
            KubeML utilizes Jupyter's open-source platform and integrates
            JupyterHub with Jupyter Enterprise Gateway. Jupyterhub provides
            clients with a frontend UI to manage users and takes care of
            instantiating notebook server instances for each user. Each
            individual notebook instance is then able to launch multiple kernels
            distributed efficiently across the cluster when connected to
            Enterprise Gateway
          </p>
        </Col>
      </Row>
    </Row>

    <Row>
      <Row className="row-inner p-row-2">
        <Col xl={4} className="p-row-2" style={{ paddingLeft: 0 }}>
          <h4>A familiar IDE environment for your development team</h4>
          <p style={{ marginTop: 16, fontSize: 20, marginBottom: 0 }}>
            KubeML provides the following kernels:
          </p>
          <ul style={{ paddingLeft: 16 }}>
            <li>R</li>
            <li>python</li>
            <li>python_tenserflow_gpu</li>
            <li>python_tenserflow</li>
            <li>scala</li>
            <li>spark_R</li>
            <li>spark_python</li>
            <li>spark_scala</li>
          </ul>
        </Col>

        <Col xl={8}>
          <Logo3 style={{ width: "100%", height: 500 }} />
        </Col>
      </Row>
    </Row>

    <Row>
      <Row className="row-inner py-row-2">
        <Col className="p-row-2">
          <h4>Scale worry-free as your organization grows</h4>
          <p className="home my-2">
            As your organization expands and adds more developers to the team,
            KubeML leverages kubernetes to provide Jupyterhub and Enterprise
            gateway as highly-available deployments. KubeML also provides
            resources for clients seeking to provide various levels of compute
            power to different teams within their organization.
          </p>
          <Logo4 style={{ width: "100%", height: 500 }} />
        </Col>
      </Row>
    </Row>
  </Container>
);

export default HomePage;
