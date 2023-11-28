import { colors } from "../../metaData/colors.js";

export const createAndEditmainStackStyles = {
  position: "relative",
  backgroundColor: "#f6f6f6",
  width: "auto",
  height: "100vh",
  overflow: "hidden",
};

export const createAndEditPaperStyles = {
  width: "660px",
  height: "92%",
  backgroundColor: "#fbc760",
  border: "3px solid #170f0a",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "absolute",
  justifyContent: "space-evenly",
  left: "50%",
  top: "56%",
  mt: 1,
  transform: "translate(-53%, -61%)",
  zIndex: "2",
  boxShadow: "40px 30px 30px #170f0a",
};

export const publishAndEditButtonStyles = {
  backgroundColor: "#170f0a",
  color: "#fbc760",
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

export const createAndEditTitleStyles = {
  fontWeight: 700,
  marginTop: "18px",
  letterSpacing: 1,
  textTransform: "uppercase",
};

export const menuItemStyles = {
  width: "100%",
  backgroundColor: colors.gold,
  color: colors.black,
  transition: "all 350ms",
  "&:hover": {
    backgroundColor: colors.black,
    color: colors.gold,
  },
};

export const formControlStyles = {
  mt: 1,
  display: "flex",
  gap: "12px",
  width: "400px",
};

export const cardMediaStyles = {
  width: "200px",
  left: "50%",
  top: "50%",
  transform: "translate(255.5%, 376%)",
};

export const errorsStyles = { fontSize: "16px", color: "red" };
