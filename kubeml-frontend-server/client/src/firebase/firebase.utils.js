import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



// ---------------------------------------------------------------------
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
// ----------------------------------------------------------------------

// Function called by App.js when user signs in
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        clusterFailed: false, // set to true if Jupyter helm initialization fails
        clusterURL: null,
        longTermPrice: null,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Function called by CheckoutPage & ConsolePage on mounting
export const fetchUserData = async (user) => {
  if (!user) {
    return;
  }
  const userRef = firestore.doc(`users/${user.id}`);
  const snapShot = await userRef.get();

  try {
    return snapShot.data();
  } catch (error) {
    console.log("error: ", error);
  }
};

//-----------------------------------------------------------------------------
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
