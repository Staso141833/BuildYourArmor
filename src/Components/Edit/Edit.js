import {
  Button,
  CardMedia,
  FormControl,
  FormGroup,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { db } from "../../config/firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver:": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

const muscleGroups = [
  "traps",
  "delts",
  "back",
  "biceps",
  "triceps",
  "wrist",
  "chest",
  "abs",
  "legs",
];

export const Edit = () => {
  const { publicationId } = useParams();
  const navigate = useNavigate();

  const onPublicationEditSubmit = async (values) => {
    const publicationDoc = doc(db, "publications", publicationId);
    await updateDoc(publicationDoc, values);
    navigate("/catalog");
  };

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      id: "",
      name: "",
      weight: "",
      height: "",
      description: "",
      imageUrl: "",
    },
    onPublicationEditSubmit
  );

  useEffect(() => {
    const docRef = doc(db, "publications", publicationId);
    const getPublication = async () => {
      const data = await getDoc(docRef);
      changeValues(data.data());
    };
    getPublication();
  }, [publicationId]);

  return (
    <Stack
      sx={{
        position: "relative",
        backgroundColor: "#f6f6f6",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          width: "660px",
          height: "660px",
          backgroundColor: "#fbc760",
          border: "3px solid #170f0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-53%, -61%)",
          zIndex: "2",
          boxShadow: "40px 30px 30px #170f0a",
          "&:hover": {
            padding: "4px",
            transition: "all 0.4s ease-in-out",
          },
        }}
      >
        <Stack
          sx={{
            fontSize: 34,
            fontWeight: 700,
            marginTop: "34px",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Edit
        </Stack>

        <FormGroup row sx={{ justifyContent: "space-around" }}>
          <FormControl
            sx={{
              display: "flex",
              gap: "24px",
            }}
          >
            {/* <Box sx={{ width: "80%" }}>
              <InputLabel sx={{ left: "auto" }}>muscleGroup</InputLabel>
              <Select
                sx={{ width: 300 }}
                label={"muscleGroup"}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      maxHeight: 200,
                      backgroundColor: "#665d58",
                      color: "#fbc760",
                    },
                  },
                }}
              >
                {muscleGroups.map((muscleValue) => {
                  return <MenuItem value={muscleValue}>{muscleValue}</MenuItem>;
                })}
              </Select>
            </Box> */}

            <TextField
              variant="outlined"
              placeholder="Name"
              name="name"
              sx={{ width: "100%" }}
              value={values.name}
              onChange={changeHandler}
            />
            <TextField
              type="number"
              variant="outlined"
              placeholder="weight"
              name="weight"
              value={values.weight}
              onChange={changeHandler}
              sx={{ width: "100%" }}
            />
            <TextField
              type="number"
              variant="outlined"
              placeholder="height"
              name="height"
              value={values.height}
              onChange={changeHandler}
              sx={{ width: "100%" }}
            />
            <TextField
              variant="outlined"
              placeholder="description"
              multiline
              rows={4}
              name="description"
              value={values.description}
              onChange={changeHandler}
              sx={{ width: "100%" }}
            />

            <TextField
              variant="outlined"
              placeholder="Image Url"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              sx={{ width: "100%" }}
            />
          </FormControl>
        </FormGroup>

        <Button
          type="submit"
          variant="outlined"
          onClick={onSubmit}
          sx={{
            backgroundColor: "#170f0a",
            color: "#fbc760",
            padding: "12px",
            fontSize: "16px",
            fontFamily: "Robotto",
            width: "60%",
            border: " 1px solid #4c4850",
            "&:hover": {
              backgroundColor: "#4c4850",
              border: "1px solid black",
            },
          }}
        >
          Edit
        </Button>
      </Paper>
      <Stack sx={{ position: "absolute" }}>
        <CardMedia
          component="img"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzFDFDPUsRTDly7lBJkOUXxizcWZo-aLIfdKhD-PvblYcldlFdvJN1XOMbG7MMhk4jZE&usqp=CAU"
          // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGy2osMQ8i6WdL9X5Dmrf5TUwRYITkq8wZ5A&usqp=CAU"
          alt="growing up"
          sx={{
            width: "200px",
            left: "50%",
            top: "50%",
            transform: "translate(258%, 300%)",
          }}
        ></CardMedia>
      </Stack>
    </Stack>
  );
};
