import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

import { useParams } from "react-router-dom";

export const getAll = async (publicationId) => {
  console.log(publicationId);
  const docRefference = doc(db, `publications/${publicationId}/comments`);
  const result = await getDocs(docRefference);

  return result;
};

// export const create = async (values, publicationId) => {
//   const data = await setDoc(
//     doc(db, `publications/${publicationId}/comments`, values.newComment), {values.newComment}
//   );

  // return data;
// };
