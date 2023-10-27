import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";


export const getAll = async (publicationId) => {
  const q = query(collection(db, `publications/${publicationId}/comments`));

  const querySnapshot = await getDocs(q);

  const data = querySnapshot?.docs?.map((doc) => ({
    ...doc.data(),
    _id: doc.id,
  }));

  return data;
};

export const getOneComment = async (commentId, publicationId) => {
  const docRefference = doc(
    db,
    `publications/${publicationId}/comments`,
    commentId
  );
  const data = await getDoc(docRefference);
  const result = data.data();
  console.log(result)
  return result;
};

export const deleteComment = (commentId, publicationId) => {
  const docRefference = doc(db, `publications/${publicationId}/comments`, commentId);
  return deleteDoc(docRefference);
};
