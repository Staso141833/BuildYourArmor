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
import { Stack } from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import {
  FitnessCenterRounded,
  FitnessCenterTwoTone,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../metaData/colors.js";
import {
  linkStyles,
  listItemIconStyles,
  toggleDrawerButtonStyles,
} from "./temporaryDrawer.styles.js";

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
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: colors.black,
        height: "100%",
      }}
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
              <ListItemIcon sx={listItemIconStyles}>
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
                sx={linkStyles}
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
    <Stack sx={{ backgroundColor: colors.black }}>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={toggleDrawerButtonStyles}
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
