// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHrMfBYKPzx9d5v2GcbAd0UoVRZQ0jPZM",
  authDomain: "exclusivefdr2405.firebaseapp.com",
  projectId: "exclusivefdr2405",
  storageBucket: "exclusivefdr2405.firebasestorage.app",
  messagingSenderId: "586457805409",
  appId: "1:586457805409:web:164c7287a6d2295c8f3020",
  measurementId: "G-3FTKD031PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig