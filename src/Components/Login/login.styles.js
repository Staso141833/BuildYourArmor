import { colors } from "../../metaData/colors.js";

export const loginHeaderStyles = {
  fontSize: {
    xs: "16px",
    sm: "22px",
    md: "22px",
    lg: "22px",
    xl: "24px",
  },
  fontWeight: "bold",
  color: colors.black,
  textTransform: "upperCase",
  letterSpacing: "2px",
  marginTop: {
    xs: 2,
    sm: 3,
    md: 3,
    lg: 3,
    xl: 3,
  },
};

export const loginFormMainStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row",
  },
  margin: "auto",
  marginTop: {
    xs: "40px",
    sm: "50px",
    md: "80px",
    lg: "100px",
    xl: "120px",
  },
  marginBottom: {
    xs: "40px",
    sm: "50px",
    md: "80px",
    lg: "100px",
    xl: "120px",
  },
  border: "1px solid #4c4850",
  borderRadius: "8px",
  height: {
    xs: "80%",
    sm: "800px",
    md: "500px",
    lg: "500px",
    xl: "500px",
  },
  width: {
    xs: "340px",
    sm: "640px",
    md: "1040px",
    lg: "1040px",
    xl: "1040px",
  },
  backgroundColor: colors.black,
  justifyContent: "space-evenly",
  alignItems: "center",
  boxShadow: "10px 20px 20px #665d58",
  overflow: "hidden",
};
export const emailAndPasswordStackStyles = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
  height: {
    xs: "50%",
    sm: "70%",
    md: "50%",
    lg: "100%",
    xl: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 3,
  },

  backgroundColor: colors.white,
};

export const loginInputStyles = {
  width: "80%",
  borderRadius: "4px",
};

export const loginButtonStyles = {
  backgroundColor: colors.gold,
  color: colors.black,
  padding: {
    xs: "8px",
    sm: "12px",
    md: "12px",
    lg: "12px",
    xl: "12px",
  },
  fontSize: {
    xs: "14px",
    sm: "16px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  width: "46%",
  border: " 1px solid ",
  borderColor: colors.black,
  "&:hover": {
    backgroundColor: colors.black,
    color: colors.gold,
    borderColor: colors.gold,
  },
  mb: {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
};

export const cardMediaStackStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: {
    xs: "50%",
    sm: "50%",
    md: "100%",
    lg: "100%",
    xl: "100%",
  },
  width: {
    xs: "100%",
    sm: "100%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
};

export const cardMediaStyles = {
  width: "100%",
  filter: "opacity(0.7) drop-shadow(0 0 black)",
};

export const loginErrorsStyles = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  color: "red",
};
