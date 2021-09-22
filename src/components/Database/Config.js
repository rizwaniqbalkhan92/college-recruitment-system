import firebase from 'firebase'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp95vDUgpsAn5G1X3hYObFflzj_XclIdk",
  authDomain: "rec-rizwan.firebaseapp.com",
  databaseURL: "https://rec-rizwan-default-rtdb.firebaseio.com",
  projectId: "rec-rizwan",
  storageBucket: "rec-rizwan.appspot.com",
  messagingSenderId: "691071780698",
  appId: "1:691071780698:web:6b14dd480d4efedda75563"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase