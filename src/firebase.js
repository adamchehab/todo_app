// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIfn-0Xgg1VIIBzZw1mOfZ4ImojU5U6L8",
  authDomain: "todo-app-9bfca.firebaseapp.com",
  projectId: "todo-app-9bfca",
  storageBucket: "todo-app-9bfca.appspot.com",
  messagingSenderId: "564913667675",
  appId: "1:564913667675:web:4e39dc0511aec797b0097e",
  measurementId: "G-EJYWRTHVG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);