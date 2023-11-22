import { colors } from "../../metaData/colors.js";

export const mainStackStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  alignItems: "center",
  mt: 2,
  justifyContent: "space-evenly",
};

export const secondaryStackStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 4,
  alignItems: "end",
  justifyContent: "space-evenly",
};

export const filteredDataStackStyles = {
  backgroundColor:  "rgba(251, 199, 96, 1.877)",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  overflow: "hidden",
  overflowY: "auto",
  width: "300px",
  height: "140px",
  borderRadius: "6px",
  cursor: "pointer",
  "&::-webkit-scrollbar": {
    // borderRadius: "2px",
  },
};

