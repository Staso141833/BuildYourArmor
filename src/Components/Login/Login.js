import { TextField, Button, Stack, Typography, CardMedia } from "@mui/material";
import "./login.css";
import { auth } from "../../config/firebase.js";
import { useFormMine } from "../../hooks/useFormMine.js";
import { useAuthContext } from "../../contexts/AuthContext.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Login = () => {
  const { onLoginSubmit } = useAuthContext();

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
    <>
      <form method="POST" sx={{ width: "70vw", height: "80vh" }}>
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
              gap: 3,
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
              {...register("loginEmail")}
              value={values.loginEmail}
              onChange={changeHandler}
              sx={{
                width: "80%",
                borderRadius: "4px",
                color: "white",
              }}
            />
            <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
              {errors?.loginEmail?.message}
            </Typography>
            <TextField
              label="Password"
              type="password"
              {...register("loginPassword")}
              name="loginPassword"
              value={values.loginPassword}
              onChange={changeHandler}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
              }}
            />

            <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
              {errors.loginPassword?.message}
            </Typography>

            <Button
              variant="outlined"
              onClick={handleSubmit(onSubmit)}
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
