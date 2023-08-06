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
import { redirect } from "react-router-dom";

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

const onRedirect = () => {
  redirect("/home");
};
export const ShareExperience = () => {
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
            <Box sx={{ width: "80%" }}>
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
            </Box>
            <TextField
              label="Name"
              variant="outlined"
              placeholder="Name"
              sx={{ width: "100%" }}
            />
            <TextField
              label="kgs"
              type="number"
              variant="outlined"
              placeholder="Other explanation"
              sx={{ width: "100%" }}
            />
            <TextField
              label="height"
              type="number"
              variant="outlined"
              placeholder="How to do"
              sx={{ width: "100%" }}
            />

            <TextField
              label="description"
              variant="outlined"
              placeholder="Explanation"
              multiline
              rows={4}
              sx={{ width: "100%" }}
            />

            <TextField
              label="Image Url"
              variant="outlined"
              placeholder="Image Url"
              sx={{ width: "100%" }}
            />
          </FormControl>
        </FormGroup>

        <Button
          
          variant="outlined"
          onClick={onRedirect}
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
