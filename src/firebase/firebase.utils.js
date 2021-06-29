// this is the default import we are using to access 
// firebase's utilities.
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
  apiKey: "AIzaSyClwJv_uMbcYjzu7QXn86At9ynhZZpSFlc",
  authDomain: "crwn-clothing-db-13f48.firebaseapp.com",
  projectId: "crwn-clothing-db-13f48",
  storageBucket: "crwn-clothing-db-13f48.appspot.com",
  messagingSenderId: "514940479944",
  appId: "1:514940479944:web:59aa3268a5ab49c31138fd",
  measurementId: "G-J3JBR3B1JE"
};

// Initializing firebase with config.
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// This provider will gives you the pop-up to select
// google account.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
