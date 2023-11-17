import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { publicationServiceFactory } from "../services/publicationServices.js";

export const PublicationContext = createContext();

export const PublicationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const publicationService = publicationServiceFactory();

  useEffect(() => {
    const test = async () => {
      const data = await publicationService.getAll();

      const newData = data?.docs?.map((doc) => ({ ...doc.data(), id: doc.id }));

      setPublications(newData);
    };

    test();
  }, []);

  const onCreatePublicationSubmit = async (data) => {
    const newPublication = await publicationService.create(data);

    setPublications((state) => {
      console.log(state);
      return [...state, newPublication];
    });

    navigate("/catalog");
  };

  const onPublicationEditSubmit = async (values) => {
    
      const result = await publicationService.edit(values._id, values);
      setPublications((state) =>
        state?.map((oldPublication) =>
          oldPublication?._id === values?._id ? result : oldPublication
        )
      );

       navigate(`/catalog/${values._id}`);
   
  };

  const getPublication = (publicationId) => {
    return publications.find((publication) => publication.id === publicationId);
  };

  const deletePublication = (publicationId) => {
    setPublications((state) =>
      state.filter((publication) => publication.id !== publicationId)
    );
  };

  const contextValues = {
    publications,
    onCreatePublicationSubmit,
    onPublicationEditSubmit,
    getPublication,
    deletePublication,
  };

  return (
    <PublicationContext.Provider value={contextValues}>
      {children}
    </PublicationContext.Provider>
  );
};

export const usePublicationContext = () => {
  const context = useContext(PublicationContext);

  return context;
};
