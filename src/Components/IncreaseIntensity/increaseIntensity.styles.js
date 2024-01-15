import { colors } from "../../metaData/colors.js";

export const mainStackStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  mb: 1,
  backgroundColor: colors.white,
};

export const mainHeaderStyles = {
  mt: {
    xs: 2,
    sm: 3,
    md: 3,
    lg: 3,
    xl: 3,
  },
  fontSize: {
    xs: "24px",
    sm: "26px",
    md: "24px",
    lg: "28px",
    xl: "32px",
  },
  fontWeight: "bold",
  textShadow: "10px 10px 8px #665d58",
};
export const secondaryHeaderStyles = {
  textTransform: "uppercase",
  fontSize: {
    xs: "20px",
    sm: "22px",
    md: "22px",
    lg: "22px",
    xl: "22px",
  },
  fontWeight: "500",
  textShadow: "2px 2px #fbc760",
  blurRadius: "1",
};
export const dividerStyles = {
  width: "100%",
  border: "1px solid black",
  mb: 1,
};

export const secondaryStackStyles = {
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  width: {
    xs: "90%",
    sm: "75%",
    md: "50%",
    lg: "70%",
    xl: "50%",
  },
  gap: 4,
  marginBottom: 5,
};
