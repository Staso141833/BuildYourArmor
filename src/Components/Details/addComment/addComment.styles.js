import { colors } from "../../../metaData/colors.js";

export const accordionStyles = {
  width: "100%",
  backgroundColor: colors.gold,
  borderRadius: "4px",
  overflow: "hidden",
};

export const textFieldStyles = {
  height: "140px",
  width: "100%",
  overflow: "auto",
};

export const commentButtonStyles = {
  backgroundColor: colors.black,
  color: colors.gold,
  fontWeight: "bold",
  transition: "all 350ms",
  width: {
    xs: "60%",
    sm: "50%",
    md: "50%",
    lg: "48%",
    xl: "44%",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "14px",
    lg: "16px",
    xl: "16px",
  },
  marginBottom: 4,
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.black,
  },
};
