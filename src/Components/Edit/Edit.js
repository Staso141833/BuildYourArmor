import {
  Box,
  Button,
  CardMedia,
  FormControl,
  FormGroup,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { auth, db } from "../../config/firebase.js";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormMine } from "../../hooks/useFormMine.js";
import { publicationServiceFactory } from "../../services/publicationServices.js";
import { usePublicationContext } from "../../contexts/PublicationContext.js";

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
    publicationService.getOne(publicationId).then((publication) => {
      const result = publication.data();
      changeValues(result);
    });
  }, [publicationId]);

  values["_id"] = publicationId;

  const schema = yup.object().shape({
    name: yup.string().min(4).max(18).required(),
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
          height: "auto",
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
            transition: "all 0.4s ease-in-out",
          },
        }}
      >
        <Stack
          component="h2"
          sx={{
            fontWeight: 700,
            marginTop: 3,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Edit
        </Stack>

        <FormGroup row sx={{ justifyContent: "space-around", height: "auto" }}>
          <FormControl
            sx={{
              display: "flex",
              gap: "24px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Name"
              name="name"
              sx={{ width: "100%" }}
              {...register("name")}
              value={values.name}
              onChange={changeHandler}
            />
            <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
              {errors.name?.message}
            </Typography>
            <Box width="220px">
              <TextField
                // sx={{ width: "220px" }}
                label="select muscle"
                select
                fullWidth
                name="muscleGroup"
                color="success"
                helperText="Please select your muscle group"
                {...register("muscleGroup")}
                value={values.muscleGroup}
                error
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
                        background: "#ffff",
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
              <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
                {errors.muscleGroup?.message}
              </Typography>
            </Box>
            <TextField
              type="number"
              variant="outlined"
              placeholder="weight"
              name="weight"
              {...register("weight")}
              value={values.weight}
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
              value={values.height}
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
              value={values.description}
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
          type="submit"
          variant="outlined"
          onClick={handleSubmit(onSubmit)}
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
  );
};
