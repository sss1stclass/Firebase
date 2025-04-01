// firebase.ts
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_FIREBASE_API_KEY,
  authDomain: "dashboard-12f9b.firebaseapp.com",
  projectId: "dashboard-12f9b",
  storageBucket: "dashboard-12f9b.firebasestorage.app",
  messagingSenderId: "791503586859",
  appId: "1:791503586859:web:786fd9cd4edc8f9bb2cc6e",
  databaseURL: 'https://dashboard-12f9b-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
