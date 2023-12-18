import { colors } from "../../../metaData/colors.js";

export const editAndDeleteStackStyles = {
  display: "flex",
  flexDirection: "row",
  gap: {
    xs: 0.4,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
};

export const editAndDeleteButtonStyles = {
  width: "auto",
  textTransform: "lowercase",
  backgroundColor: colors.black,
  color: colors.gold,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.black,
  },
};

export const textFieldStyles = {
  height: "64px",
  width: "100%",
  backgroundColor: colors.white,
};

export const errorsStyles = {
  fontSize: {
    xs: "12px",
    sm: "16px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  color: "red",
  m: "0px 8px",
};
