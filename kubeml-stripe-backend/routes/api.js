const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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

// ----------------------> HEALTH ROUTE <----------------------------------
router.get("/health", (req, res) => {
  res.json({
    healthy: true,
  });
});

// ----------------------> HELM INSTALL ROUTE <-----------------------------
router.post("/payments", [body("userId").isAscii()], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  const { userId, amount } = req.body;
  const userRef = firestore.doc(`users/${userId}`);

  try {
    const { stripeErr, stripeRes } = await stripe.charges.create(body);
    if (stripeErr) {
      console.log("server error");
      res.status(500).send({ error: stripeErr });
    } else {
      await userRef.update({
        longTermPrice: amount,
      });
      res.status(200).send({ success: stripeRes });
    }
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = router;
