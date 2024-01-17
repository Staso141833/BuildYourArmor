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
  transition: "all 350ms",
  padding: {
    xs: "4px 8px",
    sm: "8px 12px",
    md: "8px 12px",
    lg: "8px 12px",
    xl: "8px 12px",
  },
  boxShadow:
    "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
  backgroundColor: colors.black,
  color: colors.gold,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.black,
  },
};

export const textFieldStyles = {
  height: {
    xs: "64px",
    sm: "86px",
    md: "66px",
    lg: "66px",
    xl: "64px",
  },
  width: "100%",
  backgroundColor: colors.white,
  overflow: "auto",
};

export const errorsStyles = {
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  color: "red",
  m: "0px 8px",
};
