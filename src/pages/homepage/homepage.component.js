import React from "react";
import "./homepage.styles.scss";

import { ReactComponent as Logo } from "../../assets/Latest-diagram.svg";
import { ReactComponent as Logo2 } from "../../assets/JupyterHub.svg";
import { ReactComponent as Logo3 } from "../../assets/Jupyter-Notebook.svg";
import { ReactComponent as Logo4 } from "../../assets/Scalability.svg";

const HomePage = () => (
  <div className="homepage">
    <div className="block-one">
      <h1 className="x-large">Welcome to KubeML</h1>
      <p className="lead">
        An online platform for building, training, and testing machine-learning
        workloads
      </p>
    </div>

    <div className="block-two">
      <div className="left">
        <h3 className="info-text">
          KubeML is a turn-key solution for running data-science workloads
          efficiently, collaboratively, and anywhere anytime.
        </h3>
        <text className="description-text">
          KubeML provides clients access to a fully-managed cluster hosted on
          cloud infrastructure. The KubeML team provides an online IDE powered
          by Jupyter Notebooks connected to a gateway which leverages kubernetes
          to efficiently distribute individual kernels across the cluster
        </text>
      </div>
      <div className="right">
        <Logo className="logo" />
      </div>
    </div>

    <div className="block-three">
      <div className="left">
        <Logo2 className="logo2" />
      </div>
      <div className="right">
        <text className="info-text">Powered by Jupyter Notebooks</text>
        <text className="description-text">
          KubeML utilizes Jupyter's open-source platform and integrates
          JupyterHub with Jupyter Enterprise Gateway. Jupyterhub provides
          clients with a frontend UI to manage users and takes care of
          instantiating notebook server instances for each user. Each individual
          notebook instance is then able to launch multiple kernels distributed
          efficiently across the cluster when connected to Enterprise Gateway
        </text>
      </div>
    </div>

    <div className="block-four">
      <div className="left">
        <h3 className="info-text">
          A familiar IDE environment for your development team
        </h3>
        <text className="description-text">
          KubeML provides the following kernels:
        </text>
        <ul className="ul-list">
          <li>R</li>
          <li>python</li>
          <li>python_tenserflow_gpu</li>
          <li>python_tenserflow</li>
          <li>scala</li>
          <li>spark_R</li>
          <li>spark_python</li>
          <li>spark_scala</li>
        </ul>
      </div>

      <div className="right">
        <Logo3 className="logo" />
      </div>
    </div>

    <div className="block-five">
      <div className="left">
        <Logo4 className="logo" />
      </div>
      <div className="right">
        <h3 className="info-text">
          Scale worry-free as your organization grows
        </h3>
        <p className="description-text">
          As your organization expands and adds more developers to the team,
          KubeML leverages kubernetes to provide Jupyterhub and Enterprise
          gateway as highly-available deployments. KubeML also provides
          resources for clients seeking to provide various levels of compute
          power to different teams within their organization.
        </p>
      </div>
    </div>

    <div>
      <img src={require("../../assets/brain.jpg")} />
    </div>
  </div>
);

export default HomePage;
