// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoYR6dI2Bfwi2Fst8UL2sAwE9Ux7buWs8",
  authDomain: "twitter-clone-cd759.firebaseapp.com",
  projectId: "twitter-clone-cd759",
  storageBucket: "twitter-clone-cd759.appspot.com",
  messagingSenderId: "52137027537",
  appId: "1:52137027537:web:10475206e5960e65ea22f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
