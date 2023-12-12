import { colors } from "../../../metaData/colors.js";

export const accordionStyles = {
  width: "100%",
  backgroundColor: colors.gold,
  marginBottom: "124px",
  borderRadius: "4px",
  overflow: "hidden",
};

export const commentButtonStyles = {
  backgroundColor: colors.black,
  color: colors.gold,
  fontWeight: "bold",
  transition: "all 300ms",
  width: "44%",
  marginBottom: 4,
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.black,
  },
};
