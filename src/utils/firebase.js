import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnE4NxjSIFnCLe-SPGq3M5XG6YgSEBiFE",
  authDomain: "findthebestrestaurant.firebaseapp.com",
  databaseURL: "https://findthebestrestaurant.firebaseio.com",
  projectId: "findthebestrestaurant",
  storageBucket: "findthebestrestaurant.appspot.com",
  messagingSenderId: "665345992076",
  appId: "1:665345992076:web:4e4ee5836ef3193b27a2a9"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
