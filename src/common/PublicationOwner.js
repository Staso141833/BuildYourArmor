import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useParams } from "react-router-dom";
import { auth, db } from "../config/firebase.js";

export const PublicationOwner = ({ children }) => {
  const [currentPublication, setCurrentPublication] = useState({});
  const { publicationId } = useParams();

  const userId = auth?.currentUser?.uid;
  useEffect(() => {
    const docRef = doc(db, "publications", publicationId);
    const getPublication = async () => {
      const data = await getDoc(docRef);

      setCurrentPublication(data.data());
    };

    getPublication();
  }, [publicationId]);

  if (currentPublication && currentPublication._ownerId !== userId) {
    return <Navigate to={`/catalog/${publicationId}`} replace />;
  }
  return children ? children : <Outlet />;
};
