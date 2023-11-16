import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer.js";
import "./navbar.css";
import { Stack, Typography, Button, List, Switch } from "@mui/material";
import SafetyCheckTwoToneIcon from "@mui/icons-material/SafetyCheckTwoTone";
import { Link as MuiLink } from "@mui/material";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};
const label = { inputProps: { "area-label": "switch demo" } };

export default function NavigationBar({ checked, onClickThemeChange }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const { userIn, userEmail, isAuthenticated, userId, token, onLogout } =
    useAuthContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const links = ["/home", "/create", "/basicMuscles", "/catalog", "/intensity"];

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
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "15%",
            }}
          >
            {/* <IconButton>
              <MenuIcon
                size="large"
                edge="start"
                color="warning"
                aria-label="menu"
                sx={{
                  mr: 2,
                  color: "#fbc760",
                  transition: "transform 3000ms ease-in-out",
                }}
                onClick={toggleDrawer("left", true)}
              />
            </IconButton> */}

            <TemporaryDrawer
              state={state}
              setState={setState}
              toggleDrawer={toggleDrawer}
            ></TemporaryDrawer>

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
              textShadow: "2px 4px 4px",
            }}
          >
            You are what you eat
          </Typography>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              width: "auto",
            }}
          >
            <Stack sx={{ backgroundColor: myColors.white }}>
              <Switch
                {...label}
                defaultChecked
                color="secondary"
                onClick={onClickThemeChange}
                checked={checked}
              />
            </Stack>

            {isAuthenticated && (
              <>
                {/* <List sx={{ display: "flex", flexDirection: "row" }}>
                  {[
                    "Home",
                    "Share your experience",
                    "Basic muscles",
                    "The power of knowledge",
                    "Increase intensity",
                  ].map((text, index) => (
                    <ListItem
                      key={text}
                      disablePadding
                      sx={{
                        marginBottom: 2,
                        transition: "all 300ms",
                        "&:hover": {
                          backgroundColor: myColors.black,
                        },
                      }}
                    >
                      <ListItemButton>
                        <ListItemIcon sx={{ color: myColors.gold }}>
                          {index % 2 === 0 ? (
                            <FitnessCenterSharp
                              fontSize="small"
                              position="right"
                            />
                          ) : (
                            <FitnessCenterSharp fontSize="small" />
                          )}
                        </ListItemIcon>

                        <Link
                          href={`${links[index]}`}
                     
                        >
                          {text}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>  */}

                <Typography variant="h6">
                  <Button
                    underline="none"
                    sx={{ color: "#fbc760", fontWeight: "bold" }}
                    onClick={onLogout}
                  >
                    Sign Out
                  </Button>
                </Typography>

                <Typography variant="h6" sx={{ color: "#fbc760" }}>
                  {userEmail}
                </Typography>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Stack
                  variant="div"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                  }}
                >
                  <MuiLink
                    href="/login"
                    sx={{
                      color: myColors.gold,
                      textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    <Link to="/login" className="login-register-button">Login</Link>
                  </MuiLink>

                  <MuiLink
                    href="/register"
                    sx={{
                      color: myColors.gold,
                      textDecoration: "none",
                      textTransform: "uppercase",
                    }}
                  >
                    <Link to="/register" className="login-register-button">Register</Link>
                  </MuiLink>
                </Stack>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
