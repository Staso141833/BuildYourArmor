import { Masonry } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { auth, db } from "../../config/firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";
import { CatalogItem } from "./CatalogItem.js";
import { usePublicationContext } from "../../contexts/PublicationContext.js";
import { Link } from "react-router-dom";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Catalog = () => {
  //const { publications } = usePublicationContext();
  // console.log(publications.data())
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
        backgroundColor: myColors.gold,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Stack sx={{ width: "100" }}>
        {publications.length === 0 && (
          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              color: myColors.black,
              fontSize: "24px",
              letterSpacing: "4px",
              fontWeight: "600",
              textTransform: "uppercase",
              fontFamily: "Robotto",
              textShadow: "2px 4px 4px",
              width: "100%",
            }}
          >
            No publications yet. Would you like yours to be the first?
            <Link
              href="/create"
              variant="contained"
              sx={{
                backgroundColor: myColors.black,
                color: myColors["light-silver"],
                fontWeight: "bold",
                transition: "all 300ms",
                padding: "12px",
                textDecoration: "none",
                width: "auto",
                borderRadius: "6px",
                mb: 3,
                textTransform: "uppercase",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: myColors["light-silver"],
                  color: myColors.black,
                },
              }}
            >
              Click here!
            </Link>
          </Typography>
        )}
      </Stack>
      <Masonry columns={4} spacing={4} sx={{ margin: "32px 48px" }}>
        {publications.map((publication) => (
          <CatalogItem key={publication.id} {...publication} />
        ))}
      </Masonry>
    </Box>
  );
};
