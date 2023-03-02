// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdkLh5wLY5Prn2glEYGVKsFKzESS_YbBE",
  authDomain: "netflix-clone-d00ab.firebaseapp.com",
//   databaseURL: "https://netflix-clone-d00ab.firebaseio.com",
  projectId: "netflix-clone-d00ab",
  storageBucket: "netflix-clone-d00ab.appspot.com",
  messagingSenderId: "109199999999",
  appId: "1:566610032348:web:3991e763fabefb0f28e619"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }