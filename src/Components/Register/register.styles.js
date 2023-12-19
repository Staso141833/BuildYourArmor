import { colors } from "../../metaData/colors.js";

export const formControlStyles = {
  height: "90vh",
};

export const registerHeaderStyles = {
  fontSize: {
    xs: "16px",
    sm: "24px",
    md: "24px",
    lg: "24px",
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

export const registerFormMainStackStyles = {
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
    sm: "120px",
    md: "120px",
    lg: "120px",
    xl: "120px",
  },
  marginBottom: {
    xs: "40px",
    sm: "120px",
    md: "120px",
    lg: "120px",
    xl: "120px",
  },
  border: "1px solid #4c4850",
  borderRadius: "8px",
  height: {
    xs: "80%",
    sm: "80vh",
    md: "500px",
    lg: "500px",
    xl: "500px",
  },
  width: {
    xs: "340px",
    sm: "1040px",
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
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
  height: {
    xs: "64%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: {
    xs: 1,
    sm: 3,
    md: 3,
    lg: 3,
    xl: 3,
  },

  backgroundColor: colors.white,
};

export const registerInputStyles = {
  width: "80%",
  borderRadius: "4px",
};

export const registerButtonStyles = {
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
  mb: 1,
  border: " 1px solid ",
  borderColor: colors.black,
  "&:hover": {
    backgroundColor: colors.black,
    color: colors.gold,
    borderColor: colors.gold,
  },
};
export const cardMediaStackStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: {
    xs: "35%",
    sm: "100%",
    md: "100%",
    lg: "100%",
    xl: "100%",
  },
  width: {
    xs: "100%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
};

export const registerErrorsStyles = {
  fontSize: {
    xs: "12px",
    sm: "16px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  color: "red",
};
