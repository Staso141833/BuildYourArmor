import { auth, db } from "../config/firebase.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

export const publicationServiceFactory = () => {
  const publicationsCollectionRefference = collection(db, "publications");

  const getAll = async () => {
    const data = await getDocs(publicationsCollectionRefference);

    return data;
  };

  const getOne = async (publicationId) => {
    const docRefference = doc(db, "publications", publicationId);
    const data = await getDoc(docRefference);
    return data;
  };

  const create = async (newPublication) => {
    const ownerId = auth?.currentUser?.uid;

    newPublication["_ownerId"] = ownerId;

    const docRefference = collection(db, "publications");
    const data = await addDoc(docRefference, newPublication);
    return data;
  };

  const edit = async (publicationId, updatedPublication) => {
    const docRefference = doc(db, "publications", publicationId);
    const data = await updateDoc(docRefference, updatedPublication);
    return data;
  };

  const deletePublication = (id) => {
    const docRefference = doc(db, "publications", id);
    return deleteDoc(docRefference);
  };

  return {
    getOne,
    getAll,
    create,
    edit,
    delete: deletePublication,
  };
};
