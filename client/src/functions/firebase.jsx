// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCj04ZFstGbXMw_ULzmi54De_sZDpcnnSk",
  authDomain: "home-images-e2c49.firebaseapp.com",
  projectId: "home-images-e2c49",
  storageBucket: "home-images-e2c49.appspot.com",
  messagingSenderId: "1011009358937",
  appId: "1:1011009358937:web:a5b693c500542981ba3548",
  measurementId: "G-PJ2ECMSFTH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
