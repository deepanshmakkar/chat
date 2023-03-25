// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA50ZxjFNeeH3EECwaQ18xbFJNDiG7GQwo",
  authDomain: "chat-afcfe.firebaseapp.com",
  projectId: "chat-afcfe",
  storageBucket: "chat-afcfe.appspot.com",
  messagingSenderId: "742195513376",
  appId: "1:742195513376:web:3fb07fd435d2c51ec95445",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
