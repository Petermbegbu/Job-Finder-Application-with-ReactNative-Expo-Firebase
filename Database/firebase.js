// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzz0YW9gDH17NVAA7WhtTv1c4gy3VopgQ",
  authDomain: "fir-auth-d8bed.firebaseapp.com",
  projectId: "fir-auth-d8bed",
  storageBucket: "fir-auth-d8bed.appspot.com",
  messagingSenderId: "978502129146",
  appId: "1:978502129146:web:532668a22fddb953a84043",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
