const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); // native module so don't need to npm install

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const k8s = require("@kubernetes/client-node");
const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // process the body of incoming requests and convert to json
app.use(bodyParser.urlencoded({ encoded: true }));

app.use(cors()); //allows for making requests from localhost:3000 to localhost:5000

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // express server doing buildpack for us
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
    //sending back static files (HTML,CSS,JS files)
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

app.post("/kubernetes", (req, res) => {
  var namespace = {
    metadata: {
      name: req.body.name,
    },
  };

  k8sApi
    .createNamespace(namespace)
    .then((response) => {
      res.status(200).send({ success: "success" });
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});
