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
    sm: "14px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
};

export const typographyTitleStyles = {
  color: colors.gold,
  mt: 1,
  fontSize: {
    xs: "14px",
    sm: "16px",
    md: "18px",
    lg: "18px",
    xl: "18px",
  },
};

export const linkStyles = {
  color: colors.gold,
  margin: "0px 4px",
};

export const socialMediaStyles = {
  fontSize: {
    xs: "18px",
    sm: "20px",
    md: "24px",
    lg: "26px",
    xl: "30px",
  },
};

export const boxCopyRightStyles = {
  mt: {
    xs: 1,
    sm: 2,
    md: 5,
    lg: 5,
    xl: 5,
  },

  pb: {
    xs: 1,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
};

// sx={{
//   backgroundColor: (theme) =>
//     theme.palette.mode === "light"
//       ? theme.palette.grey[300]
//       : theme.palette.grey[800],
//   p: 6,
// }}
