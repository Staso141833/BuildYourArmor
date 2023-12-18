import { colors } from "../../metaData/colors.js";

export const mainStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "column",
  },
  gap: 3,
  alignItems: "center",
  mt: 2,
  justifyContent: "space-evenly",
};

export const secondaryStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "row",
  },
  gap: 4,
  alignItems: "end",
  justifyContent: "space-evenly",
};

export const tertialyStackStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 4,
  alignItems: "end",
  justifyContent: "space-evenly",
};

export const filteredDataStackStyles = {
  backgroundColor: "rgba(251, 199, 96, 1.877)",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  overflow: "hidden",
  overflowY: "auto",
  width: {
    xs: "220px",
    sm: "300px",
    md: "300px",
    lg: "300px",
    xl: "300px",
  },
  height: "140px",
  borderRadius: "6px",
  mb: {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 0,
  },
  cursor: "pointer",
  "&::-webkit-scrollbar": {
    //  borderRadius: "2px",
  },
};
