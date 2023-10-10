import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

import { useParams } from "react-router-dom";
import { useState } from "react";

export const getAll = async (publicationId) => {
  const q = query(collection(db, `publications/${publicationId}/comments`));

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
};


// const [comments, setComments ] = useState()
// export const onCommentSubmit = async (values, publicationId) => {

//   const newComment = await setDoc(
//     doc(
//       db,
//       `publications/${publicationId.publicationId}/comments`,
//       values.newComment
//     ),
//     { comment: values.newComment }
//   );

//   setComments((state) => [...state, newComment]);
// };

// export const create = async (values, publicationId) => {
//   const data = await setDoc(
//     doc(db, `publications/${publicationId}/comments`, values.newComment), {values.newComment}
//   );

// return data;
// };
