import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, MenuItem, Stack } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import {
  FitnessCenter,
  FitnessCenterRounded,
  FitnessCenterTwoTone,
  SportsGymnastics,
} from "@mui/icons-material";
import { auth } from "../../config/firebase.js";
import { Link, Navigate, useNavigate } from "react-router-dom";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver:": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Home",
          "Share your experience",
          "Basic muscles",
          "The power of knowledge",
          "Increase intensity",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <FitnessCenterTwoTone />
                ) : (
                  <FitnessCenterRounded />
                )}
              </ListItemIcon>

              <MuiLink
                onClick={() => {
                  navigate(`${links[index]}`);
                }}
                sx={{
                  color: myColors.gold,
                  textDecoration: "none",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
    
                <ListItemText primary={text} />
              </MuiLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
    </Box>
  );

  return (
    <Stack sx={{ backgroundColor: "black" }}>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{ width: "auto", color: myColors.gold }}
          >
            {anchor}
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Stack>
  );
}


