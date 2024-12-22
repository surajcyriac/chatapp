// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE8gpla5QP6VB_vY2nEpEKrONGVVtLyao",
  authDomain: "chatapp-ada5b.firebaseapp.com",
  projectId: "chatapp-ada5b",
  storageBucket: "chatapp-ada5b.firebasestorage.app",
  messagingSenderId: "678555018759",
  appId: "1:678555018759:web:33ee0816b74851620b2ca2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)