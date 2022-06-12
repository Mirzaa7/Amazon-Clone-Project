import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlJ5kOAynT0U-TSr-sJxW-SYtsTqfo_RA",
  authDomain: "clone-project-44a8a.firebaseapp.com",
  projectId: "clone-project-44a8a",
  storageBucket: "clone-project-44a8a.appspot.com",
  messagingSenderId: "454114339924",
  appId: "1:454114339924:web:35750733abc8f1abbd11c1",
  measurementId: "G-ZRJPVNKRHN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
