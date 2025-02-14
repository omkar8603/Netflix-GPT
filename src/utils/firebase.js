// Import the functions you need from the SDKs you need
import { getAuth,  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBJ0xvBLHmj1FcBiCqtYGHdTTnzB4tj5g",
  authDomain: "netflix-gpt-879fa.firebaseapp.com",
  projectId: "netflix-gpt-879fa",
  storageBucket: "netflix-gpt-879fa.firebasestorage.app",
  messagingSenderId: "459254127287",
  appId: "1:459254127287:web:33304ac6a49f94cbeacb32",
  measurementId: "G-J3L0P6MN7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

