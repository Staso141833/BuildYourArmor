import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "../Sidebar/Sidebar.js";
import "./navbar.css";
import { Stack, Link, Typography, Button } from "@mui/material";
import SafetyCheckTwoToneIcon from "@mui/icons-material/SafetyCheckTwoTone";

import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export default function NavigationBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const onLogout = async () => {
    try {
      await signOut(auth)
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: myColors.black,
          padding: "2px 0px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "15%",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                color: "#fbc760",
                transition: "transform 3000ms ease-in-out",
              }}
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
            <SafetyCheckTwoToneIcon
              sx={{ fontSize: "40px", color: myColors.gold }}
            ></SafetyCheckTwoToneIcon>
          </Stack>

          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              color: myColors.gold,
              fontSize: "30px",
              letterSpacing: "4px",
              fontWeight: "600",
              textTransform: "uppercase",
              textAlign: "center",
              fontFamily: "Robotto",
              textShadow: "2px 4px 4px"
            }}
          >
            You are what you eat
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              width: "15%",
            }}
          >
            <Typography variant="h6">
              <Link sx={{ color: "#fbc760" }} href="/login" underline="none">
                Login
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link sx={{ color: "#fbc760" }} href="/register" underline="none">
                Register
              </Link>
            </Typography>
            <Typography variant="h6">
              <Button underline="none" sx={{color: "#fbc760", fontWeight: "bold"}} onClick={onLogout}>
                Sign Out
              </Button>
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      ></TemporaryDrawer>
    </Box>
  );
}
