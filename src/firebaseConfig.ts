import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
//find a way to hide all of this info
const firebaseConfig = {
  apiKey: "AIzaSyB1k-TFM6cFPc6pHaZu5T5opWAIQTSLbJI",
  authDomain: "testing123-9e315.firebaseapp.com",
  projectId: "testing123-9e315",
  storageBucket: "testing123-9e315.appspot.com",
  messagingSenderId: "147379738798",
  appId: "1:147379738798:web:2cc48c1fe39d64d87a353f",
  measurementId: "G-9Q6TV15FSX",
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);