// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYJV_0hmBM2Otqu9oWje7oOY6t0ZI1sCo",
  authDomain: "job-portal-473f1.firebaseapp.com",
  projectId: "job-portal-473f1",
  storageBucket: "job-portal-473f1.appspot.com",
  messagingSenderId: "360420092320",
  appId: "1:360420092320:web:5f9a9b3b7e8343d0011cc5",
  measurementId: "G-GJZLJL0NSF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
const analytics = getAnalytics(app);
