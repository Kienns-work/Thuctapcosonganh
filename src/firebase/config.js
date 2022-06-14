// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCyc4RDGfqP0-kBchJM0UOi9rLqYYj6yAs",
  authDomain: "intership-cb81d.firebaseapp.com",
  projectId: "intership-cb81d",
  storageBucket: "intership-cb81d.appspot.com",
  messagingSenderId: "505286911462",
  appId: "1:505286911462:web:6709121b4fdd0520d52227",
  measurementId: "G-WYGW6CTSJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();

export { auth, db }
export default app;