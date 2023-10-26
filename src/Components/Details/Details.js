import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Timestamp,
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../config/firebase.js";
import { publicationServiceFactory } from "../../services/publicationServices.js";
import { usePublicationContext } from "../../contexts/PublicationContext.js";
import * as commentService from "../../services/commentService.js";
import { AddComent } from "./AddComment.js";
import { publicationReducer } from "../../reducers/publicationReducer.js";
import { colors } from "../../metaData/colors.js";

import { Like } from "./Like.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { EditAndDelete } from "./EditAndDelete.js";
import { FingerprintRounded } from "@mui/icons-material";

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
  const { userEmail, isAuthenticated, userId } = useAuthContext();
  const [publication, dispatch] = useReducer(publicationReducer, {});
  const { deletePublication } = usePublicationContext();

  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      getPublication(publicationId),
      commentService.getAll(publicationId, userId, userEmail),
    ]).then(([publicationData, commentsData]) => {
      publicationData["_id"] = publicationId;
      const comments = commentsData;
      const publicationState = {
        ...publicationData,
        comments,
      };

      dispatch({ type: "PUBLICATION_FETCH", payload: publicationState });
    });
  }, [publicationId]);

  const ownerId = publication._ownerId;
  const isOwner = ownerId === userId;

  const onCommentSubmit = async (comment) => {
    const docRefference = collection(
      db,
      `publications/${publicationId}/comments`
    );
    const commentInfo = {
      email: userEmail,
      createdBy: userId,
      publicationId,
      comment,
    };

    const data = await addDoc(docRefference, {
      comment: comment.comment,
      author: { email: commentInfo.email },
      createdBy: commentInfo.createdBy,
      publicationId: commentInfo.publicationId,
      createdOn: Timestamp.now().toDate(),
      likes: [],
    });

    const commentId = data.id;
    commentInfo["_id"] = data.id;

    const myObject = {
      comment: comment.comment,
      createdBy: commentInfo.createdBy,
      publicationId: commentInfo.publicationId,
      createdOn: Timestamp.now().toDate(),
      ["_id"]: commentInfo._id,
      likes: [],
    };

    dispatch({
      type: "COMMENT_ADD",
      payload: myObject,
      userEmail,
    });
  };

  const getPublication = async () => {
    const docRef = doc(db, "publications", publicationId);
    const data = await getDoc(docRef);
    return data.data();
  };

  const onClickLikePublicationSubmit = async () => {
    const likesReference = doc(db, "publications", publicationId);

    const likesCount = publication.likes;

    if (likesCount?.includes(userId)) {
      updateDoc(likesReference, {
        likes: arrayRemove(userId),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch({
        type: "PUBLICATION_LIKE_REMOVE",
        payload: userId,
      });
    } else {
      updateDoc(likesReference, {
        likes: arrayUnion(userId),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch({
        type: "PUBLICATION_LIKE_ADD",
        payload: userId,
      });
    }
  };

  const onClickLikeCommentSubmit = async (commentId, likesCount) => {
    const likesReference = doc(
      db,
      `publications/${publicationId}/comments`,
      commentId
    );

    if (likesCount.includes(userId)) {
      updateDoc(likesReference, {
        likes: arrayRemove(userId),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch({
        type: "COMMENT_LIKES_REMOVE",
        payload: userId,
        commentId,
      });
    } else {
      updateDoc(likesReference, {
        likes: arrayUnion(userId),
      })
        .then(() => {
          console.log("liked");
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch({
        type: "COMMENT_LIKES_ADD",
        payload: userId,
        commentId,
      });
    }
  };

  const onClickEditCommentSubmit = async (values) => {
    const newComment = values.comment;
    const commentId = values._id;
    const docRefference = doc(
      db,
      `publications/${publicationId}/comments`,
      commentId
    );
    const data = await updateDoc(docRefference, values);

    dispatch({
      type: "COMMENT_EDIT",
      payload: newComment,
      commentId,
    });
  };

  console.log(publication);
  const onDeleteClick = async () => {
    const caution = window.confirm(
      "Are you sure you want to delete this public?"
    );

    if (caution) {
      await publicationService.delete(publication._id);
      deletePublication(publication._id);
      navigate("/catalog");
    }
  };

  const onDeleteCommentClick = async (commentId, publicationId) => {
    const caution = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (caution) {
      console.log(commentId);
      console.log(publicationId);
      await commentService.deleteComment(commentId, publicationId);

      dispatch({ type: "COMMENT_DELETE", commentId });
    }
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
            width: "100%",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              width: "48%",
              flexDirection: "column",
              gap: 1,
              marginBottom: 1,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Card
              sx={{
                height: "80vh",
                width: "auto",
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
                <Typography gutterBottom variant="h5" component="div">
                  Muscle: {publication.muscleGroup}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Weight: {publication.weight}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  Height: {publication.height}
                </Typography>
                <Typography variant="h5">
                  {publication?.likes?.length} likes
                </Typography>
              </CardContent>

              <CardActions
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 1.5,
                  width: "100%",
                }}
              >
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "100%",
                    gap: 1,
                    margin: 1,
                    mb: 1,
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
                        textTransform: "uppercase",
                        fontSize: "12px",
                        "&:hover": {
                          backgroundColor: myColors["light-silver"],
                          color: myColors.black,
                        },
                      }}
                    >
                      Add publication
                    </Link>
                  )}
                  {isAuthenticated && (
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: colors.gold,
                        width: "100px",
                        height: "auto",
                      }}
                      onClick={onClickLikePublicationSubmit}
                      style={{
                        cursor: "pointer",
                        color: publication?.likes?.includes(userId)
                          ? myColors.black
                          : myColors["dark-silver"],
                      }}
                    >
                      <FingerprintRounded></FingerprintRounded>
                    </Button>
                  )}
                </Stack>
              </CardActions>
            </Card>
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
                  Explanation of the exercise
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
            </Stack>
          </Stack>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              alignContent: "flex-start",
              width: "48%",
              gap: 2,
            }}
          >
            <Stack sx={{ width: "50%" }}>
              {isAuthenticated && (
                <AddComent onCommentSubmit={onCommentSubmit} />
              )}
            </Stack>
            <Typography
              variant="h5"
              sx={{
                letterSpacing: 4,
                textTransform: "uppercase",

                textAlign: "center",
                color: myColors["dark-silver"],
                fontWeight: "bold",
              }}
            >
              Comments
            </Typography>
            <Stack>
              {!publication.comments?.length && (
                <Typography variant="h5" sx={{ textShadow: "14px 10px 18px" }}>
                  No comments yet. Be the first one who will give an opinion!
                </Typography>
              )}
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
                width: "100%",
              }}
            >
              {publication?.comments?.map((comment) => (
                <ListItem key={comment?._id} sx={{ width: "100%" }}>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "60%",
                      alignItems: "center",
                      backgroundColor: colors.black,
                      color: colors.white,
                      padding: 1,
                      borderRadius: 1,
                    }}
                  >
                    {comment?.author?.email} commented on{" "}
                    {comment.createdOn.toDate().toDateString()}:
                    {/* {comment?.createdOn.toDate().toDateString()}: */}
                    {comment?.comment}
                    <Stack
                      sx={{ display: "flex", flexDirection: "row", gap: 1 }}
                    >
                      {userId && (
                        <Like
                          commentId={comment?._id}
                          likesCount={comment?.likes}
                          publicationId={publicationId}
                          onClickLikeCommentSubmit={onClickLikeCommentSubmit}
                        />
                      )}
                      {comment.createdBy === userId && (
                        <EditAndDelete
                          commentId={comment._id}
                          onClickEditCommentSubmit={onClickEditCommentSubmit}
                          onDeleteCommentClick={onDeleteCommentClick}
                          publicationId={publicationId}
                        />
                      )}
                    </Stack>
                  </Stack>
                </ListItem>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
