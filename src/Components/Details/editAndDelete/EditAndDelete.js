import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormMine } from "../../../hooks/useFormMine.js";
import * as commentService from "../../../services/commentService.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  editAndDeleteButtonStyles,
  errorsStyles,
  textFieldStyles,
} from "./editAndDelete.styles.js";

export const EditAndDelete = ({
  commentId,
  onClickCommentEdit,
  onClickCommentDelete,
  publicationId,
}) => {
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    commentService.getOneComment(commentId, publicationId).then((oldValue) => {
      changeValues(oldValue);
    });
  }, [commentId]);

  const { values, changeHandler, onSubmit, changeValues } = useFormMine(
    {
      comment: "",
    },
    onClickCommentEdit
  );
  values["_id"] = commentId;

  const onClickEdit = () => {
    console.log(values.comment);
    onSubmit();
    setIsEdited(false);
  };

  const onEdit = () => {
    setIsEdited(true);
  };

  const onDeleteClick = () => {
    onClickCommentDelete(commentId, publicationId);
  };

  const schema = yup.object().shape({
    comment: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: values,
  });
  return (
    <Stack sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
      {!isEdited && (
        <Button onClick={onEdit} sx={editAndDeleteButtonStyles}>
          Edit
        </Button>
      )}

      {isEdited && (
        <Stack sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <TextField
            label="Update comment"
            variant="standard"
            name="comment"
            placeholder="Update comment"
            {...register("comment")}
            onChange={changeHandler}
            multiline
            rows={3}
            sx={textFieldStyles}
          />
          <Typography variant="p" sx={errorsStyles}>
            {errors.comment?.message}
          </Typography>
          <Button
            onClick={handleSubmit(onClickEdit)}
            sx={editAndDeleteButtonStyles}
          >
            Edit
          </Button>
        </Stack>
      )}
      <Button onClick={onDeleteClick} sx={editAndDeleteButtonStyles}>
        Delete
      </Button>
    </Stack>
  );
};
