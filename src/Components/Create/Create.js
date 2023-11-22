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
  createAndEditPaperStyles,
  createAndEditTitleStyles,
  createAndEditmainStackStyles,
  formControlStyles,
  menuItemStyles,
  publishAndEditButtonStyles,
} from "./create.styles.js";

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
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.name?.message}
                </Typography>

                <Box sx={{width:"100%"}}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="select muscle"
                    select
                    name="muscleGroup"
                    color="success"
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
              sx={publishAndEditButtonStyles}
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
                transform: "translate(255.5%, 376%)",
              }}
            ></CardMedia>
          </Stack>
        </Stack>
      )}
    </motion.div>
  );
};
