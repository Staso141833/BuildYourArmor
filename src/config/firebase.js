import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7I2DlFxFQ1tW7HNkxZppWaQJfxfJYYAw",
  authDomain: "buildyourarmour2.firebaseapp.com",
  projectId: "buildyourarmour2",
  storageBucket: "buildyourarmour2.appspot.com",
  messagingSenderId: "419626318583",
  appId: "1:419626318583:web:807e717bc351809d6a71f2",
  measurementId: "G-SLPGGJ70NX",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
