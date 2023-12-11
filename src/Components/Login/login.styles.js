import { colors } from "../../metaData/colors.js";

export const loginHeaderStyles = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fbc760",
  textTransform: "upperCase",
  letterSpacing: "2px",
  marginTop: "32px",
};

export const loginFormMainStackStyles = {
  display: "flex",
  flexDirection: "row",
  margin: "auto",
  marginTop: "120px",
  border: "1px solid #4c4850",
  borderRadius: "8px",
  height: "500px",
  width: "1040px",
  backgroundColor: colors.black,
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "10px 20px 20px #665d58",
  overflow: "hidden",
  marginBottom: "140px",
};
export const emailAndPasswordStackStyles = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 3,
  height: "100%",
  backgroundColor: colors.white,
};

export const loginInputStyles = {
  width: "80%",
  borderRadius: "4px",
};

export const loginButtonStyles = {
  backgroundColor: colors.gold,
  color: colors.black,
  padding: "12px",
  fontSize: "16px",
  width: "46%",
  border: " 1px solid ",
  borderColor: colors.black,
  "&:hover": {
    backgroundColor: colors.black,
    color: colors.gold,
  },
};

export const cardMediaStyles = {
  width: "50%",
  filter: "opacity(0.8) drop-shadow(0 0 black)",
};

export const loginErrorsStyles = { fontSize: "16px", color: "red" };
