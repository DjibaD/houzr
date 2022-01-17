import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaHv4Kh7QnhnpujJBsc4cjMeM8uTwOdeY",
  authDomain: "houzr-app.firebaseapp.com",
  projectId: "houzr-app",
  storageBucket: "houzr-app.appspot.com",
  messagingSenderId: "846397685594",
  appId: "1:846397685594:web:e4d3ec02f895fdbc1c3d63"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()