const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const util = require("util");
const path = require("path");
const validator = require("validator");
const k8s = require("@kubernetes/client-node");

const kc = new k8s.KubeConfig();
kc.loadFromDefault();
const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const exec = util.promisify(require("child_process").exec);

const helmChartURL = path.join(__dirname, "/../helm-enterprise-jupyter");

const domain = process.env.DOMAIN

// ---------------------> FIREBASE <----------------------------------------
const firebase = require("firebase");
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

// Create your first application tokens here: https://api.ovh.com/createToken/?GET=/me
var ovh = require('ovh')({
  // endpoint: 'ovh-eu',
  appKey: process.env.OVH_APP_KEY,
  appSecret: process.env.OVH_APP_SECRET,
  consumerKey: process.env.OVH_CONSUMER_KEY
});

// ----------------------> OVH-ME ROUTE <----------------------------------
router.get("/ovh/status", (req, res) => {
  ovh.request('GET', '/me', function (err, me) {
    console.log(err || 'Welcome ' + me.firstname);
    res.status(200).json({
      me: me,
      error: err,
    });
  });
});

// ----------------------> HEALTH ROUTE <----------------------------------
router.get("/jupyterhub/health", (req, res) => {
  res.json({
    healthy: true,
  });
});

// ----------------------> HELM INSTALL ROUTE <-----------------------------
router.post(
  "/jupyterhub/install",
  [body("userId").isAscii()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ success: false, errors: errors.array() });
    }
    const userRef = firestore.doc(`users/${req.body.userId}`);
    const k8sNamespace = {
      metadata: {
        name: `kubeml-${req.body.userId.toLowerCase()}`,
      },
    };
    res.json({
      success: true,
      status: `${k8sNamespace.metadata.name} initialization started`,
    });

    // Create a DNS record for this userID
    // var: ${k8sNamespace.metadata.name}.${domain}
    // if (params[2] === 'CNAME' && !params[3].toString().match(/\.$/)) {
    //   console.error('Wrong CNAME value, must end with .', params[2]);
    //   process.exit(1);
    // }
    var params = []
    params[0] = "naxly.io"
    params[1] = k8sNamespace.metadata.name
    params[2] = "CNAME"
    params[3] = "naxly.io."

    ovh.request('GET', '/domain/zone/' + params[0] + '/record?subDomain=' + params[1], function (err, r) {
        console.log(err || 'Result:' + r);
        if (r.length === 1) {
          console.error('Record already exists in zone', params[0], params[1]);
        } else {
          ovh.request('POST', '/domain/zone/' + params[0] + '/record', {
            fieldType: params[2],
            target: params[3],
            subDomain: params[1],
          }, function(err, r) {
            console.log(err || 'Result:' + r + 'OK, created record', params[1], params[2], params[3]);
            console.log(r)
          });
        }
    });    

    try {
      await k8sApi.createNamespace(k8sNamespace);
      await exec(
        // `helm install "${helmChartURL}" --namespace="${k8sNamespace.metadata.name}" --generate-name`
        `helm install "${helmChartURL}" --generate-name --set proxy.secretToken="$(openssl rand -hex 32)",ingress2.hosts={${k8sNamespace.metadata.name}.${domain}} --namespace="${k8sNamespace.metadata.name}"`
      );
      let count = 0;
      const urlInterval = setInterval(async () => {
        count++;
        const { stdout, stderr } = await exec(
          `kubectl get ingress --server http://kubernetes-master:6443 -n ${k8sNamespace.metadata.name} jupyterhub -o=jsonpath='{.spec.rules[0].host}'`
        );
        if (validator.isURL(stdout)) {
          clearInterval(urlInterval);
          await userRef.update({
            clusterFailed: false,
            clusterURL: stdout,
          });
          return console.log(stdout);
        } else if (count > 10) {
          await userRef.update({
            clusterURL: null,
            clusterFailed: true,
          });
          return console.log(`Failed ${count} times! No more tries!`);
        }
        console.log(`Failed on count ${count}`);
      }, 1000);
    } catch (error) {
      console.log(`helm install "${helmChartURL}" --generate-name  --set proxy.secretToken="$(openssl rand -hex 32)",ingress2.hosts={${k8sNamespace.metadata.name}.${domain}} --namespace="${k8sNamespace.metadata.name}"`);
      console.log(`kubectl get ingress -n ${k8sNamespace.metadata.name} jupyterhub -o=jsonpath='{.spec.rules[0].host}'`);
      console.log("Failed try-catch block", error);
      await userRef.update({
        clusterURL: null,
        clusterFailed: true,
      });
    }
  }
);

module.exports = router;
