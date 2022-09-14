import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDwkNo_sTOa_ByZUqMYlAt_tOWdv3Rb8Y",
  authDomain: "manufacturer-411a6.firebaseapp.com",
  projectId: "manufacturer-411a6",
  storageBucket: "manufacturer-411a6.appspot.com",
  messagingSenderId: "759882203759",
  appId: "1:759882203759:web:0075aa924934b9d81ac39a",
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;