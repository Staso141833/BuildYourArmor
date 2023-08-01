import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import CardMedia from "@mui/material/CardMedia";
import { Link, Stack } from "@mui/material";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

const links = ["/home", "/share", "/basicMuscles", "/catalog", "/intensity"];

export default function TemporaryDrawer({ state, setState, toggleDrawer }) {
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        backgroundColor: myColors["dark-silver"],
        backdropFilter: "blur(2px)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "34px",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ marginTop: "134px" }}>
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
                  <FitnessCenterIcon fontSize="large" position="right" />
                ) : (
                  <DoubleArrowOutlinedIcon fontSize="large" />
                )}
              </ListItemIcon>

              <Link
                href={`${links[index]}`}
                sx={{
                  color: myColors.gold,
                  textDecoration: "none",
                  fontSize: "20px",
                  textTransform: "uppercase",
                }}
              >
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
