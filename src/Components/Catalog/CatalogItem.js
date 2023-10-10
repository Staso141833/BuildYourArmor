import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Button,
} from "@mui/material";
import { deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.js";
import { useEffect, useState } from "react";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const CatalogItem = ({
  id,
  name,
  imageUrl,
}) => {
  // const [publicationId, setPublicationId] = useState();

  // useEffect(() => {
  //   const getId = async () => {
  //     const docRef = doc(db, "publications", doc.id);
  //     const data = await getDoc(docRef);

  //     setPublicationId(data);
  //   };

  //   getId();
  // }, []);

  // const onConsole = () => {
  //   console.log(`${publicationId}`);
  // };

  return (
    <Box>
      <Card
        sx={{
          border: "1px outset  silver",
          backgroundColor: myColors.white,
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={imageUrl}
          sx={{ opacity: 0.8 }}
        ></CardMedia>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
              {publication.muscleGroup}
            </Typography> */}
          <Typography variant="h4">{name}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 1.5,
          }}
        >
          <Link
            href={`/catalog/${id}`}
            variant="contained"
            sx={{
              backgroundColor: myColors.black,
              color: myColors.gold,
              fontWeight: "bold",
              textDecoration: "none",
              padding: "12px 16px",
              borderRadius: "4px",
            }}
          >
            Details
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};
