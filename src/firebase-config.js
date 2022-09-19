// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrJvM1P6-uAuoULWTaD1-K7vC2lDq55Pk",
  authDomain: "soccermanagerapp.firebaseapp.com",
  projectId: "soccermanagerapp",
  storageBucket: "soccermanagerapp.appspot.com",
  messagingSenderId: "284908683539",
  appId: "1:284908683539:web:5bd095e47651c442f35ae6",
  measurementId: "G-GSL5DX6BDZ"
};


// Initialize Firebase App with default settings
export const app = initializeApp(firebaseConfig);
