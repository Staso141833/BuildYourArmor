import { colors } from "../../../metaData/colors.js";

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

export const errorsStyles = { fontSize: "16px", color: "red", mt: "4px" };
