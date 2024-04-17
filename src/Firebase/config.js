// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZAt1wdE9nNyF3rxGkZXdIVbp7iReN_SA",
    authDomain: "reactdb-389e8.firebaseapp.com",
    projectId: "reactdb-389e8",
    storageBucket: "reactdb-389e8.appspot.com",
    messagingSenderId: "935167310218",
    appId: "1:935167310218:web:0dfde24a7e71035cc7f073",
    measurementId: "G-WLK3GH7LDJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
firebase.initializeApp(firebaseConfig);
// const projectAuth = firebase.auth();
const provider = new GoogleAuthProvider();
export { auth, provider };
// export { projectAuth };
export default app;
