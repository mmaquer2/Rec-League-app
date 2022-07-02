import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZ0OH5-06bPpEDQb4pRUg3CE8MS2WLLkQ",
  authDomain: "mike-firebase-test-fca25.firebaseapp.com",
  projectId: "mike-firebase-test-fca25",
  storageBucket: "mike-firebase-test-fca25.appspot.com",
  messagingSenderId: "203028915810",
  appId: "1:203028915810:web:aaa212225d1d6a083d133b",
  measurementId: "G-JBNR74SPR5"
};

// Initialize Firebase App with default settings
export const app = initializeApp(firebaseConfig);