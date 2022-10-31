// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBhffTuOOdXwFdquEobYmoL11BvAsbi9m8",
  authDomain: "blog-f9172.firebaseapp.com",
  projectId: "blog-f9172",
  storageBucket: "blog-f9172.appspot.com",
  messagingSenderId: "613256938318",
  appId: "1:613256938318:web:5b429a7acc2a17e00c541f",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
