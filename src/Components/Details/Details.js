import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../config/firebase.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Details = () => {
  const [publication, setPublication] = useState({});

  const { publicationId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    const docRef = doc(db, "publications", publicationId);
    const getPublication = async () => {
      const data = await getDoc(docRef);

      setPublication(data.data());
    };

    getPublication();
  }, []);

  const isOwner = publication._ownerId === auth?.currentUser?.uid;

  const onDeleteMovie = async () => {
    const publicationDoc = doc(db, "publications", publicationId);
    await deleteDoc(publicationDoc);
    navigate("/catalog")
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginTop: 4,
            width: "90%",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              marginBottom: 2,
            }}
          >
            <Card
              sx={{
                height: "70vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ objectFit: "cover", height: "65%" }} //fill, cover, contain, none, scale-down
                component="img"
                image={publication.imageUrl}
              ></CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Author: {publication.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Height: {publication.height}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Wight: {publication.weight}
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 1.5,
                  width: "40%",
                  gap: 1,
                }}
              >
                {isOwner && (
                  <>
                    <Link
                      href="/edit"
                      variant="contained"
                      sx={{
                        backgroundColor: myColors.black,
                        color: myColors["light-silver"],
                        fontWeight: "bold",
                        transition: "all 300ms",
                        padding: "12px",
                        textDecoration: "none",
                        width: "40%",
                        borderRadius: "6px",
                        textTransform: "uppercase",
                        fontSize: "16px",
                        "&:hover": {
                          backgroundColor: myColors["light-silver"],
                          color: myColors.black,
                        },
                      }}
                    >
                      Edit
                    </Link>
                    <Button
                      variant="contained"
                      onClick={onDeleteMovie}
                      sx={{
                        backgroundColor: myColors.black,
                        color: myColors["light-silver"],
                        fontWeight: "bold",
                        transition: "all 300ms",
                        width: "40%",
                        padding: "9px",
                        fontFamily: "Robotto",
                        "&:hover": {
                          backgroundColor: myColors["light-silver"],
                          color: myColors.black,
                        },
                      }}
                    >
                      Delete
                    </Button>
                  </>
                )}
                {!isOwner && (
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
                      textTransform: "uppercase",
                      fontSize: "16px",
                      "&:hover": {
                        backgroundColor: myColors["light-silver"],
                        color: myColors.black,
                      },
                    }}
                  >
                    Add publication
                  </Link>
                )}
              </CardActions>
            </Card>

            <Accordion
              sx={{
                width: "100%",
                backgroundColor: myColors.gold,
                marginBottom: "124px",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <AccordionSummary
                id="panel1-header"
                aria-controls="panel1-content"
                disableGutters="false"
                expandIcon={<ExpandMore />}
              >
                {" "}
                <Typography>Write your comment...</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TextField
                  label="My comment"
                  variant="outlined"
                  placeholder="My comment"
                  multiline
                  rows={6}
                  sx={{ height: "240px", width: "80%" }}
                />
              </AccordionDetails>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: myColors.black,
                  color: myColors["light-silver"],
                  fontWeight: "bold",
                  transition: "all 300ms",
                  width: "34%",
                  marginBottom: 4,
                  "&:hover": {
                    backgroundColor: myColors["light-silver"],
                    color: myColors.black,
                  },
                }}
              >
                Comment
              </Button>
            </Accordion>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              width: "50%",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                width: "80%",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: myColors.gold,
                  fontWeight: "bold",
                }}
              >
                Explanation
              </Typography>
              <Typography
                variant="p"
                sx={{
                  width: "80%",
                  fontSize: "20px",
                  border: "4px inset",
                  borderColor: myColors.gold,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: myColors.white,
                  padding: "12px 0px",
                }}
              >
                {publication.description}
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
                gap: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: myColors["dark-silver"],
                  fontWeight: "bold",
                }}
              >
                Comments
              </Typography>
              <Stack
                sx={{
                  border: "4px inset",
                  borderColor: myColors.gold,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "80%",
                  backgroundColor: myColors.black,
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    width: "80%",
                    fontSize: "20px",
                    color: myColors.white,
                    margin: "12px 0px",
                  }}
                >
                  {" "}
                  Emil Ushev: Amazing excercice! I do it every time I go into
                  the gym. Thank you!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    width: "80%",
                    fontSize: "20px",
                    color: myColors.white,
                    margin: "12px 0px",
                  }}
                >
                  {" "}
                  Rado Pankov: Great excercice! I do it every time I go into the
                  gym. Thank you!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    width: "80%",
                    fontSize: "20px",
                    color: myColors.white,
                    margin: "12px 0px",
                  }}
                >
                  {" "}
                  Michail Ushev: Amazing excercice! I do it every time I go into
                  the gym. Thank you!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    width: "80%",
                    fontSize: "20px",
                    color: myColors.white,
                    margin: "12px 0px",
                  }}
                >
                  {" "}
                  Michail Ushev: Amazing excercice! I do it every time I go into
                  the gym. Thank you!
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    width: "80%",
                    fontSize: "20px",
                    color: myColors.white,
                    margin: "12px 0px",
                  }}
                >
                  {" "}
                  Michail Ushev: Amazing excercice! I do it every time I go into
                  the gym. Thank you!
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
