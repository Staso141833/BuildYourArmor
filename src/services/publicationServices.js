import { db } from "../config/firebase.js";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const publicationServiceFactory = (token) => {
  const publicationsCollectionRefference = collection(db, "publications");

  const getAll = async () => {
    const data = await getDocs(publicationsCollectionRefference);

    return data;
  };

  const getOne = async (publicationId) => {
    const publicationDoc = doc(db, "publications", publicationId);
    const data = await getDoc(publicationDoc);
    return data;
  };

  const create = async (newPublication) => {
    const publicationsCollectionRefference = collection(db, "publications");
    const data = await addDoc(publicationsCollectionRefference, newPublication);

    return data;
  };
  const edit = async (id, updatedPublication) => {
    const publicationDoc = doc(db, "publications", id);
    const data = await updateDoc(publicationDoc, updatedPublication);
    return data;
  };

  const deletePublication = async (id) => {
    const publicationDoc = doc(db, "publications", id);
    const data = await deleteDoc(publicationDoc);
    return data;
  };

  return {
    getOne,
    getAll,
    create,
    edit,
    delete: deletePublication,
  };
};
