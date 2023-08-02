import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHFa-R2fxfGiZGMffoqd0Kwxwj9fo-Cnk",
  authDomain: "project-126af.firebaseapp.com",
  projectId: "project-126af",
  storageBucket: "project-126af.appspot.com",
  messagingSenderId: "523722962464",
  appId: "1:523722962464:web:e2e6530ba853c6c51dee45"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export  { db , auth };