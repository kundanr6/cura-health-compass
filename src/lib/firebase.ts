
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace these with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq9_bDfSEJbfAzhPHwVfDzF-Hio6YvATM",
  authDomain: "cura-health-ai.firebaseapp.com",
  projectId: "cura-health-ai",
  storageBucket: "cura-health-ai.appspot.com",
  messagingSenderId: "437182098850",
  appId: "1:437182098850:web:5e3f5ef25d90a7d8d5b8c3",
  measurementId: "G-JNHEC3NYLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

