import { colors } from "../../metaData/colors.js";

export const mainStyles = {
  display: "flex",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
};

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
    xs: "84.2vh",
    sm: "85.2vh",
    md: "120.2vh",
    lg: "113.5vh",
    xl: "91.4vh",
  },
};

export const muscleContainerStyles = {
  width: "80vw",
  margin: "32px 12px",
  gap: 2,
  position: "absolute",
  zIndex: "2",
  display: "flex",
  alignItems: "center",
  justifyContent:"space-evenly",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "row",
    lg: "row",
    xl: "row",
  },
};

export const muscleItemContainerStyles = {
  backgroundColor: colors.black,
  display: "coloumn",
  alignItems: "center",
  justifyContent: "space-evenly",
  borderRadius: "6px",
  border: "2px outset #fbc760",
  width: {
    xs: "65%",
    sm: "55%",
    md: "15%",
    lg: "20%",
    xl: "15%",
  },
  height: {
    xs: "40px",
    sm: "70px",
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
    sm: "14px",
    md: "14px",
    lg: "14px",
    xl: "18px",
  },
  letterSpacing: "1px",
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
    sm: 3,
    md: 4,
    lg: 4,
    xl: 4,
  },
  fontSize: {
    xs: "24px",
    sm: "32px",
    md: "36px",
    lg: "42px",
    xl: "48px",
  },
  textShadow: "5px 5px 10px #fbc760",
};
export const secondaryHeaderStyles = {
  textTransform: "uppercase",
  fontSize: {
    xs: "22px",
    sm: "24px",
    md: "28px",
    lg: "28px",
    xl: "28px",
  },
  textShadow: "2px 2px #fbc760",
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
    sm: "90%",
    md: "80%",
    lg: "70%",
    xl: "50%",
  },
  gap: {
    xs: 1,
    sm: 2,
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
    sm: "90%",
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
    sm: "100%",
    md: "90%",
    lg: "70%",
    xl: "58%",
  },
  gap: 1,
  marginBottom: 4,
};

export const tertiaryStackStyles = {
  width: {
    xs: "90%",
    sm: "90%",
    md: "90%",
    lg: "70%",
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
    sm: "24px",
    md: "28px",
    lg: "28px",
    xl: "28px",
  },
  textShadow: "2px 2px #fbc760",
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
  mb: 1,
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const stackCardAndParagraphStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: {
    xs: "column",
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
    sm: "80%",
    md: "60%",
    lg: "60%",
    xl: "60%",
  },
};
