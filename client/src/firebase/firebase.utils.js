import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const getUserPlanDetails = async (userAuth) => {
  if (!userAuth) return;
  const planRef = firestore.doc(`plans/${userAuth.uid}`);
  const snapShot = await planRef.get();

  if (!snapShot.exists) {
    return;
  }
  return planRef;
};

export const createUserClusterInfo = async (nodeDetails, planDetails, user) => {
  const planRef = firestore.doc(`plans/${user.id}`);
  const snapShot = await planRef.get();

  if (!snapShot.exists) {
    const { longTermNodes } = nodeDetails;
    try {
      await planRef.set({
        nodes: longTermNodes,
        planInfo: planDetails,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return planRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
