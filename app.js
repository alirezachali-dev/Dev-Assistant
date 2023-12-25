// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3-crsx89PI5oEwjdOOZxyy2fQ3qJ7aXA",
  authDomain: "assis-dev.firebaseapp.com",
  projectId: "assis-dev",
  storageBucket: "assis-dev.appspot.com",
  messagingSenderId: "274411903029",
  appId: "1:274411903029:web:58b4be2e4fb44f5946397c",
  measurementId: "G-7PK11TDFZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);