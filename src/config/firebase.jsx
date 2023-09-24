/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs4BHkkEAnG0xkUheImdaBMdXN5RcECJA",
    authDomain: "second-p-4e0d3.firebaseapp.com",
    projectId: "second-p-4e0d3",
    storageBucket: "second-p-4e0d3.appspot.com",
    messagingSenderId: "268960461608",
    appId: "1:268960461608:web:032050161291da048a161d",
    measurementId: "G-8M530W576X"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()