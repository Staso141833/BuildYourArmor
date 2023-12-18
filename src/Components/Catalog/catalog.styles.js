import { colors } from "../../metaData/colors.js";

export const boxStyles = {
  width: "100%",
  minHeight: "auto",
  backgroundColor: colors.gold,
  display: "flex",
  gap: {
    xs: 16,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 0,
  },
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

export const noPublicationsStyles = {
  flexGrow: 1,
  color: colors.black,
  fontSize: "24px",
  letterSpacing: "4px",
  fontWeight: "600",
  textTransform: "uppercase",
  fontFamily: "Robotto",
  textShadow: "2px 4px 4px",
  width: "100%",
};

export const publicationMainStackStyles = {
  margin: {
    xs: "4px 14px",
    sm: "0px 64px",
    md: "0px 64px",
    lg: "0px 64px",
    xl: "12px 38px",
  },
};

export const publicationStackStyles = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, 1fr)",
    sm: "repeat(4, 1fr)",
    md: "repeat(4, 1fr)",
    lg: "repeat(4, 1fr)",
    xl: "repeat(4, 1fr)",
  },
  gridTemplateRows: "masonry",
  alignTracks: "stretch",
  alignItems: "start",
  margin: "20px auto",
  gap: 2,
  width: {
    xs: "80%",
    sm: "80%",
    md: "80%",
    lg: "80%",
    xl: "100%",
  },
};
