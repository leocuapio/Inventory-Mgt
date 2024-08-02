// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHALzlgqrYAuH5AwH_rHslqwZvyCtXruU",
  authDomain: "inventory-management-app-a3784.firebaseapp.com",
  projectId: "inventory-management-app-a3784",
  storageBucket: "inventory-management-app-a3784.appspot.com",
  messagingSenderId: "790370654073",
  appId: "1:790370654073:web:5fb0d56fb3f5829d82c1a8",
  measurementId: "G-2PTC2XHNDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}