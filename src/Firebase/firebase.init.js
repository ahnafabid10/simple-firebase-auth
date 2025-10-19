//Do not send FirebASE CONFIG TO PUBLIC REPO

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBarha_w4XxyeA6-qOHAAP1Zn-pw_IrjhU",
  authDomain: "simple-firebase-auth-c12d8.firebaseapp.com",
  projectId: "simple-firebase-auth-c12d8",
  storageBucket: "simple-firebase-auth-c12d8.firebasestorage.app",
  messagingSenderId: "132453710607",
  appId: "1:132453710607:web:21fbac4f7b26f9bb2d5c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);