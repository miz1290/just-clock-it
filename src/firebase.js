import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAhwC_l6xqaDMZpR7sHbDuuVJ8dEHCiUjk",
  authDomain: "clock-it-1a93e.firebaseapp.com",
  projectId: "clock-it-1a93e",
  storageBucket: "clock-it-1a93e.appspot.com",
  messagingSenderId: "401374133034",
  appId: "1:401374133034:web:5726d3453e84225c6afc53",
  measurementId: "G-7HQ1YSRD1M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
