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
import { useContext, useState } from "react";



export const getAll = async (publicationId, userId, userEmail) => {
  
  const q = query(collection(db, `publications/${publicationId}/comments`));

  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot.docs[0])
  // const currentUser = querySnapshot.docs[0]._userDataWriter.firestore._authCredentials.currentUser.uid
  // console.log(querySnapshot.docs[0].data())
  // const data = querySnapshot?.docs?.map((doc) => ({
  //   author:{ email: userEmail, _id: userId},
  //   ...doc.data(),
  //   id: doc.id,
  //   ["_ownerId"]:userId,
  // }));

  const data = querySnapshot?.docs?.map((doc) => ({
    ...doc.data(),
    _id: doc.id,
  }))

  console.log(data);

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
