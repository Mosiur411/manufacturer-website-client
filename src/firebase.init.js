// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDwkNo_sTOa_ByZUqMYlAt_tOWdv3Rb8Y",
  authDomain: "manufacturer-411a6.firebaseapp.com",
  projectId: "manufacturer-411a6",
  storageBucket: "manufacturer-411a6.appspot.com",
  messagingSenderId: "759882203759",
  appId: "1:759882203759:web:0075aa924934b9d81ac39a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;