import { colors } from "../../metaData/colors.js";

export const formControlStyles = {
  height: "100vh",
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
    xs: "10px",
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
    xs: "96%",
    sm: "800px",
    md: "500px",
    lg: "500px",
    xl: "500px",
  },
  width: {
    xs: "90%",
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
    xs: "64%",
    sm: "50%",
    md: "100%",
    lg: "100%",
    xl: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: {
    xs: 1,
    sm: 1,
    md: 2,
    lg: 2,
    xl: 3,
  },

  backgroundColor: colors.white,
};

export const registerHeaderStyles = {
  fontSize: {
    xs: "16px",
    sm: "18px",
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

export const registerInputStyles = {
  width: "80%",
  borderRadius: "4px",
  height: {
    xs: "48px",
  },

};

export const registerButtonStyles = {
  backgroundColor: colors.gold,
  color: colors.black,
  padding: {
    xs: "8px",
    sm: "8px",
    md: "10px",
    lg: "10px",
    xl: "12px",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "16px",
  },
  width: "40%",
  mb: 1,
  mt: 1,
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
    sm: "50%",
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

export const cardMediaStyles = {
  width: "100%",
  filter: "opacity(0.8) drop-shadow(0 0 black)",
};

export const registerErrorsStyles = {
  fontSize: {
    xs: "11px",
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "16px",
  },
  color: "red",
};
