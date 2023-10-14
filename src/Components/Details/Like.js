import {
  Button,
  FormControl,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
import { colors } from "../../metaData/colors.js";
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";
import {
  arrayRemove,
  arrayUnion,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../../config/firebase.js";
import { useParams } from "react-router-dom";

export const Like = ({ commentId, likes }) => {
  const publicationId = useParams();

  const userId = auth.currentUser.uid;

  const onLikePublicationSubmit = async () => {
    const values = "1";
    const newLike = await onLike(values);
    console.log(newLike);
    // setLikes(newLike)
    // setLikes((state) => {
    //   return [...state, newLike];
    // });
  };
  const likesReference = doc(db, `publications/${publicationId}/comments/${commentId}`)

  const handleLike = () => {
    if (likes?.includes(userId)) {
      updateDoc(likesReference, {
        likes: arrayRemove(userId),
      })
        .then(() => {
          console.log("unliked");
        })
        .catch((error) => {
          console.log(error);
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
    }
  };

  //   const changeHandler = (e) => {
  //     setLikes(e.target.value);
  //   };

  const onLike = async (likes) => {
    const data = await setDoc(
      doc(
        db,
        `publications/${publicationId}/comments/${commentId}/likes`,
        likes
      ),
      { likes: likes }
    );

    return data;
  };

  // const onCommentSubmit = async (values) => {
  //   const response = await setDoc(
  //     doc(db, `publications/${publicationId}/comments`, values.newComment),
  //     { comment: values.newComment }
  //   );

  //   const { values, changeHandler, onSubmit } = useForm(
  //     {
  //       likes: "",
  //     },
  //     onLikePublicationSubmit
  //   );

  return (
    <Stack>
        <Button onClick={handleLike}>Like</Button>
    </Stack>
  );
};

{
  /* <Stack>
<FormGroup>
  <FormControl>
    <TextField
      label="kgs"
      type="number"
      variant="outlined"
      name="likes"
      placeholder="Other explanation"
      value={values.likes}
      onChange={changeHandler}
      sx={{ width: "100%" }}
    />

    <Button sx={{ backgroundColor: colors.gold }} onClick={onSubmit}>
      Like
    </Button>
  </FormControl>
</FormGroup>
</Stack> */
}
