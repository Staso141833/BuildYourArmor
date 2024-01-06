import { colors } from "../../metaData/colors.js";

export const cardStyles = { borderRadius: "0px" };

export const cardMediaStyles = {
  opacity: "0.8",
  height: {
    xs: "82.5vh",
    sm: "100vh",
    md: "100vh",
    lg: "100vh",
    xl: "100vh",
  },
  objectFit: {
    xs: "none",
    sm: "40px",
    md: "50px",
    lg: "40px",
    xl: "cover",
  },
  objectPosition: "80% 0%",
};

export const stackCardStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
};

export const homeTitleStackStyles = {
  width: {
    xs: "20vw",
    sm: "40px",
    md: "50px",
    lg: "40px",
    xl: "100%",
  },
};
export const homeTitleStyles = {
  top: {
    xs: "45%",
    sm: "40px",
    md: "50px",
    lg: "40px",
    xl: "10%",
  },
  left: "4%",
  fontSize: {
    xs: "18px",
    sm: "40px",
    md: "50px",
    lg: "40px",
    xl: "58px",
  },
  color: colors.white,
  fontWeight: "bold",
  width: {
    xs: "36%",
    sm: "25%",
    md: "50",
    lg: "30%",
    xl: "46%",
  },
  textShadow: "4px 12px 14px #847470",
  fontStyle: "Italic",
};

export const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  left: "2%",
  fontSize: "40px",
  padding: "2px",
  cursor: "pointer",
  color: colors.white,
};

export const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  right: "2%",
  fontSize: "40px",
  padding: "2px",
  cursor: "pointer",
  color: colors.white,
};



export const quoteStyles = {
  position: "absolute",
  textAlign: "center",
  fontSize: "40px",
  top: "50%",
  left: "5%",
  color: colors.gold,
  textShadow: "6px 6px 6px"
};

export const stackDotsStyles = {
  display: "flex",
  flexDirection: "row",
  margin: "12px 0px",

}
