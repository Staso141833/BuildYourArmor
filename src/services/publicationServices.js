import { db } from "../config/firebase.js";
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
    const docRefference = doc(db, "publications", publicationId);
    const data = await getDoc(docRefference);
    return data;
  };

  const create = async (newPublication) => {
    const docRefference = collection(db, "publications");
    const data = await addDoc(docRefference, newPublication);

    return data;
  };

  const edit = async (publicationId, updatedPublication) => {
    const docRefference = doc(db, "publications", publicationId);
    const data = await updateDoc(docRefference, updatedPublication);
    return data;
  };

  // const onPublicationEditSubmit = async (values) => {
  //   const publicationDoc = doc(db, "publications", publicationId);
  //   await updateDoc(publicationDoc, values);
  //   navigate(`/catalog/${publicationId}`);
  // };

  const deletePublication = async (id) => {
    const docRefference = doc(db, "publications", id);
    const data = await deleteDoc(docRefference);
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
