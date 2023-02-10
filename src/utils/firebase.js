import * as firebase from "firebase/app";
import "firebase/auth";

if (!process.env.REACT_APP_FIREBASE_CONFIG) {
  console.error("REACT_APP_FIREBASE_CONFIG must be defined");
  console.log("ENV: ", process.env);
}
const firebaseConfig = {
  apiKey: "AIzaSyADo4PHsBSTXMcNmuzBjS6OhsCuH85xebE",
  authDomain: "dashboarddemo-b1a38.firebaseapp.com",
  projectId: "dashboarddemo-b1a38",
  storageBucket: "dashboarddemo-b1a38.appspot.com",
  messagingSenderId: "86961005405",
  appId: "1:86961005405:web:9e116ce7a6dc7e862f3eb4",
  measurementId: "G-T5QJ4WWZD7"
}

export function initialize() {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export function attachAuthListener(handler) {
  return firebase.auth().onAuthStateChanged(user => {
    handler(user);
  });
}

export async function createNewUser(email, password) {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
}

export async function signIn(email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signOut() {
  await firebase.auth().signOut();
}
