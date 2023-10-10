import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//you must create your own firebase config object
import { firebaseConfig } from "../../firebaseConfig.js";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
