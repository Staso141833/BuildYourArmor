import { TextField, Button, Stack, Typography, CardMedia } from "@mui/material";
import "./login.css";

import { auth } from "../../config/firebase.js";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import RemoveCookie from "../../hooks/removeCookie.js";
import SetCookie from "../../hooks/setCookie.js";
import GetCookie from "../../hooks/getCookie.js";

export const Login = () => {
  // const { onLoginSubmit } = useAuthContext();
  // const { values, changeHandler, onSubmit } = useForm(
  //   {
  //     ["auth"]: auth,
  //     loginEmail: "",
  //     loginPassword: "",
  //   },
  //   onLoginSubmit
  // );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [newError, setNewError] = useState("");

  const checkUser = GetCookie("usrin");

  const [userIn, setUserIn] = useState(
    checkUser === undefined ? {} : JSON.stringify(checkUser)
  );

  const emailHandler = (e) => {
    setLoginEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setLoginPassword(e.target.value);
  };

  const navigate = useNavigate();

  const values = {
    auth,
    loginEmail,
    loginPassword,
  };

  const onLoginSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      if (user) {
        RemoveCookie("usrin");
        SetCookie("usrin", JSON.stringify(user));
        setSuccess(true);
        setUserIn(user);
        navigate("/catalog");
        return user;
      }

      navigate("/catalog");
    } catch (error) {
      console.log(`${error}`);
      if (error.response) {
        console.log(error.response.data.message);
        setNewError(error.response.data.message);
        console.log(error.response.status);
      }
    }
  };

  return (
    <>
      <form noValidate sx={{ width: "70vw", height: "80vh" }}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "auto",
            marginTop: "120px",
            border: "2px double #4c4850",
            borderRadius: "8px",
            height: "500px",
            width: "1040px",
            backgroundColor: "#170f0a",
            justifyContent: "space-evenly",
            alignItems: "center",
            boxShadow: "10px 20px 20px #665d58",
            overflow: "hidden",
            marginBottom: "140px",
          }}
        >
          <Stack
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "54px",
              height: "100%",
              backgroundColor: "#B3AEAB",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#fbc760",
                textTransform: "upperCase",
                letterSpacing: "2px",
                marginTop: "32px",
              }}
            >
              Login
            </Typography>
            <TextField
              label="Emails"
              type="email"
              name="loginEmail"
              value={loginEmail}
              onChange={emailHandler}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
                color: "white",
              }}
            />
            <TextField
              label="Password"
              type="password"
              name="loginPassword"
              value={loginPassword}
              onChange={passwordHandler}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
              }}
            />
            <Button
              onClick={onLoginSubmit}
              variant="outlined"
              sx={{
                backgroundColor: "#170f0a",
                color: "#fbc760",
                padding: "12px",
                fontSize: "16px",
                width: "46%",
                border: " 1px solid #fbc760",
                "&:hover": {
                  backgroundColor: "fbc760",
                },
              }}
            >
              Sign In
            </Button>
          </Stack>

          <CardMedia
            component="img"
            // image="https://www.mdpi.com/sports/sports-09-00032/article_deploy/html/images/sports-09-00032-g002.png"
            image="https://images.ctfassets.net/psi7gc0m4mjv/a5c4b79a-ff46-4f36-8998-42e67772d8ea/3d9bf46397da19651891e1f4f154a62e/issa-blog-header-gaining-muscle-mass.jpg"
            alt="growing up"
            sx={{
              width: "50%",
              filter: "opacity(0.8) drop-shadow(0 0 black)",
            }}
          ></CardMedia>
        </Stack>
      </form>
    </>
  );
};

// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");

// const emailHandler = (e) => {
//   setLoginEmail(e.target.value);
// };

// const passwordHandler = (e) => {
//   setLoginPassword(e.target.value);
// };

// const navigate = useNavigate();

// const onLoginSubmit = async () => {
//   try {
//     const user = await signInWithEmailAndPassword(
//       auth,
//       loginEmail,
//       loginPassword
//     );

//     navigate("/catalog");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// login 14/10/23
// const [loginEmail, setLoginEmail] = useState("");
// const [loginPassword, setLoginPassword] = useState("");

// const emailHandler = (e) => {
//   setLoginEmail(e.target.value);
// };

// const passwordHandler = (e) => {
//   setLoginPassword(e.target.value);
// };

// const navigate = useNavigate();

// const onLoginSubmit = async () => {
//   try {
//     const user = await signInWithEmailAndPassword(
//       auth,
//       loginEmail,
//       loginPassword
//     );

//     navigate("/catalog");
//   } catch (error) {
//     console.log(error.message);
//   }
// };
