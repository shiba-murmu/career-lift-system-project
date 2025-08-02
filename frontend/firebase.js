// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4fnxi8CnOiAGKEruyXt3qciFwYHRirDQ",
  authDomain: "careerlift-f9621.firebaseapp.com",
  projectId: "careerlift-f9621",
  storageBucket: "careerlift-f9621.firebasestorage.app",
  messagingSenderId: "135653189761",
  appId: "1:135653189761:web:66ba515a6775140acb8580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase services 
export const auth = getAuth(app);
export const db = getFirestore(app);
