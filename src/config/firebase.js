// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByadYcPNrAuhKj48s3JF4gchlzLNt48GI",
  authDomain: "vite-contact-9f8c9.firebaseapp.com",
  projectId: "vite-contact-9f8c9",
  storageBucket: "vite-contact-9f8c9.firebasestorage.app",
  messagingSenderId: "824418919566",
  appId: "1:824418919566:web:dc3232526f1b38279495df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);