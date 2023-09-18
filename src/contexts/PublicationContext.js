import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { publicationServiceFactory } from "../services/publicationServices.js";

export const PublicationContext = createContext();

export const PublicationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [publications, setPublications] = useState([]);
  const publicationService = publicationServiceFactory();

  useEffect(() => {
    publicationService.getAll().then((result) => {
      setPublications(result);
    });
  }, []);

  const onCreatePublicationSubmit = async (data) => {
    console.log(data);
    const newPublication = await publicationService.create(data);
    //setPublications(newPublication);
    setPublications((state) => [...state, newPublication]);

    navigate("/catalog");
  };

  const onPublicationEditSubmit = async (values) => {
    const result = await publicationService.edit(values._id, values);

    setPublications(result);
    //  setPublications((state) =>
    //    state?.map((oldPublication) =>
    //      oldPublication._id === values._id ? result : oldPublication
    //    )
    //  );
    navigate(`/catalog/${values._id}`);
  };

  const getPublication = (publicationId) => {
    return publications.find((publication) => publication.id === publicationId);
  };

  const deletePublication = (publicationId) => {
    const caution = window.confirm(
      "Are you sure you want to delete this public?"
    );
    if (caution) {
      setPublications((state) =>
        state.filter((publication) => publication.id !== publicationId)
      );
    }
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
