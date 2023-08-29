import {
  Box,
  Button,
  CardMedia,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase.js";

import { auth } from "../../config/firebase.js";
import PublicationDataService from "../../services/publicationServices.js";
import { useNavigate } from "react-router-dom";

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

export const ShareExperience = () => {
  const [newMuscleGroup, setNewMuscleGroup] = useState("");
  const [newName, setNewName] = useState("");
  const [newWeight, setNewWeight] = useState(0);
  const [newHeight, setNewHeight] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");

  const newMuscleGroupHandler = (e) => {
    setNewMuscleGroup(e.target.value);
  };

  const newNameHandler = (e) => {
    setNewName(e.target.value);
  };
  const newWeightHandler = (e) => {
    setNewWeight(Number(e.target.value));
  };
  const newHeightHandler = (e) => {
    setNewHeight(Number(e.target.value));
  };
  const newDescriptionHandler = (e) => {
    setNewDescription(e.target.value);
  };
  const newImageHandler = (e) => {
    setNewImage(e.target.value);
  };

  const navigate = useNavigate();

  const publicationCollectionRef = collection(db, "publications");

  const createPublication = async () => {
    await addDoc(publicationCollectionRef, {
      muscleGroup: newMuscleGroup,
      name: newName,
      weight: newWeight,
      height: newHeight,
      description: newDescription,
      imageUrl: newImage,
      _ownerId: auth?.currentUser?.uid,
    });

    navigate("/catalog");
  }
    return (
      <Stack
        sx={{
          position: "relative",
          backgroundColor: "#f6f6f6",
          width: "auto",
          height: "90vh",
          overflow: "hidden",
        }}
      >
        <Paper
          sx={{
            width: "660px",
            height: "90%",
            backgroundColor: "#fbc760",
            border: "3px solid #170f0a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            position: "absolute",
            left: "50%",
            top: "50%",
            mt: 8,
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
            Share your expereince
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
                {muscleGroups.map((newMuscleGroup) => {
                  return (
                    <MenuItem
                      value={newMuscleGroup}
                      onChange={newMuscleGroupHandler}
                    >
                      {newMuscleGroup}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </Box> */}
              <TextField
                label="Name"
                variant="outlined"
                placeholder="Name"
                value={newName}
                onChange={newNameHandler}
                sx={{ width: "100%" }}
              />
              <TextField
                label="kgs"
                type="number"
                variant="outlined"
                placeholder="Other explanation"
                value={newWeight}
                onChange={newWeightHandler}
                sx={{ width: "100%" }}
              />
              <TextField
                label="height"
                type="number"
                variant="outlined"
                placeholder="How to do"
                value={newHeight}
                onChange={newHeightHandler}
                sx={{ width: "100%" }}
              />

              <TextField
                label="description"
                variant="outlined"
                placeholder="Explanation"
                multiline
                rows={4}
                value={newDescription}
                onChange={newDescriptionHandler}
                sx={{ width: "100%" }}
              />

              <TextField
                label="Image Url"
                variant="outlined"
                type="img"
                placeholder="Image Url"
                value={newImage}
                onChange={newImageHandler}
                sx={{ width: "100%" }}
              />
            </FormControl>
          </FormGroup>

          <Button
            variant="outlined"
            onClick={createPublication}
            sx={{
              backgroundColor: "#170f0a",
              color: "#fbc760",
              padding: "12px",
              fontSize: "16px",

              width: "60%",
              border: " 1px solid #4c4850",
              "&:hover": {
                backgroundColor: "#4c4850",
                border: "1px solid black",
              },
            }}
          >
            Publish
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
              transform: "translate(250%, 290%)",
            }}
          ></CardMedia>
        </Stack>
      </Stack>
    );
  };
