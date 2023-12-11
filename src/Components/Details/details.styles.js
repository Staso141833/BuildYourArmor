import { colors } from "../../metaData/colors.js";

export const boxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: 4,
  
};

export const mainStackStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  mt: 4,
  mb: 5,
  width: "100%",
  height: "100%",
  justifyContent: "space-evenly",
};

export const secondaryStackStyles = {
  display: "flex",
  width: "38%",
  flexDirection: "column",
  gap: 1,
  marginBottom: 0.5,
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const cardStyles = {
  height: "80vh",
  width: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: colors.gold
};

export const cardMediaStyles = { objectFit: "cover", height: "65%" };

export const cardActionsStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 1,
  width: "100%",
};

export const cardActionStackStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  gap: 1,
  mb: 4,
};
export const editAndDeleteButtonStyles = {
  backgroundColor: colors.black,
  color: colors.gold,
  fontWeight: "bold",
  transition: "all 300ms",
  width: "25%",
  fontFamily: "Robotto",
  "&:hover": {
    backgroundColor: colors["light-silver"],
  },
};

export const cardActionLikeButtonStyles = {
  backgroundColor: colors.black,
  width: "25%",
  height: "auto",
};

export const rightStackStyles = {
  display: "flex",
  flexDirection: "row",
  textAlign: "center",
  alignContent: "flex-start",
  justifyContent: "space-evenly",
  width: "58%",
  gap: 3,
};

export const rightStackStylesChild = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 2,
  width: "100%",
};

export const excerciseExplanationStyles = {
  letterSpacing: 4,
  textTransform: "lowercase",
  color: colors.gold,
  fontWeight: "bold",
};

export const explanationStackStyles = {
  width: "80%",
  backgroundColor: colors.white,
  mb: 2,
  borderRadius: "4px",
};

export const explanationParagraphStyles = {
  padding: "8px",
};

export const commentStackStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "space-evenly",
  height: "60vh",
};

export const commentsTitleStyles = {
  fontSize: "14px",
  letterSpacing: 4,
  textTransform: "uppercase",
  textAlign: "center",
  color: colors.black,
  fontWeight: "bold",
  mb: 1,
};

export const commentsCountStackStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
  alignItems: "center",
  width: "100%",
  overflow: "auto",
};

export const currentCommentStackStyles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  backgroundColor: colors.gold,
  color: colors.black,
  padding: 1,
  borderRadius: 1,
};
