import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import publicationServiceFactory from "../services/publicationServices.js";

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
    const newPublication = await publicationService.create(data);
    setPublications((state) => [...state, newPublication]);
    navigate("/catalog");
  };

  const onPublicationEditSubmit = async (values) => {
    const result = await publicationService.edit(values.id, values);
    setPublications((state) =>
      state.map((oldPublication) =>
        oldPublication.id === values.id ? result : oldPublication
      )
    );
    navigate(`/catalog/$${values.id}`);
  };

  const contextValues = {
    publications,
    onCreatePublicationSubmit,
    onPublicationEditSubmit,
  };
};

export const usePublicationContext = () => {
  const context = useContext(PublicationContext);

  return context;
};
