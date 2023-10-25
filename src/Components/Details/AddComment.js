import { ExpandCircleDownOutlined, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";

import { useForm } from "../../hooks/useForm.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const AddComent = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: "",
    },
    onCommentSubmit
  );

  return (
    <>
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
          expandIcon={<ExpandCircleDownOutlined />}
        >
          {" "}
          <Typography>Write your comment...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="My comment"
            name="comment"
            variant="outlined"
            placeholder="My comment"
            value={values.comment}
            onChange={changeHandler}
            multiline
            rows={4}
            sx={{ height: "140px", width: "100%" }}
          />
        </AccordionDetails>

        <Button
          variant="contained"
          size="large"
          onClick={onSubmit}
          sx={{
            backgroundColor: myColors.black,
            color: myColors["light-silver"],
            fontWeight: "bold",
            transition: "all 300ms",
            width: "44%",
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
    </>
  );
};
