import {
  Box,
  Button,
  CardMedia,
  FormControl,
  FormGroup,
  Paper,
  Stack,
  TextField,
  MenuItem,
  Typography,
  CircularProgress,
} from "@mui/material";

import { usePublicationContext } from "../../contexts/PublicationContext.js";
import { useFormMine } from "../../hooks/useFormMine.js";
import { Timestamp } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import { useState } from "react";

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
  "front thigh",
  "back thigh",
  "calves",
];

export const Create = () => {
  const { onCreatePublicationSubmit } = usePublicationContext();
  const [isLoading, setIsLoading] = useState(false);

  const { values, changeHandler, onSubmit } = useFormMine(
    {
      muscleGroup: "",
      name: "",
      weight: "",
      height: "",
      description: "",
      imageUrl: "",
      _ownerId: "",
      createdOn: Timestamp.now().toDate(),
      likes: [],
    },
    onCreatePublicationSubmit
  );

  const schema = yup.object().shape({
    name: yup.string().min(4).max(22).required(),
    muscleGroup: yup.string().required("The muscle group is required!"),
    weight: yup.number().positive().integer().min(40).required(),
    height: yup.number().positive().integer().min(140).required(),
    description: yup.string().required(),
    imageUrl: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onClickCreate = () => {
    setIsLoading(true);

    try {
      setIsLoading(false);
      onSubmit();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      {isLoading ? (
        <Stack>
          <CircularProgress color="success"></CircularProgress>
        </Stack>
      ) : (
        <Stack
          sx={{
            position: "relative",
            backgroundColor: "#f6f6f6",
            width: "auto",
            height: "100vh",
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
              gap: "12px",
              position: "absolute",
              left: "50%",
              top: "56%",
              mt: 2,
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
                  mt: 4,
                  display: "flex",
                  gap: "12px",
                }}
              >
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  placeholder="Name"
                  {...register("name")}
                  value={values.name}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.name?.message}
                </Typography>

                <Box width="100%">
                  <TextField
                    sx={{ width: "220px" }}
                    label="select muscle"
                    select
                    name="muscleGroup"
                    color="success"
                    {...register("muscleGroup")}
                    value={values.muscleGroup}
                    onChange={changeHandler}
                    SelectProps={{
                      multiline: true,
                    }}
                  >
                    {muscleGroups.map((muscleGroup) => (
                      <MenuItem
                        value={muscleGroup}
                        sx={{
                          width: "auto",
                          backgroundColor: myColors.gold,
                          color: myColors.white,
                          transition: "all 350ms",
                          "&:hover": {
                            backgroundColor: myColors.black,
                            color: myColors.gold,
                          },
                        }}
                      >
                        {muscleGroup}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.muscleGroup?.message}
                </Typography>
                <TextField
                  label="weight"
                  type="number"
                  variant="outlined"
                  name="weight"
                  placeholder="Other explanation"
                  {...register("weight")}
                  value={values.weight}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.weight?.message}
                </Typography>
                <TextField
                  label="height"
                  type="number"
                  name="height"
                  variant="outlined"
                  placeholder="height in cm"
                  {...register("height")}
                  value={values.height}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.height?.message}
                </Typography>
                <TextField
                  label="description"
                  variant="outlined"
                  placeholder="Explanation"
                  name="description"
                  multiline
                  rows={4}
                  {...register("description")}
                  value={values.description}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.description?.message}
                </Typography>
                <TextField
                  label="Image Url"
                  variant="outlined"
                  name="imageUrl"
                  type="img"
                  placeholder="Image Url"
                  {...register("imageUrl")}
                  value={values.imageUrl}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.imageUrl?.message}
                </Typography>
              </FormControl>
            </FormGroup>

            <Button
              variant="outlined"
              onClick={handleSubmit(onClickCreate)}
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
                transform: "translate(250%, 380%)",
              }}
            ></CardMedia>
          </Stack>
        </Stack>
      )}
    </motion.div>
  );
};
