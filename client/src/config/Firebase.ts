// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7BAWJrIPe-jmCyr4QogNNVvPuiRsnWSs",
  authDomain: "auth-2d50f.firebaseapp.com",
  projectId: "auth-2d50f",
  storageBucket: "auth-2d50f.firebasestorage.app",
  messagingSenderId: "802510111575",
  appId: "1:802510111575:web:de78857329f790637ef412",
  measurementId: "G-0PM687WZ15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth(app);
export const db=getFirestore(app)