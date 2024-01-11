import {
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
  InputAdornment,
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
  formGroupStyles,
  inputPropsDescription,
  inputPropsHeight,
  inputPropsImageUrl,
  inputPropsName,
  menuItemStyles,
  publishAndEditButtonStyles,
  textFieldStyles,
} from "./create.styles.js";
import "./create.css";
import { colors } from "../../metaData/colors.js";
import {
  AccountCircle,
  DescriptionRounded,
  HeightOutlined,
  Image,
} from "@mui/icons-material";

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
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
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

            <FormGroup row sx={formGroupStyles}>
              <FormControl sx={formControlStyles}>
                <TextField
                  label="Name"
                  name="name"
                  variant="outlined"
                  InputProps={inputPropsName}
                  placeholder="Name"
                  {...register("name")}
                  onChange={changeHandler}
                  sx={textFieldStyles}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.name?.message}
                </Typography>

                <div>
                  <TextField
                    id="outlined-select-muscle"
                    select
                    label="Select"
                    name="muscleGroup"
                    sx={textFieldStyles}
                    defaultValue="traps"
                    helperText="Please select your muscle"
                    {...register("muscleGroup")}
                    onChange={changeHandler}
                  >
                    {muscleGroups.map((muscle) => (
                      <MenuItem key={muscle} value={muscle} sx={menuItemStyles}>
                        {muscle}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>

                <Typography variant="p" sx={errorsStyles}>
                  {errors.muscleGroup?.message}
                </Typography>
                <TextField
                  label="weight"
                  type="number"
                  variant="outlined"
                  name="weight"
                  sx={textFieldStyles}
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
                  sx={textFieldStyles}
                  placeholder="height in cm"
                  {...register("height")}
                  onChange={changeHandler}
                  InputProps={inputPropsHeight}
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
                  InputProps={inputPropsDescription}
                  sx={textFieldStyles}
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
                  sx={textFieldStyles}
                  InputProps={inputPropsImageUrl}
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
