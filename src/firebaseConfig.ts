import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
//find a way to hide all of this info
const firebaseConfig = {
  apiKey: "AIzaSyB1K-TFM6cFpc6pHaZU5T5opWAiQTSLbJI",
  authDomain: "testing123-9e315.firebaseapp.com",
  projectId: "testing123-9e315",
  storageBucket: "testing123-9e315.firebasestorage.app",
  messagingSenderId: "147379738798",
  appId: "1:147379738798:web:2cc48c1fe39d64d87a353f",
  measurementId: "G-9Q6TV15FSX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = 'en';
export const firestore = getFirestore(app);
export {auth, provider};