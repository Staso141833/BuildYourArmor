import { TextField, Button, Stack, Typography, CardMedia } from "@mui/material";
import "./login.css";

import { auth } from "../../config/firebase.js";

import { useState } from "react";
import { useForm } from "../../hooks/useForm.js";
import { signInWithEmailAndPassword } from "firebase/auth";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  // const {values, changeHandler, onSubmit } = useForm({[LoginFormKeys.Email]: "", [LoginFormKeys.Password]: ""}, onLoginSubmit)

  // console.log(auth?.currentUser?.email);

  // const signIn = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");

  const onLoginSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("You have successfully logged in!")
      console.log(user);
    } catch (error) {
      console.log(error.message);
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
              // name={LoginFormKeys.Email}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
                color: "white",
              }}
              // value={values[LoginFormKeys.Email]}
              onChange={(event) => {
                setloginEmail(event.target.value);
              }}
            />
            <TextField
              label="Password"
              type="password"
              // name={LoginFormKeys.Password}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
              }}
              // value={values[LoginFormKeys.Password]}
              onChange={(event) => {
                setloginPassword(event.target.value);
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              onClick={onLoginSubmit}
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
