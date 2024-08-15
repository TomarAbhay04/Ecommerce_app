// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBygWN2ARh6UzPdQqmo1P68zzgfq1QBLPY",
    authDomain: "ecommerceapp-fa01f.firebaseapp.com",
    projectId: "ecommerceapp-fa01f",
    storageBucket: "ecommerceapp-fa01f.appspot.com",
    messagingSenderId: "937316732327",
    appId: "1:937316732327:web:65b800b83bfd2e8cf17a82",
    measurementId: "G-CB5Z1XTTKD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };