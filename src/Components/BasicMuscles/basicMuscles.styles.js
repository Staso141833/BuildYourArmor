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
  height: {
    xs: "91.4vh",
    sm: "94vh",
    md: "94vh",
    lg: "94vh",
    xl: "94.2vh",
  },
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

export const menuItemStyles = {
  justifyContent: "center",
  padding: "0px",
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

export const anchorOriginStyles = {
  vertical: "bottom",
  horizontal: "center",
};

export const transformOriginStyles = {
  vertical: "top",
  horizontal: "center",
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
  backgroundColor: colors.white,
};

export const mainHeaderStyles = {
  mt: {
    xs: 2,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4,
  },
  fontSize: {
    xs: "24px",
    sm: "48px",
    md: "48px",
    lg: "48px",
    xl: "48px",
  },
};
export const secondaryHeaderStyles = {
  textTransform: "uppercase",
  fontSize: {
    xs: "22px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "28px",
  },
};
export const dividerStyles = {
  width: "100%",
  border: "1px solid black",
  mb: 1,
  mt: 1,
};

export const secondaryStackStyles = {
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  width: {
    xs: "90%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
  gap: {
    xs: 1,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4,
  },
  marginBottom: 5,
};

export const secondaryStackChildStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "row",
  },
  justifyContent: "space-between",
  alignItems: "center",
  gap: 2,
  m: 2,
  width: "100%",
};

export const secondaryStackCardStyles = {
  width: {
    xs: "80%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "38%",
  },
};

export const secondaryStackChildChildStyles = {
  fontSize: "18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-evenly",
  width: {
    xs: "94%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "58%",
  },
  gap: 1,
  marginBottom: 4,
};

export const tertiaryStackStyles = {
  width: {
    xs: "90%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "50%",
  },
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: 1,
};

export const tertialyHeaderStyles = {
  fontSize: {
    xs: "22px",
    sm: "48px",
    md: "48px",
    lg: "48px",
    xl: "40px",
  },
};

export const tertiaryStackChildStyles = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: 2,
  mb: 2,
};

export const tertiaryStackCardStyles = {
  width: "100%",
};

export const cardStackStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  mt: 2,
  alignItems: "center",
};

export const cardAndParagraphRowStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "row",
  },
  gap: 1,
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const stackCardAndParagraphStyles = {
  display: "flex",
  flexDirection: {
    xs: "row",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "column",
  },
  gap: 2,
};

export const cardWidthStyles = {
  width: {
    xs: "100%",
    sm: "60%",
    md: "60%",
    lg: "60%",
    xl: "60%",
  },
};
