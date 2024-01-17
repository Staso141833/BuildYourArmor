import { colors } from "../../metaData/colors.js";

export const cardStyles = { borderRadius: "0px" };

export const cardMediaStyles = {
  opacity: "0.8",
  height: {
    xs: "82.5vh", //0
    sm: "100vh", // 600
    md: "60%", //900
    lg: "100vh", //1200
    xl: "100vh", //1536
  },
  objectFit: {
    xs: "none",
    sm: "cover",
    md: "cover",
    lg: "cover",
    xl: "cover",
  },
};

export const stackCardStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
};

export const leftArrowStyles = {
  position: "absolute",
  top: {
    xs: "50%",
    sm: "50%",
    md: "23%",
    lg: "50%",
    xl: "50%",
  },
  left: {
    xs: "2%",
    sm: "2%",
    md: "4%",
    lg: "2%",
    xl: "2%",
  },
  fontSize: "40px",
  padding: "2px",
  cursor: "pointer",
  color: colors.gold,
};

export const rightArrowStyles = {
  position: "absolute",
  top: {
    xs: "50%",
    sm: "50%",
    md: "23%",
    lg: "50%",
    xl: "50%",
  },
  right: {
    xs: "2%",
    sm: "2%",
    md: "4%",
    lg: "2%",
    xl: "2%",
  },
  fontSize: "40px",
  padding: "2px",
  cursor: "pointer",
  color: colors.gold,
};

export const quoteStyles = {
  position: "absolute",
  textAlign: "center",
  fontSize: {
    xs: "24px",
    sm: "30px",
    md: "34px",
    lg: "38px",
    xl: "40px",
  },
  width: {
    xs: "80%",
    sm: "70%",
    md: "70%",
    lg: "50%",
    xl: "80%",
  },

  top: {
    xs: "50%",
    sm: "50%",
    md: "30%",
    lg: "50%",
    xl: "50%",
  },
  left: {
    xs: "5%",
    sm: "6%",
    md: "14%",
    lg: "12%",
    xl: "5%",
  },
  color: {
    xs: colors.black,
    sm: colors.gold,
    md: colors.gold,
    lg: colors.gold,
    xl: colors.white,
  },
  textShadow: {
    xs: "6px 6px 6px",
    sm: "4px 4px 10px",
    md: "6px 6px 6px",
    lg: "6px 6px 6px",
    xl: "6px 6px 6px",
  },
};

export const stackDotsStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "60px",
};
