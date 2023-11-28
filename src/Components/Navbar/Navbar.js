import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer.js";
import "./navbar.css";
import { Stack, Typography, Button, Switch } from "@mui/material";
import SafetyCheckTwoToneIcon from "@mui/icons-material/SafetyCheckTwoTone";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext.js";
import RemoveCookie from "../../hooks/removeCookie.js";
import { auth } from "../../config/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  appBarStyles,
  leftStackStyles,
  loginRegisterStyles,
  logoStyles,
  logoutButtonStyles,
  rightStackStyles,
  switchStyles,
  toolbarStyles,
  userEmailStyles,
  youAreWhatYouEatStyles,
} from "./navbar.styles.js";

const label = { inputProps: { "area-label": "switch demo" } };

export default function NavigationBar({ checked, onClickThemeChange }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { userEmail, isAuthenticated, setUserIn } = useAuthContext();

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    setUserIn(currentUser);
  });

  const logout = () => signOut(auth);

  const onLogout = async () => {
    try {
      await logout(auth);
      RemoveCookie("userIn");
      setUserIn({});
      navigate("/home");
    } catch (error) {
      console.log(`There is a problem ${error}`);
    }
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={appBarStyles}>
        <Toolbar sx={toolbarStyles}>
          <Stack sx={leftStackStyles}>
            <TemporaryDrawer
              state={state}
              setState={setState}
              toggleDrawer={toggleDrawer}
            ></TemporaryDrawer>

            <SafetyCheckTwoToneIcon sx={logoStyles}></SafetyCheckTwoToneIcon>
          </Stack>

          <Typography variant="h2" component="div" sx={youAreWhatYouEatStyles}>
            You are what you eat
          </Typography>
          <Stack sx={rightStackStyles}>
            <Stack>
              <Switch
                {...label}
                defaultChecked
                color="secondary"
                onClick={onClickThemeChange}
                checked={checked}
                sx={switchStyles}
              />
            </Stack>

            {isAuthenticated && (
              <>
                <Typography variant="h6">
                  <Button
                    underline="none"
                    sx={logoutButtonStyles}
                    onClick={onLogout}
                  >
                    Sign Out
                  </Button>
                </Typography>

                <Typography variant="h6" sx={userEmailStyles}>
                  {userEmail}
                </Typography>
              </>
            )}
            {!isAuthenticated && (
              <Stack variant="div" sx={loginRegisterStyles}>
                <Link to="/login" className="login-register-button">
                  Login
                </Link>

                <Link to="/register" className="login-register-button">
                  Register
                </Link>
              </Stack>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
