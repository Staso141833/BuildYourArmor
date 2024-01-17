import { colors } from "../../metaData/colors.js";

export const appBarStyles = {
  backgroundColor: colors.black,
};

export const toolbarStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  gap: {
    xs: 2,
  },
  alignItems: "center",
};

export const leftStackStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  mr: 2,
  width: {
    xs: "17%",
    sm: "15%",
    md: "15%",
    lg: "15%",
    xl: "15%",
  },
};

export const logoStyles = {
  fontSize: {
    xs: "24px",
    sm: "28px",
    md: "32px",
    lg: "34px",
    xl: "40px",
  },
  color: colors.gold,
};
export const youAreWhatYouEatStyles = {
  flexGrow: 1,
  color: colors.gold,
  fontSize: {
    xs: "11px",
    sm: "20px",
    md: "24px",
    lg: "26px",
    xl: "30px",
  },
  letterSpacing: {
    xs: "1px",
    sm: "2px",
    md: "3px",
    lg: "3px",
    xl: "4px",
  },
  ml: {
    xs: 1,
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
  },
  fontWeight: "600",
  textTransform: "uppercase",
  textAlign: "center",
  fontFamily: "Robotto",
  textShadow: "2px 4px 6px",
};

export const rightStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row",
  },
  gap: {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 2,
    xl: 3,
  },
  width: "auto",
  alignItems: "center",
};

export const logoutButtonStyles = {
  color: colors.gold,
  fontWeight: "bold",
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "13px",
    lg: "13px",
    xl: "14px",
  },
  transition: "all 350ms",
  "&:hover": { backgroundColor: "#fbc760", color: "#070707" },
};

export const userEmailStyles = {
  color: colors.gold,
  fontSize: {
    xs: "12px",
    sm: "16px",
    md: "18px",
    lg: "18px",
    xl: "20px",
  },
};

export const switchStyles = {
  backgroundColor: colors.white,
  borderRadius: "4px",
};

export const loginRegisterStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row",
  },
  gap: {
    xs: "4px",
    sm: "4px",
    md: 2,
    lg: 2,
    xl: 2,
  },
  alignItems: "center",
};
