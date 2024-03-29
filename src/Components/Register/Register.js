import {
  TextField,
  Button,
  Stack,
  Typography,
  CardMedia,
  LinearProgress,
  FormControl,
} from "@mui/material";
import { useContext, useState } from "react";
import { auth } from "../../config/firebase.js";
import { useFormMine } from "../../hooks/useFormMine.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import RemoveCookie from "../../hooks/removeCookie.js";
import SetCookie from "../../hooks/setCookie.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./register.css";
import {
  cardMediaStackStyles,
  cardMediaStyles,
  emailAndPasswordStackStyles,
  formControlStyles,
  registerButtonStyles,
  registerErrorsStyles,
  registerFormMainStackStyles,
  registerHeaderStyles,
  registerInputStyles,
} from "./register.styles.js";

export const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onRegisterSubmit = async (values) => {
    const { rePassword, ...registerData } = values;
    setIsLoading(true);
    if (rePassword !== registerData.password) {
      setIsLoading(false);
      throw Error("Passwords do not match!");
    }

    try {
      const result = await createUserWithEmailAndPassword(
        registerData.auth,
        registerData.email,
        registerData.password
      );
      setIsLoading(false);
      RemoveCookie("userIn");
      SetCookie("userIn", JSON.stringify(result));
      navigate("/catalog");
    } catch (error) {
      setIsLoading(false);
      window.alert(error);
      console.log(`There is a problem ${error}`);
    }
  };

  const { values, changeHandler, onSubmit } = useFormMine(
    {
      auth: auth,
      email: "",
      password: "",
      rePassword: "",
    },
    onRegisterSubmit
  );

  const schema = yup.object().shape({
    email: yup.string().required("Email is required!"),
    password: yup
      .string()
      .min(6)
      .max(20)
      .required("Password must be at least 6 characters"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      {isLoading ? (
        <Stack sx={{ height: "90vh" }}>
          <LinearProgress color="success"></LinearProgress>
        </Stack>
      ) : (
        <FormControl sx={formControlStyles}>
          <Stack spacing={2} sx={registerFormMainStackStyles}>
            <Stack sx={emailAndPasswordStackStyles}>
              <Typography sx={registerHeaderStyles}>Register</Typography>
              <TextField
                label="Emails"
                type="email"
                name="email"
                variant="filled"
                {...register("email")}
                onChange={changeHandler}
                sx={registerInputStyles}
              />
              <Typography variant="p" sx={registerErrorsStyles}>
                {errors.email?.message}
              </Typography>
              <TextField
                label="Password"
                type="password"
                name="password"
                variant="filled"
                {...register("password")}
                onChange={changeHandler}
                sx={registerInputStyles}
              />
              <Typography variant="p" sx={registerErrorsStyles}>
                {errors.password?.message}
              </Typography>
              <TextField
                label="re-password"
                type="password"
                name="rePassword"
                variant="filled"
                {...register("rePassword")}
                onChange={changeHandler}
                sx={registerInputStyles}
              />
              {errors.rePassword && (
                <Typography variant="p" sx={registerErrorsStyles}>
                  The re-password does not match with the password!
                </Typography>
              )}

              <Button
                onClick={handleSubmit(onSubmit)}
                variant="outlined"
                sx={registerButtonStyles}
              >
                Register
              </Button>
            </Stack>

            <Stack sx={cardMediaStackStyles}>
              <CardMedia
                component="img"
                image="https://www.godearlife.com/wp-content/uploads/2022/09/muscle-gain-motivation.jpg"
                alt="growing up"
                sx={cardMediaStyles}
              ></CardMedia>
            </Stack>
          </Stack>
        </FormControl>
      )}
    </motion.div>
  );
};
