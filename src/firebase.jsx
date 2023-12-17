// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSj7MSPLtIZiTImkdOuK9_M0woDqQkFC4",
  authDomain: "zenbazar-d16c1.firebaseapp.com",
  databaseURL: "https://zenbazar-d16c1-default-rtdb.firebaseio.com/",
  projectId: "zenbazar-d16c1",
  storageBucket: "zenbazar-d16c1.appspot.com",
  messagingSenderId: "226657646361",
  appId: "1:226657646361:web:bc3b09fb8982465ef97788",
  measurementId: "G-X4G0EWZ2WQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export { app , auth ,db};