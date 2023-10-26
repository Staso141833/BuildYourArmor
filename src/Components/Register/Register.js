import { TextField, Button, Stack, Typography, CardMedia } from "@mui/material";
import { useContext } from "react";
import { auth } from "../../config/firebase.js";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useFormMine } from "../../hooks/useFormMine.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
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
      .required("Password must be at least 4 characters"),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
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
    <>
      <form>
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
            backgroundColor: "#040404",
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
              gap: 2,
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
              Register
            </Typography>
            <TextField
              label="Emails"
              type="email"
              name="email"
              {...register("email")}
              value={values.email}
              onChange={changeHandler}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
                color: "white",
              }}
            />
            <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
              {errors.email?.message}
            </Typography>
            <TextField
              label="Password"
              color="warning"
              type="password"
              name="password"
              {...register("password")}
              value={values.password}
              onChange={changeHandler}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
              }}
            />
            <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
              {errors.password?.message}
            </Typography>
            <TextField
              label="re-password"
              color="warning"
              type="password"
              name="rePassword"
              {...register("rePassword")}
              value={values.rePassword}
              onChange={changeHandler}
              sx={{
                width: "80%",
                backgroundColor: "#B3AEAB",
                borderRadius: "4px",
              }}
            />
            {errors.rePassword && (
    <Typography variant="p" sx={{ fontSize: "16px", color: "red" }}>
              The re-password does not match with the password!
    </Typography>
            )}
        
            <Button
              onClick={handleSubmit(onSubmit)}
              variant="outlined"
              sx={{
                backgroundColor: "#170f0a",
                color: "#fbc760",
                padding: "12px",
                fontSize: "16px",
                width: "46%",
                fontWeight: "bold",
                border: " 1px solid #fbc760",
                "&:hover": {
                  backgroundColor: "#fbc760",
                  color: "#4c4850",
                },
              }}
            >
              Register
            </Button>
          </Stack>

          <Stack sx={{ width: "50%" }}>
            <CardMedia
              component="img"
              // image="https://www.mdpi.com/sports/sports-09-00032/article_deploy/html/images/sports-09-00032-g002.png"
              image="https://www.godearlife.com/wp-content/uploads/2022/09/muscle-gain-motivation.jpg"
              alt="growing up"
              sx={{
                width: "100%",
                filter: "opacity(0.8) drop-shadow(0 0 black)",
                transition: "transform 300ms ease-in-out",
                // "&:hover": {
                //   transform: "scale(1.5)",
                // },
              }}
            ></CardMedia>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

// const [registerEmail, setRegisterEmail] = useState("");
// const [registerPassword, setRegisterPassword] = useState("");
// const [registerRePassword, setRegisterRePassword] = useState("");
// const navigate = useNavigate();

// const emailHandler = (e) => {
//   setRegisterEmail(e.target.value);
// };

// const passwordHandler = (e) => {
//   setRegisterPassword(e.target.value);
// };

// const rePasswordHandler = (e) => {
// setRegisterRePassword(e.target.value)
// }

// const onRegisterSubmit = async () => {
//   try {
//     const user = await createUserWithEmailAndPassword(
//       auth,
//       registerEmail,
//       registerPassword
//     );
//     navigate("/catalog");
//   } catch (error) {
//     console.log(error.message);
//   }
// };
