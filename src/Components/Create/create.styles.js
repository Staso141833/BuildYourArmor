import { InputAdornment } from "@mui/material";
import { colors } from "../../metaData/colors.js";
import {
  AccountCircle,
  DescriptionRounded,
  HeightOutlined,
  Image,
} from "@mui/icons-material";

export const createAndEditmainStackStyles = {
  position: "relative",
  backgroundColor: "#f6f6f6",
  height: {
    xs: "130vh",
    sm: "100vh",
    md: "130vh",
    lg: "130vh",
    xl: "110vh",
  },
  overflow: "hidden",
};

export const createAndEditPaperStyles = {
  width: {
    xs: "86%",
    sm: "560px",
    md: "80%",
    lg: "660px",
    xl: "660px",
  },
  height: {
    xs: "90%",
    sm: "82%",
    md: "82%",
    lg: "85%",
    xl: "80%",
  },
  backgroundColor: colors.gold,
  border: "3px solid #170f0a",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "absolute",
  justifyContent: "space-evenly",
  left: {
    xs: "58%",
    sm: "52%",
    md: "52%",
    lg: "50%",
    xl: "50%",
  },
  top: {
    xs: "56%",
    sm: "52%",
    md: "52%",
    lg: "52%",
    xl: "50%",
  },
  mt: 1,
  transform: "translate(-53%, -61%)",
  zIndex: "2",
  boxShadow: {
    xs: "none",
    sm: "40px 30px 50px #170f0a",
    md: "40px 30px 50px #170f0a",
    lg: "40px 30px 50px #170f0a",
    xl: "40px 30px 50px #170f0a",
  },
};

export const createAndEditTitleStyles = {
  fontWeight: 700,
  marginTop: {
    xs: "8px",
    sm: "10px",
    md: "12px",
    lg: "12px",
    xl: "18px",
  },
  letterSpacing: 1,
  textTransform: "uppercase",
  fontSize: {
    xs: "14px",
    sm: "20px",
    md: "22px",
    lg: "24px",
    xl: "26px",
  },
};

export const formGroupStyles = { justifyContent: "space-around", width: "90%" };

export const formControlStyles = {
  mt: 1,
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  gap: "12px",
  width: {
    xs: "90%",
    sm: "80%",
    md: "80%",
    lg: "80%",
    xl: "100%",
  },
};

export const textFieldStyles = {
  width: {
    xs: "100%",
    sm: "100%",
    md: "100%",
    lg: "100%",
    xl: "80%",
  },
  fontSize: "12px",
};

export const menuItemStyles = {
  width: "100%",
  backgroundColor: colors.black,
  color: colors.white,
  transition: "all 350ms",
  "&:hover": {
    backgroundColor: colors.white,
    color: colors.gold,
  },
};

export const publishAndEditButtonStyles = {
  backgroundColor: colors.black,
  color: colors.gold,
  padding: "12px",
  fontSize: {
    xs: "12px",
    sm: "16px",
    md: "16px",
    lg: "16px",
    xl: "16px",
  },
  mb: 1,
  mt: 1,
  width: "60%",
  border: " 1px solid #4c4850",
  "&:hover": {
    backgroundColor: "#4c4850",
    border: "1px solid black",
  },
};
export const cardMediaStyles = {
  width: {
    xs: "100px",
    sm: "200px",
    md: "200px",
    lg: "200px",
    xl: "200px",
  },
  left: "50%",
  top: "50%",
  transform: {
    xs: "translate(4.8%, 980%)",
    sm: "translate(5.3%, 367%)",
    md: "translate(1.4%, 336%)",
    lg: "translate(121%, 358%)",
    xl: "translate(255.5%, 365.5%)",
  },
};

export const errorsStyles = {
  fontSize: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "16px",
  },
  color: "red",
};

export const inputPropsName = {
  startAdornment: (
    <InputAdornment position="start">
      <AccountCircle />
    </InputAdornment>
  ),
};

export const inputPropsHeight = {
  startAdornment: (
    <InputAdornment position="start">
      <HeightOutlined />
    </InputAdornment>
  ),
};
export const inputPropsDescription = {
  startAdornment: (
    <InputAdornment position="start">
      <DescriptionRounded />
    </InputAdornment>
  ),
};

export const inputPropsImageUrl = {
  startAdornment: (
    <InputAdornment position="start">
      <Image />
    </InputAdornment>
  ),
};
