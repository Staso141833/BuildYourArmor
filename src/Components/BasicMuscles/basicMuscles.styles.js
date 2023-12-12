import { colors } from "../../metaData/colors.js";

export const cardStyles = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export const cardMediaStyles = {
  objectFit: "cover",
  zIndex: "1",
  position: "absolute",
  opacity: "0.9",
  width: "100%",
  height: "91.3vh",
};

export const muscleContainerStyles = {
  width: "80vw",
  margin: "32px 12px",
  gap: 2,
  position: "absolute",
  zIndex: "2",
  alignItems: "center",
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row",
  },
};

export const muscleItemContainerStyles = {
  backgroundColor: colors.black,
  display: "coloumn",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "6px",
  border: "2px outset #fbc760",
  width: {
    xs: "65%",
    sm: "15%",
    md: "15%",
    lg: "15%",
    xl: "15%",
  },
  height: {
    xs: "40px",
    sm: "60px",
    md: "60px",
    lg: "60px",
    xl: "60px",
  },
};

export const buttonStyles = {
  fontFamily: "Robotto",
  fontSize: {
    xs: "12px",
    sm: "18px",
    md: "18px",
    lg: "18px",
    xl: "18px",
  },
  color: colors.gold,
  cursor: "pointer",
  textTransform: "uppercase",
  fontWeight: "600",
  padding: "14px 24px",
  borderRadius: "6px",
};
export const boxFooterStyles = {
  marginTop: {
    xs: "778px",
    sm: "878px",
    md: "878px",
    lg: "878px",
    xl: "878px",
  },
};

export const mainStackStyles = {
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  textAlign: "center",
  justifyContent: "space-evenly",
  mb: 4,
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
