const { exec } = require("child_process");

const namespace = "ford";
exec(
  `helm install "/Users/harpreetsomel/Desktop/KubeML-Front/KubeML-FrontEnd/helm-enterprise-jupyter" --namespace=${namespace} --generate-name`,
  (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    console.log(`error: ${error}`);
  }
);
