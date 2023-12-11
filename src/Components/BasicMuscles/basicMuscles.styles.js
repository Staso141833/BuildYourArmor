import { colors } from "../../metaData/colors.js";

export const mainStackStyles = {
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  mb: 1,
  backgroundColor: colors.white,
};

export const mainHeaderStyles = { mt: 4 };
export const secondaryHeaderStyles = { textTransform: "uppercase" };
export const dividerStyles = {
  width: "100%",
  border: "1px solid black",
  mb: 1,
  mt: 1,
};
export const stackCardAndParagraphStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

export const secondaryStackStyles = {
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  width: "50%",
  gap: 4,
  marginBottom: 5,
};

export const tertiaryStackStyles = {
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 1,
};

export const tertiaryStackChildStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  gap: 2,
  mb: 2,
};

export const cardStackStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  mt: 2,
};

export const cardAndParagraphRowStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 1,
  justifyContent: "space-evenly",
};
