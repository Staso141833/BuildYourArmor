import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import TemporaryDrawer from "../TemporaryDrawer/TemporaryDrawer.js";
import "./navbar.css";
import { Stack, Link, Typography, Button } from "@mui/material";
import SafetyCheckTwoToneIcon from "@mui/icons-material/SafetyCheckTwoTone";


import { auth } from "../../config/firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const navigate = useNavigate();

  const onLogout = async () => {
    try {
      await signOut(auth);
      console.log("You have already logged out!");

      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };
  const links = ["/home", "/create", "/basicMuscles", "/catalog", "/intensity"];

  const isAuthenticated = auth.currentUser?.accessToken;

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
                          sx={{
                            color: myColors.gold,
                            textDecoration: "none",
                            fontSize: "14px",
                            textTransform: "uppercase",
                          }}
                        >
                          {text}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List> */}
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
                  {user?.email}
                </Typography>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Typography variant="h6">
                  <Link
                    sx={{ color: "#fbc760" }}
                    href="/login"
                    underline="none"
                  >
                    Login
                  </Link>
                </Typography>
                <Typography variant="h6">
                  <Link
                    sx={{ color: "#fbc760" }}
                    href="/register"
                    underline="none"
                  >
                    Register
                  </Link>
                </Typography>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
