
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-d2c1b.firebaseapp.com",
  projectId: "interviewai-d2c1b",
  storageBucket: "interviewai-d2c1b.firebasestorage.app",
  messagingSenderId: "466545422516",
  appId: "1:466545422516:web:69a4f6d88a768e547fe7e1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}