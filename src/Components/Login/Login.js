import {
  TextField,
  Button,
  Stack,
  Typography,
  CardMedia,
  LinearProgress,
} from "@mui/material";
import "./login.css";
import { auth } from "../../config/firebase.js";
import { useFormMine } from "../../hooks/useFormMine.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  emailAndPasswordStackStyles,
  loginButtonStyles,
  loginErrorsStyles,
  loginFormMainStackStyles,
  loginHeaderStyles,
  loginInputStyles,
} from "./login.styles.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import RemoveCookie from "../../hooks/removeCookie.js";
import { useState } from "react";
import { useCookie } from "../../hooks/useCookie.js";
import { useNavigate } from "react-router-dom";
import SetCookie from "../../hooks/setCookie.js";
import { motion } from "framer-motion";

export const Login = () => {
  const [success, setSuccess] = useState("");
  const [userIn, setUserIn] = useCookie("userIn", {});
  const [newError, setNewError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onLoginSubmit = async (values) => {
    const auth = values.auth;
    const loginEmail = values.loginEmail;
    const loginPassword = values.loginPassword;

    setIsLoading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (user) {
        RemoveCookie("userIn");
        setUserIn(user);
        SetCookie("userIn", JSON.stringify(user));
        setSuccess(true);
        setIsLoading(false);
        navigate("/catalog");

        return user;
      }
    } catch (error) {
      setIsLoading(false);
      console.log(`${error}`);
      if (error.response) {
        console.log(error.response.data.message);
        setNewError(error.response.data.message);
        console.log(error.response.status);
      }
    }
  };

  const { values, changeHandler, onSubmit } = useFormMine(
    {
      ["auth"]: auth,
      loginEmail: "",
      loginPassword: "",
    },
    onLoginSubmit
  );

  const schema = yup.object().shape({
    loginEmail: yup.string().required("Email is required!"),
    loginPassword: yup
      .string()
      .min(6)
      .max(20)
      .required("Password must be at least 4 characters"),
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
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      {isLoading ? (
        <>
          <Stack sx={{ height: "90vh" }}>
            <LinearProgress color="success"></LinearProgress>
          </Stack>
        </>
      ) : (
        <form method="POST" sx={{ width: "70vw", height: "80vh" }}>
          <Stack spacing={2} sx={loginFormMainStackStyles}>
            <Stack sx={emailAndPasswordStackStyles}>
              <Typography sx={loginHeaderStyles}>Login</Typography>
              <TextField
                label="Emails"
                type="email"
                name="loginEmail"
                variant="filled"
                {...register("loginEmail")}
                onChange={changeHandler}
                sx={loginInputStyles}
              />
              <Typography variant="p" sx={loginErrorsStyles}>
                {errors?.loginEmail?.message}
              </Typography>
              <TextField
                label="Password"
                type="password"
                {...register("loginPassword")}
                name="loginPassword"
                variant="filled"
                onChange={changeHandler}
                sx={loginInputStyles}
              />

              <Typography variant="p" sx={loginErrorsStyles}>
                {errors.loginPassword?.message}
              </Typography>

              <Button
                variant="outlined"
                onClick={handleSubmit(onSubmit)}
                sx={loginButtonStyles}
              >
                Sign In
              </Button>
            </Stack>

            <CardMedia
              component="img"
              image="https://images.ctfassets.net/psi7gc0m4mjv/a5c4b79a-ff46-4f36-8998-42e67772d8ea/3d9bf46397da19651891e1f4f154a62e/issa-blog-header-gaining-muscle-mass.jpg"
              alt="growing up"
              sx={{
                width: "50%",
                filter: "opacity(0.8) drop-shadow(0 0 black)",
              }}
            ></CardMedia>
          </Stack>
        </form>
      )}
    </motion.div>
  );
};
