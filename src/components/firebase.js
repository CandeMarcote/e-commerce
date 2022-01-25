// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWmSfepegqNgirYUdFBR7P9g2JaETetGY",
  authDomain: "ecommerce-coderhouse-d3701.firebaseapp.com",
  projectId: "ecommerce-coderhouse-d3701",
  storageBucket: "ecommerce-coderhouse-d3701.appspot.com",
  messagingSenderId: "963920376846",
  appId: "1:963920376846:web:79a8f0cb039c8b4aae785f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);