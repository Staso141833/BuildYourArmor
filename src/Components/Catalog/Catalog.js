import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { CatalogItem } from "./CatalogItem.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar.js";
import "./catalog.css";
import {
  boxStyles,
  noPublicationsStyles,
  publicationMainStackStyles,
  publicationStackStyles,
} from "./catalog.styles.js";

export const Catalog = () => {
  const [publications, setPublications] = useState([]);
  const publicationsCollectionRefference = collection(db, "publications");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getPublications = async () => {
        const data = await getDocs(publicationsCollectionRefference);
        setIsLoading(false);
        setPublications(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      };
      getPublications();
    } catch (error) {
      setIsLoading(false);
      window.alert(error);
    }
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Box sx={boxStyles}>
        <Stack sx={{ width: "50%", height: "26vh" }}>
          <Stack sx={{ height: "100%" }}>
            <SearchBar publications={publications} />
          </Stack>

          {publications.length === 0 && (
            <Typography variant="h2" component="div" sx={noPublicationsStyles}>
              No publications yet. Would you like yours to be the first?
              <Link to="/create">Click here!</Link>
            </Typography>
          )}
        </Stack>
        {isLoading ? (
          <Stack sx={{ height: "80vh" }}>
            <CircularProgress color="success" />
          </Stack>
        ) : (
          <Stack sx={publicationMainStackStyles}>
            <Stack sx={publicationStackStyles}>
              {publications.map((publication) => (
                <CatalogItem key={publication.id} {...publication} />
              ))}
            </Stack>
          </Stack>
        )}
      </Box>
    </motion.div>
  );
};
{
  /* <Masonry columns={5} spacing={4} sx={{ margin: "12px 18px" }}> */
}
