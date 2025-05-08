// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "gossipchat-79a7d.firebaseapp.com",
  projectId: "gossipchat-79a7d",
  storageBucket: "gossipchat-79a7d.firebasestorage.app",
  messagingSenderId: "109677451786",
  appId: "1:109677451786:web:c078ed9745070eb3ed9df3",
  measurementId: "G-R4E7S6THBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()