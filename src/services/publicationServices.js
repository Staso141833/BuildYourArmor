import { db } from "../config/firebase.js";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const publicationCollectionRef = collection(db, "publications");

class PublicationDataService {
  createPublication = async (newPublication) => {
    await addDoc(publicationCollectionRef, newPublication);
    const navigate = useNavigate();
    navigate("/catalog");
    return addDoc(publicationCollectionRef, newPublication);
  };
  updatePublication = (id, updatedPublication) => {
    const publicationDoc = doc(db, "publications", id);
    const navigate = useNavigate();
    navigate("/catalog");
    return updateDoc(publicationDoc, updatedPublication);
  };
  deletePublication = (id) => {
    const publicationDoc = doc(db, "publications", id);
    return deleteDoc(publicationDoc);
  };

  getAllPublications = () => {
    return getDocs(publicationCollectionRef);
  };
  getPublication = (id) => {
    const publicationDoc = doc(db, "publications", id);
    return getDoc(publicationDoc);
  };
}

export default new PublicationDataService();
