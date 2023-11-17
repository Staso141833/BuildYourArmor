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
              height: "auto",
              backgroundColor: "#fbc760",
              border: "3px solid #170f0a",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-53%, -61%)",
              zIndex: "2",
              boxShadow: "40px 30px 30px #170f0a",
              "&:hover": {
                transition: "all 0.4s ease-in-out",
              },
            }}
          >
            <Stack
              component="h2"
              sx={{
                fontWeight: 700,
                marginTop: 1,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Edit
            </Stack>

            <FormGroup
              row
              sx={{ justifyContent: "space-around", height: "auto" }}
            >
              <FormControl
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Name"
                  name="name"
                  sx={{ width: "100%" }}
                  {...register("name")}
                  onChange={changeHandler}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.name?.message}
                </Typography>
                <Box width="220px">
                  <TextField
                    label="select muscle"
                    select
                    fullWidth
                    name="muscleGroup"
                    color="success"
                    helperText="Please select your muscle group"
                    {...register("muscleGroup")}
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
                          background: myColors.gold,
                          color: myColors.white,
                          textTransform: "uppercase",
                          "&:hover": {
                            background: myColors.black,
                            transition: "all 0.4s ease-in-out",
                          },
                        }}
                      >
                        {muscleGroup}
                      </MenuItem>
                    ))}
                  </TextField>

                  <Stack variant="p" sx={{ fontSize: "16px" }}>
                    Your current muscle is {values.muscleGroup}
                  </Stack>
                  <Typography
                    variant="p"
                    sx={{ fontSize: "16px", color: "red" }}
                  >
                    {errors.muscleGroup?.message}
                  </Typography>
                </Box>
                <TextField
                  type="number"
                  variant="outlined"
                  placeholder="weight"
                  name="weight"
                  {...register("weight")}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.weight?.message}
                </Typography>
                <TextField
                  type="number"
                  variant="outlined"
                  placeholder="height"
                  name="height"
                  {...register("height")}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.height?.message}
                </Typography>
                <TextField
                  variant="outlined"
                  placeholder="description"
                  multiline
                  rows={4}
                  name="description"
                  {...register("description")}
                  onChange={changeHandler}
                  sx={{ width: "100%" }}
                />
                <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                  {errors.description?.message}
                </Typography>

                <TextField
                  variant="outlined"
                  placeholder="Image Url"
                  name="imageUrl"
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
              type="submit"
              variant="outlined"
              onClick={handleSubmit(onSubmitClick)}
              sx={{
                backgroundColor: "#170f0a",
                color: "#fbc760",
                padding: "12px",
                fontSize: "16px",
                fontFamily: "Robotto",
                width: "60%",
                mb: 1,
                border: " 1px solid #4c4850",
                "&:hover": {
                  backgroundColor: "#4c4850",
                  border: "1px solid black",
                  transition: "all 0.4s ease-in-out",
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
      )}
    </motion.div>
  );
};
