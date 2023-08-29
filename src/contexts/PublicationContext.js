import { doc, getDoc } from "firebase/firestore";
import { createContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase.js";

export const PublicationContext = createContext();

export const PublicationProvider = ({ children }) => {
  
    

  const docRef = doc(db, "publications", doc.id)
  const publicationId = getDoc(docRef);
};
