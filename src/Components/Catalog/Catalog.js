import { Masonry } from "@mui/lab";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { CatalogItem } from "./CatalogItem.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SearchBar } from "./SearchBar.js";
import { boxStyles, noPublicationsStyles } from "./catalog.styles.js";

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
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
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
          <Stack sx={{ marginLeft: "64px", marginRight: "64px" }}>
            <Masonry columns={5} spacing={4} sx={{ margin: "12px 18px" }}>
              {publications.map((publication) => (
                <CatalogItem key={publication.id} {...publication} />
              ))}
            </Masonry>
          </Stack>
        )}
      </Box>
    </motion.div>
  );
};
