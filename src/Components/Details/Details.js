import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  LinearProgress,
  ListItem,
  Stack,
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
  updateDoc,
} from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../config/firebase.js";
import { publicationServiceFactory } from "../../services/publicationServices.js";
import { usePublicationContext } from "../../contexts/PublicationContext.js";
import * as commentService from "../../services/commentService.js";
import { AddComment } from "./addComment/AddComment.js";

import { publicationReducer } from "../../reducers/publicationReducer.js";

import "./details.css";
import { colors } from "../../metaData/colors.js";

import { Like } from "./like/Like.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { EditAndDelete } from "./editAndDelete/EditAndDelete.js";
import { ArrowUpward, FingerprintRounded } from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  addCommentStackStyles,
  authorAndLikesStyles,
  authorSyles,
  boxStyles,
  cardActionLikeButtonStyles,
  cardActionStackStyles,
  cardActionsStyles,
  cardMediaStyles,
  cardStyles,
  commentListItemStyles,
  commentStackStyles,
  commentsCountStackStyles,
  commentsTitleStyles,
  currentCommentAuthorStyles,
  currentCommentStackStyles,
  currentCommentTextStyles,
  editAndDeleteButtonStyles,
  excerciseExplanationStyles,
  explanationParagraphStyles,
  explanationStackStyles,
  likeEditDeleteStackStyles,
  mainStackStyles,
  rightStackStyles,
  rightStackStylesChild,
  secondaryStackStyles,
  typographyStyles,
} from "./details.styles.js";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLikeEditDelete, setIsLoadingLikeEditDelete] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    try {
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
        setIsLoading(false);

        dispatch({ type: "PUBLICATION_FETCH", payload: publicationState });
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [publicationId]);

  const getPublication = async () => {
    const docRef = doc(db, "publications", publicationId);
    const data = await getDoc(docRef);
    return data.data();
  };

  const ownerId = publication._ownerId;
  const isOwner = ownerId === userId;

  const onClickCommentSubmit = async (comment) => {
    setIsLoading(true);
    const docRefference = collection(
      db,
      `publications/${publicationId}/comments`
    );
    const commentInfo = {
      email: userEmail,
      createdBy: userId,
      publicationId,
      comment,
      createdOn: Timestamp.now().toDate().toDateString(),
    };

    try {
      setIsLoading(false);
      const data = await addDoc(docRefference, {
        comment: comment.comment,
        author: { email: commentInfo.email },
        createdBy: commentInfo.createdBy,
        publicationId: commentInfo.publicationId,
        createdOn: commentInfo.createdOn,
        likes: [],
      });

      commentInfo["_id"] = data.id;

      const myObject = {
        comment: comment.comment,
        createdBy: commentInfo.createdBy,
        publicationId: commentInfo.publicationId,
        createdOn: commentInfo.createdOn,
        ["_id"]: commentInfo._id,
        likes: [],
      };

      dispatch({
        type: "COMMENT_ADD",
        payload: myObject,
        userEmail,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const onClickPublicationLike = async () => {
    const likesReference = doc(db, "publications", publicationId);
    const likesCount = publication.likes;
    setIsLoading(true);

    try {
      setIsLoading(false);
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
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const onClickCommentLike = async (commentId, likesCount) => {
    const likesReference = doc(
      db,
      `publications/${publicationId}/comments`,
      commentId
    );
    setIsLoadingLikeEditDelete(true);

    try {
      setIsLoadingLikeEditDelete(false);
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
    } catch (error) {
      setIsLoadingLikeEditDelete(false);
      console.log(error);
    }
  };

  const onClickCommentEdit = async (values) => {
    const newComment = values.comment;
    const commentId = values._id;
    const docRefference = doc(
      db,
      `publications/${publicationId}/comments`,
      commentId
    );
    setIsLoadingLikeEditDelete(true);

    try {
      setIsLoadingLikeEditDelete(false);
      const uploadedData = await updateDoc(docRefference, values);

      dispatch({
        type: "COMMENT_EDIT",
        payload: newComment,
        commentId,
      });
    } catch (error) {
      setIsLoadingLikeEditDelete(false);
      console.log(error);
    }
  };

  const onClickPublicationDelete = async () => {
    const caution = window.confirm(
      "Are you sure you want to delete this publication?"
    );

    if (caution) {
      setIsLoading(true);
      try {
        setIsLoading(false);
        deletePublication(publication._id);
        await publicationService.delete(publication._id);
        navigate("/catalog");
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  const onClickCommentDelete = async (commentId, publicationId) => {
    setIsLoadingLikeEditDelete(true);

    const caution = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (caution) {
      try {
        setIsLoadingLikeEditDelete(false);
        await commentService.deleteComment(commentId, publicationId);

        dispatch({ type: "COMMENT_DELETE", commentId });
      } catch (error) {
        setIsLoadingLikeEditDelete(false);
        console.log(error);
      }
    } else {
      setIsLoadingLikeEditDelete(false);
    }
  };

  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      {isLoading ? (
        <Stack sx={{ height: "90vh" }}>
          <LinearProgress color="success"></LinearProgress>
        </Stack>
      ) : (
        <Box sx={boxStyles}>
          <Stack sx={mainStackStyles}>
            <Stack sx={secondaryStackStyles}>
              <Card sx={cardStyles}>
                <CardMedia
                  sx={cardMediaStyles}
                  component="img"
                  image={publication.imageUrl}
                ></CardMedia>
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={authorAndLikesStyles}
                  >
                    Author: {publication.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={typographyStyles}
                    component="div"
                  >
                    Muscle: {publication.muscleGroup}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={typographyStyles}
                    component="div"
                  >
                    Weight: {publication.weight}
                  </Typography>

                  <Typography
                    gutterBottom
                    sx={typographyStyles}
                    component="div"
                  >
                    Height: {publication.height}
                  </Typography>
                  <Typography sx={authorAndLikesStyles}>
                    {publication?.likes?.length} likes
                  </Typography>
                </CardContent>

                <CardActions sx={cardActionsStyles}>
                  <Stack sx={cardActionStackStyles}>
                    {isOwner && (
                      <>
                        <Button sx={editAndDeleteButtonStyles}>
                          <Link
                            to={`/catalog/${publicationId}/edit`}
                            className="edit-button"
                          >
                            Edit
                          </Link>
                        </Button>

                        <Button
                          variant="contained"
                          onClick={onClickPublicationDelete}
                          sx={editAndDeleteButtonStyles}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                    {!isOwner && (
                      <Link to="/create" className="add-button">
                        Add publication
                      </Link>
                    )}
                    {isAuthenticated && (
                      <Button
                        variant="outlined"
                        sx={cardActionLikeButtonStyles}
                        onClick={onClickPublicationLike}
                        style={{
                          cursor: "pointer",
                          color: publication?.likes?.includes(userId)
                            ? colors.gold
                            : colors.white,
                        }}
                      >
                        <FingerprintRounded
                          sx={{ fontSize: "17px" }}
                        ></FingerprintRounded>
                        Like
                      </Button>
                    )}
                  </Stack>
                </CardActions>
              </Card>
            </Stack>

            <Stack sx={rightStackStyles}>
              <Stack sx={rightStackStylesChild}>
                <Typography variant="h5" sx={excerciseExplanationStyles}>
                  Exercise explanation
                </Typography>
                <Stack sx={explanationStackStyles}>
                  <Typography variant="p" sx={explanationParagraphStyles}>
                    {publication.description}
                  </Typography>
                </Stack>

                <Stack sx={commentStackStyles}>
                  <Typography variant="h5" sx={commentsTitleStyles}>
                    Comments
                  </Typography>
                  {!publication.comments?.length && (
                    <Typography
                      variant="h5"
                      sx={{ textShadow: "14px 10px 18px" }}
                    >
                      No comments yet. Be the first one who will give an
                      opinion!
                    </Typography>
                  )}
                  {isLoadingLikeEditDelete ? (
                    <CircularProgress color="success"></CircularProgress>
                  ) : (
                    <Stack sx={commentsCountStackStyles}>
                      {publication?.comments?.map((comment) => (
                        <ListItem key={comment?._id} sx={commentListItemStyles}>
                          <Stack sx={currentCommentStackStyles}>
                            <Typography sx={currentCommentAuthorStyles}>
                              {" "}
                              {comment?.author?.email} commented:
                            </Typography>
                          
                            <Typography sx={currentCommentTextStyles}>{comment?.comment}</Typography>
                            <Stack sx={likeEditDeleteStackStyles}>
                              {userId && (
                                <Like
                                  commentId={comment?._id}
                                  likesCount={comment?.likes}
                                  publicationId={publicationId}
                                  onClickCommentLike={onClickCommentLike}
                                />
                              )}
                              {comment.createdBy === userId && (
                                <EditAndDelete
                                  commentId={comment._id}
                                  onClickCommentEdit={onClickCommentEdit}
                                  onClickCommentDelete={onClickCommentDelete}
                                  publicationId={publicationId}
                                />
                              )}
                            </Stack>
                          </Stack>
                        </ListItem>
                      ))}
                    </Stack>
                  )}
                </Stack>
              </Stack>
              <Stack sx={addCommentStackStyles}>
                {isAuthenticated && (
                  <AddComment onClickCommentSubmit={onClickCommentSubmit} />
                )}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      )}
    </motion.div>
  );
};
