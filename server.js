const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const util = require("util");
const path = require("path"); // native module so don't need to npm install

// -------------------------------------> FIREBASE
var firebase = require("firebase");

const config = {
  apiKey: "AIzaSyBD87B8drIK2NNLr-5e4PMYMEDQmKDP8pw",
  authDomain: "kube-ml.firebaseapp.com",
  databaseURL: "https://kube-ml.firebaseio.com",
  projectId: "kube-ml",
  storageBucket: "kube-ml.appspot.com",
  messagingSenderId: "550937035835",
  appId: "1:550937035835:web:7f023a1d494c948592481e",
  measurementId: "G-MVRXP6G97S",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
// ------------------------------------->

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const k8s = require("@kubernetes/client-node");
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
// const exec = require("child_process");
const exec = util.promisify(require("child_process").exec);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: true }));

app.use(cors()); //allows for making requests from localhost:3000 to localhost:5000

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.post("/kubernetes", async (req, res) => {
  var namespace = {
    metadata: {
      name: req.body.name,
    },
  };

  try {
    await k8sApi.createNamespace(namespace);
    await exec(
      `helm install "/Users/harpreetsomel/Desktop/KubeML-Front/KubeML-FrontEnd/helm-enterprise-jupyter" --namespace=${req.body.name} --generate-name`
    );
    setTimeout(async () => {
      const { stdout, stderr } = await exec(
        `kubectl get svc -n ${req.body.name} proxy-public -o=jsonpath='{.status.loadBalancer.ingress[0].hostname}'`
      );
      res.status(200).send({ success: stdout });
    }, 3000);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).send({ error: error });
  }
});
