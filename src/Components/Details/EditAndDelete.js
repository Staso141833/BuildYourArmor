import { Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormMine } from "../../hooks/useFormMine.js";
import * as commentService from "../../services/commentService";
import { colors } from "../../metaData/colors.js";

export const EditAndDelete = ({
  commentId,
  onClickEditCommentSubmit,
  onDeleteCommentClick,
  publicationId,
}) => {
  const [isEdited, setIsEdited] = useState(false);


  useEffect(() => {
    commentService.getOneComment(commentId, publicationId).then((oldValue) => {
      changeValues(oldValue);
    });
  }, [publicationId]);

  const { values, changeHandler, onSubmit, changeValues } = useFormMine(
    {
      comment: "",
    },
    onClickEditCommentSubmit
  );
  values["_id"] = commentId;

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
          sx={{ width: "auto", textTransform: "lowercase", backgroundColor: colors["light-silver"], color: colors.black }}
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
            variant="standard"
            name="comment"
            placeholder="Update comment"
            values={values.comment}
            onChange={changeHandler}
            multiline
            rows={4}
            sx={{ height: "64px", width: "100%", backgroundColor: colors.white }}
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
        sx={{ width: "auto", textTransform: "lowercase", backgroundColor: colors["dark-silver"] }}
        style={{
          cursor: "pointer",
        }}
      >
        Delete
      </Button>
    </Stack>
  );
};
