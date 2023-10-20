import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useForm.js";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase.js";
export const EditAndDelete = ({
  onClickEditCommentSubmit,
  commentId,
  onDeleteCommentClick,
}) => {
  const [isEdited, setIsEdited] = useState(false);

  const { publicationId } = useParams();

  console.log(commentId);

  useEffect(() => {
    getComment(commentId).then((oldValue) => {
      changeValues(oldValue);
    });
  }, [publicationId]);

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      comment: "",
    },
    onClickEditCommentSubmit
  );
  values["_id"] = commentId;

  const getComment = async (commentId) => {
    const docRefference = doc(
      db,
      `publications/${publicationId}/comments`,
      commentId
    );
    const data = await getDoc(docRefference);
    const result = data.data();
    return result;
  };

  const onClickEdit = (e) => {
    onSubmit(e);
    setIsEdited(false);
  };

  const onEdit = () => {
    setIsEdited(true);
  };

  const onDeleteClick = () => {
    onDeleteCommentClick(commentId, publicationId);
  };
  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
      {!isEdited && (
        <Button
          color="success"
          onClick={onEdit}
          variant="contained"
          sx={{ width: "auto", textTransform: "lowercase" }}
          style={{
            cursor: "pointer",
          }}
        >
          Edit
        </Button>
      )}

      {isEdited && (
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <TextField
            label="Update comment"
            name="comment"
            placeholder="Update comment"
            values={values.comment}
            onChange={changeHandler}
            multiline
            rows={4}
            sx={{ height: "100px", width: "100%" }}
          />
          <Button onClick={onClickEdit} variant="contained">
            Edit
          </Button>
        </Stack>
      )}
      <Button
        color="success"
        variant="contained"
        onClick={onDeleteClick}
        sx={{ width: "auto", textTransform: "lowercase" }}
        style={{
          cursor: "pointer",
        }}
      >
        Delete
      </Button>
    </Stack>
  );
};
