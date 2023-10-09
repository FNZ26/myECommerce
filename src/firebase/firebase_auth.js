// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU1o8E8G6A4nyDUNYwm0NkkxVuEhlQ-2k",
  authDomain: "myecommerce-c435c.firebaseapp.com",
  databaseURL: "https://myecommerce-c435c-default-rtdb.firebaseio.com",
  projectId: "myecommerce-c435c",
  storageBucket: "myecommerce-c435c.appspot.com",
  messagingSenderId: "813279181779",
  appId: "1:813279181779:web:8d81d1a640a4303a180d26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app);