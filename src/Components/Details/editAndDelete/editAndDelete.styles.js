import { colors } from "../../../metaData/colors.js";

export const editAndDeleteButtonStyles = {
  width: "auto",
  textTransform: "lowercase",
  backgroundColor: colors["light-silver"],
  color: colors.black,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors.gold,
    color: colors.black,
  },
};

export const textFieldStyles = {
  height: "64px",
  width: "100%",
  backgroundColor: colors.white,
};

export const errorsStyles = { fontSize: "16px", color: "red", mt: "4px" };
