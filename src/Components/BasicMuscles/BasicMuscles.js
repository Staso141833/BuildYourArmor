import { KeyboardArrowDownSharp } from "@mui/icons-material";
import {
  Stack,
  MenuItem,
  Menu,
  Button,
  Card,
  CardMedia,
  Box,
} from "@mui/material";
import { useState } from "react";

import "./basicMuscles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  anchorOriginStyles,
  boxFooterStyles,
  buttonStyles,
  cardMediaStyles,
  cardStyles,
  mainStyles,
  menuItemStyles,
  muscleContainerStyles,
  muscleItemContainerStyles,
  transformOriginStyles,
} from "./basicMuscles.styles.js";

export const BasicMuscles = () => {
  const [anchorDelts, setAnchorDelts] = useState(null);
  const openMenuDelts = Boolean(anchorDelts);

  const [anchorArms, setAnchorArms] = useState(null);
  const openMenuArms = Boolean(anchorArms);

  const [anchorLegs, setAnchorLegs] = useState(null);
  const openMenuLegs = Boolean(anchorLegs);

  const handleClickDelts = (e) => {
    setAnchorDelts(e.currentTarget);
  };

  const handleCloseDelts = () => {
    setAnchorDelts(null);
  };

  const handleClickArms = (e) => {
    setAnchorArms(e.currentTarget);
  };

  const handleCloseArms = () => {
    setAnchorArms(null);
  };

  const handleClickLegs = (e) => {
    setAnchorLegs(e.currentTarget);
  };

  const handleCloseLegs = () => {
    setAnchorLegs(null);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <Stack position={"relative"} sx={mainStyles}>
        <Card position="relative" sx={cardStyles}>
          <CardMedia
            component="img"
            image="https://static.vecteezy.com/system/resources/previews/022/925/649/large_2x/human-anatomy-showcasing-male-muscles-with-nerves-isolated-on-black-background-generative-ai-photo.jpeg"
            sx={cardMediaStyles}
          />
          <Stack container sx={muscleContainerStyles}>
            <Stack sx={muscleItemContainerStyles}>
              <Button
                id="delts-button"
                aria-controls={openMenuDelts ? "delts-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuDelts ? "true" : undefined}
                onClick={handleClickDelts}
                endIcon={<KeyboardArrowDownSharp />}
                sx={buttonStyles}
              >
                Delts
              </Button>

              <Menu
                id="delts-menu"
                anchorEl={anchorDelts}
                open={openMenuDelts}
                onClose={handleCloseDelts}
                dense="double"
                MenuListProps={{
                  "aria-labelledby": "delts-button",
                }}
                anchorOrigin={anchorOriginStyles}
                transformOrigin={transformOriginStyles}
              >
                <MenuItem onClick={handleCloseDelts} sx={menuItemStyles}>
                  <Link to="/deltoid" className="muscle-button-dropdown">
                    Shoulders
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseDelts} sx={menuItemStyles}>
                  <Link to="/trapezius" className="muscle-button-dropdown">
                    {" "}
                    Trapezius
                  </Link>
                </MenuItem>
              </Menu>
            </Stack>
            <Stack sx={muscleItemContainerStyles}>
              <Link to="/back" className="muscle-button">
                {" "}
                Back
              </Link>
            </Stack>
            <Stack sx={muscleItemContainerStyles}>
              <Button
                id="arms-button"
                aria-controls={openMenuArms ? "arms-menu" : undefined}
                aria-expanded={openMenuArms ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClickArms}
                endIcon={<KeyboardArrowDownSharp />}
                sx={buttonStyles}
              >
                Arms
              </Button>

              <Menu
                id="arms-menu"
                anchorEl={anchorArms}
                open={openMenuArms}
                onClose={handleCloseArms}
                MenuListProps={{
                  "aria-labelledby": "arms-button",
                }}
                anchorOrigin={anchorOriginStyles}
                transformOrigin={transformOriginStyles}
              >
                <MenuItem onClick={handleCloseArms} sx={menuItemStyles}>
                  <Link to="/biceps" className="muscle-button-dropdown">
                    Biceps
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseArms} sx={menuItemStyles}>
                  <Link to="/triceps" className="muscle-button-dropdown">
                    Triceps
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseArms} sx={menuItemStyles}>
                  <Link to="/forearms" className="muscle-button-dropdown">
                    Forearms
                  </Link>
                </MenuItem>
              </Menu>
            </Stack>
            <Stack sx={muscleItemContainerStyles}>
              <Link to="/chest" className="muscle-button">
                Chest
              </Link>
            </Stack>
            <Stack sx={muscleItemContainerStyles}>
              <Link to="/abs" className="muscle-button">
                ABS
              </Link>
            </Stack>
            <Stack sx={muscleItemContainerStyles}>
              <Button
                id="legs-button"
                aria-controls={openMenuLegs ? "legs-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuLegs ? "true" : undefined}
                onClick={handleClickLegs}
                endIcon={<KeyboardArrowDownSharp />}
                sx={buttonStyles}
              >
                Legs
              </Button>

              <Menu
                id="legs-menu"
                anchorEl={anchorLegs}
                open={openMenuLegs}
                onClose={handleCloseLegs}
                MenuListProps={{
                  "aria-describedby": "legs-button",
                }}
                anchorOrigin={anchorOriginStyles}
                transformOrigin={transformOriginStyles}
              >
                <MenuItem onClick={handleCloseLegs} sx={menuItemStyles}>
                  <Link to="/legs" className="muscle-button-dropdown">
                    Front thigh
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseLegs} sx={menuItemStyles}>
                  <Link to="/legs" className="muscle-button-dropdown">
                    Back thigh
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseLegs} sx={menuItemStyles}>
                  <Link to="/calves" className="muscle-button-dropdown">
                    Calves
                  </Link>
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Card>
      </Stack>
      <Box component="footer" sx={boxFooterStyles}></Box>
    </motion.div>
  );
};
