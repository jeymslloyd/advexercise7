// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyDli4tTV7HFB3aH_k1W19joHSSG4Nc4l1Q",
  authDomain: "adv-exer7-6d27a.firebaseapp.com",
  projectId: "adv-exer7-6d27a",
  storageBucket: "adv-exer7-6d27a.appspot.com",
  messagingSenderId: "242808634754",
  appId: "1:242808634754:web:ff97fab61f158a0396239b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
