import { ExpandCircleDownOutlined } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import { useFormMine } from "../../../hooks/useFormMine.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { accordionStyles, commentButtonStyles, textFieldStyles } from "./addComment.styles.js";

export const AddComment = ({ onClickCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useFormMine(
    {
      comment: "",
    },
    onClickCommentSubmit
  );

  const schema = yup.object().shape({
    comment: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), values: values });

  return (
    <>
      <Accordion sx={accordionStyles}>
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          disableGutters="false"
          expandIcon={<ExpandCircleDownOutlined />}
        >
          {" "}
          <Typography>Write your comment...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="My comment"
            name="comment"
            color="secondary"
            variant="filled"
            placeholder="My comment"
            {...register("comment")}
            onChange={changeHandler}
            multiline
            rows={4}
            sx={textFieldStyles}
          />
          <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
            {errors.comment?.message}
          </Typography>
        </AccordionDetails>

        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit(onSubmit)}
          sx={commentButtonStyles}
        >
          Comment
        </Button>
      </Accordion>
    </>
  );
};
