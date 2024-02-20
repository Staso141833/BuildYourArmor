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
    xs: "45.3%",
    sm: "45.5%",
    md: "37%",
    lg: "45%",
    xl: "46.5%",
  },
  left: {
    xs: "2%",
    sm: "2%",
    md: "4%",
    lg: "2%",
    xl: "2%",
  },
  fontSize: {
    xs: "30px",
    sm: "40px",
    md: "40px",
    lg: "40px",
    xl: "40px",
  },
  padding: "2px",
  cursor: "pointer",
  color: colors.gold,
};

export const rightArrowStyles = {
  position: "absolute",
  top: {
    xs: "45.3%",
    sm: "45.5%",
    md: "37%",
    lg: "45%",
    xl: "46.5%",
  },
  right: {
    xs: "2%",
    sm: "2%",
    md: "4%",
    lg: "2%",
    xl: "2%",
  },
  fontSize: {
    xs: "30px",
    sm: "40px",
    md: "40px",
    lg: "40px",
    xl: "40px",
  },
  padding: "2px",
  cursor: "pointer",
  color: colors.gold,
};

export const quoteStyles = {
  position: "absolute",
  textAlign: "center",
  fontSize: {
    xs: "18px",
    sm: "30px",
    md: "34px",
    lg: "38px",
    xl: "40px",
  },
  width: {
    xs: "50%",
    sm: "50%",
    md: "45%",
    lg: "50%",
    xl: "70%",
  },

  top: {
    xs: "45%",
    sm: "50%",
    md: "50%",
    lg: "50%",
    xl: "66%",
  },
  left: {
    xs: "12%",
    sm: "12%",
    md: "14%",
    lg: "12%",
    xl: "13%",
  },
  color: {
    xs: colors.gold,
    sm: colors.gold,
    md: colors.gold,
    lg: colors.gold,
    xl: colors.gold,
  },
  textShadow: {
    xs: "6px 6px 10px",
    sm: "4px 4px 10px",
    md: "6px 6px 6px",
    lg: "6px 6px 6px",
    xl: "6px 6px 12px",
  },
};

export const stackDotsStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "60px",
};
