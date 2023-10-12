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
  const data = querySnapshot?.docs?.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return data;
};

// useEffect(() => {
//   const test = async () => {
//     const data = await publicationService.getAll();

//     console.log(data.docs);

//     setPublications(
//       data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
//     );
//   };

//   test();
// }, []);

// export const getAll = async (publicationId) => {

//   const q = query(collection(db, `publications/${publicationId}/comments`));

//   const querySnapshot = await getDocs(q);
//   console.log(querySnapshot.docs[1].id)
//   const data = querySnapshot?.docs?.map((doc) => ({
//     ...doc.data(),
//     id: doc.id,
//   }));

//   console.log(data);
//   return data;
// };
