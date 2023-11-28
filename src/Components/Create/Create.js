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
import {
  cardMediaStyles,
  createAndEditPaperStyles,
  createAndEditTitleStyles,
  createAndEditmainStackStyles,
  errorsStyles,
  formControlStyles,
  menuItemStyles,
  publishAndEditButtonStyles,
} from "./create.styles.js";
import "./create.css";

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
    name: yup.string().min(3).max(22).required(),
    muscleGroup: yup.string().required("The muscle group is required"),
    weight: yup
      .number()
      .positive()
      .integer()
      .min(40)
      .max(150)
      .required("Weight field is a required field"),

    height: yup
      .number()
      .positive()
      .integer()
      .min(140)
      .max(220)
      .required("Weight field is a required field"),
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

  if (errors.weight === "") {
    errors.weight.message = "Yeaaa";
  }
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
        <Stack sx={createAndEditmainStackStyles}>
          <Paper sx={createAndEditPaperStyles}>
            <Typography variant="h4" sx={createAndEditTitleStyles}>
              Share your expereince
            </Typography>

            <FormGroup row sx={{ justifyContent: "space-around" }}>
              <FormControl sx={formControlStyles}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  placeholder="Name"
                  {...register("name")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.name?.message}
                </Typography>

                <Box sx={{ width: "240px" }}>
                  <TextField
                    label="select muscle"
                    select
                    fullWidth
                    name="muscleGroup"
                    helperText="Please select your muscle group"
                    {...register("muscleGroup")}
                    onChange={changeHandler}
                    SelectProps={{
                      multiline: true,
                    }}
                  >
                    {muscleGroups.map((muscleGroup) => (
                      <MenuItem value={muscleGroup} sx={menuItemStyles}>
                        {muscleGroup}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Typography variant="p" sx={errorsStyles}>
                  {errors.muscleGroup?.message}
                </Typography>
                <TextField
                  label="weight"
                  type="number"
                  variant="outlined"
                  name="weight"
                  placeholder="Other explanation"
                  {...register("weight")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.weight?.message}
                </Typography>

                <TextField
                  label="height"
                  type="number"
                  name="height"
                  variant="outlined"
                  placeholder="height in cm"
                  {...register("height")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.height?.message}
                </Typography>

                <TextField
                  variant="outlined"
                  placeholder="description"
                  multiline
                  rows={3}
                  name="description"
                  {...register("description")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.description?.message}
                </Typography>
                <TextField
                  label="Image Url"
                  variant="outlined"
                  name="imageUrl"
                  type="img"
                  placeholder="Image Url"
                  {...register("imageUrl")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.imageUrl?.message}
                </Typography>
              </FormControl>
            </FormGroup>

            <Button
              variant="outlined"
              onClick={handleSubmit(onClickCreate)}
              sx={publishAndEditButtonStyles}
            >
              Publish
            </Button>
          </Paper>
          <Stack sx={{ position: "absolute" }}>
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzFDFDPUsRTDly7lBJkOUXxizcWZo-aLIfdKhD-PvblYcldlFdvJN1XOMbG7MMhk4jZE&usqp=CAU"
              alt="growing up"
              sx={cardMediaStyles}
            ></CardMedia>
          </Stack>
        </Stack>
      )}
    </motion.div>
  );
};
