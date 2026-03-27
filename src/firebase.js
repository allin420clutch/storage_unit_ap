// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIv5wWN1zuNp2aEml3FoMhIYaRIDUPR94",
  authDomain: "storage-unit-app-7982.firebaseapp.com",
  projectId: "storage-unit-app-7982",
  storageBucket: "storage-unit-app-7982.firebasestorage.app",
  messagingSenderId: "254339002519",
  appId: "1:254339002519:web:1c8c329e67841fec51f9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
