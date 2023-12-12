import { colors } from "../../metaData/colors.js";

export const boxStyles = {
  backgroundColor: colors.black,
};

export const mainStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row",
  },
  alignItems: "center",
  justifyContent: "center",
  gap: {
    xs: 0,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
};

export const typographyStyles = {
  color: colors.gold,
  fontSize: {
    xs: "12px",
    sm: "40px",
    md: "50px",
    lg: "40px",
    xl: "16px",
  },
};

export const typographyTitleStyles = {
  color: colors.gold,
  mt: 1,
  fontSize: {
    xs: "14px",
    sm: "40px",
    md: "50px",
    lg: "40px",
    xl: "18px",
  },
};

export const linkStyles = {
  color: colors.gold,
};

export const socialMediaStyles = {
  fontSize: {
    xs: "18px",
    sm: "20px",
    md: "20px",
    lg: "20px",
    xl: "30px",
  },
};

export const boxCopyRightStyles = {
  mt: {
    xs: 2,
    sm: 5,
    md: 5,
    lg: 5,
    xl: 5,
  },
};

// sx={{
//   backgroundColor: (theme) =>
//     theme.palette.mode === "light"
//       ? theme.palette.grey[300]
//       : theme.palette.grey[800],
//   p: 6,
// }}
