import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../../hooks/useForm.js";
import { useState } from "react";
import { db } from "../../config/firebase.js";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as commentService from "../../services/commentService.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const AddComent = () => {
  const [comments, setComments] = useState([]);
  const publicationId = useParams();

  const onCommentSubmit = async (values) => {
    const newComment = await setDoc(
      doc(
        db,
        `publications/${publicationId.publicationId}/comments`,
        values.newComment
      ),
      { comment: values.newComment }
    );
    setComments((state) => [...state, newComment]);
  };
  const { values, changeHandler, onSubmit } = useForm(
    {
      newComment: "",
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
          expandIcon={<ExpandMore />}
        >
          {" "}
          <Typography>Write your comment...</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="My comment"
            name="newComment"
            variant="outlined"
            placeholder="My comment"
            value={values.newComment}
            onChange={changeHandler}
            multiline
            rows={6}
            sx={{ height: "240px", width: "80%" }}
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
            width: "34%",
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

// const onCommentSubmit = async () => {
//   const q = query(collection(db, "publications"));
//   const querySnapshot = await getDoc(q);
//   const queryData = querySnapshot.docs.map((detail) => ({
//     ...detail.data(),
//     id: detail.id,
//   }));

//   queryData.map(async (v) => {
//     await setDoc(doc(db, `publications/${v.id}/comments`, newComment), {
//       newComment,
//     });
//   });
// };
