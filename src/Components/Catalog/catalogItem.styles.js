import { colors } from "../../metaData/colors.js";

export const boxStyles = {
  width: "100%",
  height: "auto",
};

export const cardStyles = {
  display: "flex",
  flexDirection: "column",
  border: "1px outset  black",
  backgroundColor: colors.white,
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

export const cardMediaStyles = {
  display: "flex",
  alignItems: "center",
  objectFit: "contain",
  justifyContent: "center",
  marginBottom: 1.5,
  height: "70%",
  opacity: "0.9",
};

export const authorStyles = {
  fontSize: {
    xs: "22px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "28px",
  },
}
