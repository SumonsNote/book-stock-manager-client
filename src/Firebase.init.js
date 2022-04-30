// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzaPpZbh2QFnFb-B_p1m-vpouURdZjJ30",
  authDomain: "book-stock-manager-ac2a5.firebaseapp.com",
  projectId: "book-stock-manager-ac2a5",
  storageBucket: "book-stock-manager-ac2a5.appspot.com",
  messagingSenderId: "526425161394",
  appId: "1:526425161394:web:aa484048705eac64a4d3ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;