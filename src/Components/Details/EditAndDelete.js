import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useFormMine } from "../../hooks/useFormMine.js";
import * as commentService from "../../services/commentService";
import { colors } from "../../metaData/colors.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  }, [commentId]);

  const { values, changeHandler, onSubmit, changeValues } = useFormMine(
    {
      comment: "",
    },
    onClickEditCommentSubmit
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
    onDeleteCommentClick(commentId, publicationId);
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
        <Button
          color="success"
          onClick={onEdit}
          variant="contained"
          sx={{
            width: "auto",
            textTransform: "lowercase",
            backgroundColor: colors["light-silver"],
            color: colors.black,
          }}
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
            {...register("comment")}
            // values={values.comment}
            onChange={changeHandler}
            multiline
            rows={3}
            sx={{
              height: "64px",
              width: "100%",
              backgroundColor: colors.white,
            }}
          />
          <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
            {errors.comment?.message}
          </Typography>
          <Button
            onClick={handleSubmit(onClickEdit)}
            variant="contained"
            sx={{
              color: colors.black,
              backgroundColor: colors["light-silver"],
            }}
          >
            Edit
          </Button>
        </Stack>
      )}
      <Button
        color="success"
        variant="contained"
        onClick={onDeleteClick}
        sx={{
          width: "auto",
          textTransform: "lowercase",
          backgroundColor: colors["dark-silver"],
        }}
        style={{
          cursor: "pointer",
        }}
      >
        Delete
      </Button>
    </Stack>
  );
};
