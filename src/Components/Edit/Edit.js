import {
  Box,
  Button,
  CardMedia,
  CircularProgress,
  FormControl,
  FormGroup,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { auth, db } from "../../config/firebase.js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormMine } from "../../hooks/useFormMine.js";
import { publicationServiceFactory } from "../../services/publicationServices.js";
import { usePublicationContext } from "../../contexts/PublicationContext.js";
import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  cardMediaStyles,
  createAndEditPaperStyles,
  createAndEditTitleStyles,
  createAndEditmainStackStyles,
  errorsStyles,
  formControlStyles,
  menuItemStyles,
  publishAndEditButtonStyles,
} from "./edit.styles.js";

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

export const Edit = () => {
  const { onPublicationEditSubmit } = usePublicationContext();
  const publicationService = publicationServiceFactory();
  const { publicationId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const { values, changeHandler, onSubmit, changeValues } = useFormMine(
    {
      name: "",
      weight: "",
      height: "",
      description: "",
      imageUrl: "",
      _ownerId: auth?.currentUser?.uid,
    },
    onPublicationEditSubmit
  );

  useEffect(() => {
    setIsLoading(true);

    try {
      const getPublication = async () => {
        await publicationService.getOne(publicationId).then((publication) => {
          setIsLoading(false);
          const result = publication.data();
          changeValues(result);
        });
      };
      getPublication();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [publicationId]);

  values["_id"] = publicationId;

  const schema = yup.object().shape({
    name: yup.string().min(3).max(22).required(),
    muscleGroup: yup.string().required("The muscle group is required!"),
    weight: yup.number().positive().integer().min(40).max(150).required(),
    height: yup.number().positive().integer().min(140).max(220).required(),
    description: yup.string().required(),
    imageUrl: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    values: values,
  });

  const onSubmitClick = () => {
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
        <Stack
          sx={{ height: "80vh", textAlign: "center", alignItems: "center" }}
        >
          <CircularProgress color="success" sx={{ mt: 10 }}></CircularProgress>
        </Stack>
      ) : (
        <Stack sx={createAndEditmainStackStyles}>
          <Paper sx={createAndEditPaperStyles}>
            <Stack component="h2" sx={createAndEditTitleStyles}>
              Edit
            </Stack>

            <FormGroup
              row
              sx={{ justifyContent: "space-around", height: "auto" }}
            >
              <FormControl sx={formControlStyles}>
                <TextField
                  variant="outlined"
                  placeholder="Name"
                  name="name"
                  {...register("name")}
                  onChange={changeHandler}
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
                    defaultValue={values.muscleGroup}
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
                <TextField
                  type="number"
                  variant="outlined"
                  placeholder="weight"
                  name="weight"
                  {...register("weight")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.weight?.message}
                </Typography>

                <TextField
                  type="number"
                  variant="outlined"
                  placeholder="height"
                  name="height"
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
                  variant="outlined"
                  placeholder="Image Url"
                  name="imageUrl"
                  {...register("imageUrl")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={errorsStyles}>
                  {errors.imageUrl?.message}
                </Typography>
              </FormControl>
            </FormGroup>

            <Button
              type="submit"
              variant="outlined"
              onClick={handleSubmit(onSubmitClick)}
              sx={publishAndEditButtonStyles}
            >
              Edit
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
