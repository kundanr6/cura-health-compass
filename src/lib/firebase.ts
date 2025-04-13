
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKwIUkQs70a7cRjbDw86UbrfMt7JtKKbY",
  authDomain: "cura-chatbot.firebaseapp.com",
  projectId: "cura-chatbot",
  storageBucket: "cura-chatbot.firebasestorage.app",
  messagingSenderId: "868698932433",
  appId: "1:868698932433:web:5abdd96ae0626fa06771f0",
  measurementId: "G-3210FW8GJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

// Configure Google Auth Provider
googleProvider.setCustomParameters({
  prompt: 'select_account'
});
