import { Masonry } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";
import { CatalogItem } from "./CatalogItem.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Catalog = () => {
  const [publications, setPublications] = useState([]);
  const publicationsCollectionRefference = collection(db, "publications");

  useEffect(() => {
    const getPublications = async () => {
      const data = await getDocs(publicationsCollectionRefference);

      setPublications(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPublications();
  }, []);



 
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 400,
        margin: "auto",
        backgroundColor: myColors.gold,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {publications.lenght === 0 && (
        <Typography
          variant="h2"
          component="div"
          sx={{
            flexGrow: 1,
            color: myColors.gold,
            fontSize: "30px",
            letterSpacing: "4px",
            fontWeight: "600",
            textTransform: "uppercase",
            textAlign: "center",
            fontFamily: "Robotto",
            textShadow: "2px 4px 4px",
          }}
        >
          No publications yet. Would you like yours to be the first?
        </Typography>
      )}
      <Masonry columns={4} spacing={4} sx={{ margin: "32px 48px" }}>
        {publications.map((publication) => (
          <CatalogItem key={publication.id} {...publication} />
        ))}
      </Masonry>
    </Box>
  );
};
