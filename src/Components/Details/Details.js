import {
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
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../config/firebase.js";
import { publicationServiceFactory } from "../../services/publicationServices.js";
import { usePublicationContext } from "../../contexts/PublicationContext.js";
import * as commentService from "../../services/commentService.js";
import { AddComent } from "./AddComment.js";
import { publicationReducer } from "../../reducers/publicationReducer.js";
import { useCollectionData } from "react-firebase-hooks/firestore";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Details = () => {
  const publicationService = publicationServiceFactory();
  const { publicationId } = useParams();

  const [publication, dispatch] = useReducer(publicationReducer, {
    comments: [],
  });
  const { deletePublication } = usePublicationContext();

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      getPublication(publicationId),
      commentService.getAll(publicationId),
    ]).then(([publicationData, comments]) => {
      console.log(comments);
      const publicationState = {
        ...publicationData,
        comments,
      };

      dispatch({ type: "PUBLICATION_FETCH", payload: publicationState });
    });
  }, [publicationId]);

  const isAuthenticated = auth?.currentUser?.uid;
  const isOwner = publication._ownerId === auth?.currentUser?.uid;
  const userEmail = auth?.currentUser?.email;
  const ownerId = publication._ownerId;

  const onCommentSubmit = async (comment) => {
    const docRefference = collection(
      db,
      `publications/${publicationId}/comments`
    );

    const copyOfComment = comment.comment;

    const data = await addDoc(docRefference, comment);
    console.log(data);
    console.log(data.id);

    const commentId = data.id;
    const updatedInfo = {
      ["_ownerId"]: ownerId,
      ["_commentId"]: commentId,
      publicationId,
      comment: copyOfComment,
    };

    console.log(updatedInfo);
    console.log(userEmail);
    dispatch({
      type: "COMMENT_ADD",
      payload: updatedInfo,
      userEmail,
    });
  };

  const getPublication = async () => {
    const docRef = doc(db, "publications", publicationId);
    const data = await getDoc(docRef);

    return data.data();
  };

  const onDeleteClick = () => {
    const result = "Are you sure you want to delete this furniture?";

    if (result) {
      deletePublication(publicationId);
      publicationService.delete(publicationId);
      navigate("/catalog");
    }
  };

  console.log(publication);

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
                height: "76vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
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
                <Typography gutterBottom variant="h4" component="div">
                  Muscle: {publication.muscleGroup}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Weight: {publication.weight}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Height: {publication.height}
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
                      href={`/catalog/${publicationId}/edit`}
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
                      onClick={onDeleteClick}
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
                      mb: 3,
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
            {isAuthenticated && (
              <div>
                <AddComent onCommentSubmit={onCommentSubmit} />
              </div>
            )}
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
              {!publication.comments?.length && (
                <Typography variant="h5" sx={{ textShadow: "14px 10px 18px" }}>
                  No comments yet. Be the first one who will give an opinion!
                </Typography>
              )}

              <Stack sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {publication?.comments?.map((comment) => (
                  <li key={comment._commentId}>
                    <Typography
                      variant="p"
                      sx={{
                        width: "80%",
                        fontSize: "18px",
                        color: myColors.black,
                        margin: "12px 0px",
                      }}
                    >
                      {publication?.author?.email} commented: {comment.comment}{" "}
                      <Button sx={{ backgroundColor: myColors.gold }}>
                        Like
                      </Button>
                    </Typography>
                  </li>
                ))}
              </Stack>

              {/* {loading && "Loading...
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
                {querySnapshot?.map((doc) => (
                  <Typography
                    variant="p"
                    sx={{
                      width: "80%",
                      fontSize: "20px",
                      color: myColors.white,
                      margin: "12px 0px",
                    }}
                  >
                    {doc.name}
                  </Typography>
                ))}
              </Stack> */}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

// const navigate = useNavigate();
// useEffect(() => {
//   const docRef = doc(db, "publications", publicationId);
//   const getPublication = async () => {
//     const data = await getDoc(docRef);

//     setPublication(data.data());
//   };

//   getPublication();
// }, [publicationId]);

// const onDeletePublication = async () => {
//   const publicationDoc = doc(db, "publications", publicationId);
//   window.alert("Are you sure you want to delete this publication?");
//   await deleteDoc(publicationDoc);
//   navigate("/catalog");
// };

//   Promise.all([
//     publicationService.getOne(publicationId),
//     commentService.getAll(publicationId),
//   ]).then(([publicationData, comments]) => {
//     const publicationState = {
//       ...publicationData,
//       comments,
//     };
//     dispatch({ type: "PUBLICATION_FETCH", payload: publicationState });
//   });
// }, [publicationId]);

// onCommentSubmit last update

// const onCommentSubmit = async (values) => {
//   const response = await setDoc(
//     doc(db, `publications/${publicationId}/comments`, values.newComment),
//     { comment: values.newComment }
//   );

//   console.log(response);

//   const updatedInfo = {
//     ownerId,
//     publicationId,
//     response,
//   };

//   console.log(updatedInfo);
//   dispatch({
//     type: "COMMENT_ADD",
//     payload: updatedInfo,
//     userEmail,
//   });
// };
