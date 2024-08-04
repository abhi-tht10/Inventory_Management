// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ0L1ToZ7wSUuyO_HWT4kjnSAkO5FR5dg",
  authDomain: "inventory-management-15d72.firebaseapp.com",
  projectId: "inventory-management-15d72",
  storageBucket: "inventory-management-15d72.appspot.com",
  messagingSenderId: "661700592030",
  appId: "1:661700592030:web:a69bcdd5fced3d034cd68f",
  measurementId: "G-TNC881T4D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {firestore}