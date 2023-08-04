
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBG53h9rgjg3n6cXTYBesQz-u6SM3YVhVI",
  authDomain: "buildyourarmour-cdde4.firebaseapp.com",
  projectId: "buildyourarmour-cdde4",
  storageBucket: "buildyourarmour-cdde4.appspot.com",
  messagingSenderId: "101694757554",
  appId: "1:101694757554:web:5f98cf73117350803a87ab",
  measurementId: "G-YG6W6F6YVC"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

