import { colors } from "../../metaData/colors.js";

export const createAndEditmainStackStyles = {
  position: "relative",
  backgroundColor: "#f6f6f6",

  height: "100vh",
  overflow: "hidden",
};

export const createAndEditPaperStyles = {
  width: {
    xs: "300px",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "660px",
  },
  height: "92%",
  backgroundColor: colors.gold,
  border: "3px solid #170f0a",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  justifyContent: "space-evenly",
  left: {
    xs: "52%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
  top: "56%",
  mt: 1,
  transform: "translate(-53%, -61%)",
  zIndex: "2",
  boxShadow: "40px 30px 40px #170f0a",
};

export const createAndEditTitleStyles = {
  fontWeight: 700,
  marginTop: "18px",
  letterSpacing: 1,
  textTransform: "uppercase",
  fontSize: {
    xs: "14px",
    sm: "20px",
    md: "20px",
    lg: "30px",
    xl: "32px",
  },
};

export const formControlStyles = {
  mt: 1,
  display: "flex",
  gap: "12px",
  width: {
    xs: "200px",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "400px",
  },
};

export const textFieldStyles = {
  width: {
    xs: "100%",
    sm: "auto",
    md: "auto",
    lg: "auto",
    xl: "auto",
  },
  fontSize: "12px",
};

export const menuItemStyles = {
  width: "100%",
  backgroundColor: colors.black,
  color: colors.white,
  transition: "all 350ms",
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.gold,
  },
};

export const publishAndEditButtonStyles = {
  backgroundColor: colors.black,
  color: colors.gold,
  padding: "12px",
  fontSize: "16px",
  mb: 1,
  mt: 1,
  width: "60%",
  border: " 1px solid #4c4850",
  "&:hover": {
    backgroundColor: "#4c4850",
    border: "1px solid black",
  },
};
export const cardMediaStyles = {
  width: {
    xs: "100px",
    sm: "200px",
    md: "200px",
    lg: "200px",
    xl: "200px",
  },
  left: "50%",
  top: "50%",
  transform: {
    xs: "translate(-2%, 694%)",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "translate(255.5%, 376%)",
  },
};

export const errorsStyles = {
  fontSize: {
    xs: "10px",
    sm: "16px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  color: "red",
};
