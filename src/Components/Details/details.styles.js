import { colors } from "../../metaData/colors.js";

export const boxStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mb: {
    xs: 2,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4,
  },
  width: "100%",
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
  gap: 2,
  mt: {
    xs: 2,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4,
  },
  mb: {
    xs: 2,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 5,
  },
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const secondaryStackStyles = {
  display: "flex",
  width: {
    xs: "90%",
    sm: "38%",
    md: "38%",
    lg: "38%",
    xl: "38%",
  },
  flexDirection: "column",
  gap: 1,
  marginBottom: 0.5,
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const cardStyles = {
  height: {
    xs: "70vh",
    sm: "80vh",
    md: "80vh",
    lg: "80vh",
    xl: "80vh",
  },
  width: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: colors.gold,
};

export const cardMediaStyles = { objectFit: "cover", height: "65%" };

export const cardActionsStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: {
    xs: 3,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
  width: "100%",
};

export const authorAndLikesStyles = {
  fontSize: {
    xs: "22px",
    sm: "32px",
    md: "32px",
    lg: "32px",
    xl: "28px",
  },
};
export const typographyStyles = {
  fontSize: {
    xs: "18px",
    sm: "12px",
    md: "12px",
    lg: "12px",
    xl: "24px",
  },
};

export const cardActionStackStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  width: "100%",
  gap: 1,
  mb: {
    xs: 2,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4,
  },
};

export const editAndDeleteButtonStyles = {
  backgroundColor: colors.black,
  color: colors.gold,
  fontWeight: "bold",
  transition: "all 300ms",
  width: "25%",
  fontSize: {
    xs: "9px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "14px",
  },
  fontFamily: "Robotto",
  "&:hover": {
    backgroundColor: colors["light-silver"],
  },
};

export const cardActionLikeButtonStyles = {
  backgroundColor: colors.black,
  width: "25%",
  fontSize: {
    xs: "9px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "14px",
  },
  height: "auto",
  "&:hover": {
    backgroundColor: colors["light-silver"],
  },
};

export const rightStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "column",
    md: "column",
    lg: "column",
    xl: "row",
  },
  textAlign: "center",
  alignContent: "flex-start",
  justifyContent: "space-evenly",
  width: {
    xs: "90%",
    sm: "38%",
    md: "38%",
    lg: "38%",
    xl: "58%",
  },
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
  letterSpacing: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
  },
  fontSize: {
    xs: "14px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "24px",
  },
  textTransform: "uppercase",
  color: colors.black,
  fontWeight: "bold",
};

export const explanationStackStyles = {
  width: {
    xs: "100%",
    sm: "80%",
    md: "80%",
    lg: "80%",
    xl: "80%",
  },
  backgroundColor: colors.gold,
  mb: 2,
  borderRadius: "4px",
  border: "1px solid black",
};

export const explanationParagraphStyles = {
  padding: "8px",
};

export const addCommentStackStyles = {
  width: {
    xs: "100%",
    sm: "80%",
    md: "80%",
    lg: "80%",
    xl: "90%",
  },
};
export const commentStackStyles = {
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  justifyContent: "space-evenly",
  height: "60vh",
  width: "100%",
};

export const commentsTitleStyles = {
  fontSize: "14px",
  letterSpacing: {
    xs: 1,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
  },
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

export const commentListItemStyles = {
  width: {
    xs: "100%",
    sm: "30vw",
    md: "30vw",
    lg: "30vw",
    xl: "30vw",
  },
};

export const likeEditDeleteStackStyles = {
  display: "flex",
  flexDirection: {
    xs: "row",
    sm: "row",
    md: "row",
    lg: "row",
    xl: "row",
  },
  gap: {
    xs: 0.4,
    sm: 1,
    md: 1,
    lg: 1,
    xl: 1,
  },
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

export const currentCommentTextStyles = {
  fontWeight: "bold",
  fontSize: {
    xs: "14px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "24px",
  },
};

export const currentCommentAuthorStyles = {
  fontSize: {
    xs: "12px",
    sm: "28px",
    md: "28px",
    lg: "28px",
    xl: "22px",
  },
}
