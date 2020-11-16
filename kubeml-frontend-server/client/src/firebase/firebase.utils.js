import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// ---------------------------------------------------------------------
const config = {
  apiKey: "AIzaSyCJ65QobNW6hUlOJd4UhnDvxRePygPCPVM",
  authDomain: "kukeml.firebaseapp.com",
  databaseURL: "https://kukeml.firebaseio.com",
  projectId: "kukeml",
  storageBucket: "kukeml.appspot.com",
  messagingSenderId: "664246499029",
  appId: "1:664246499029:web:376ffde3301107e2b9145c",
  measurementId: "G-CCE8N87XXK"
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
