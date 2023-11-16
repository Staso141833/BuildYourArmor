import { KeyboardArrowDownSharp } from "@mui/icons-material";
import {
  Stack,
  Grid,
  MenuItem,
  Menu,
  Button,
  Card,
  CardMedia,
  Box,
} from "@mui/material";
import { Link as MuiLink } from "@mui/material";
import { useState } from "react";

import "./basicMuscles.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

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
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Stack position={"relative"}>
        <Card
          position="relative"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            image="https://static.vecteezy.com/system/resources/previews/022/925/649/large_2x/human-anatomy-showcasing-male-muscles-with-nerves-isolated-on-black-background-generative-ai-photo.jpeg"
            sx={{
              objectFit: "cover",
              zIndex: "1",
              position: "absolute",
              opacity: ".7",
              width: "100%",
              height: "94vh",
            }}
          />
          <Grid
            container
            sx={{
              width: "80vw",
              margin: "32px 12px",
              gap: "16px",
              position: "absolute",
              zIndex: "2",
            }}
          >
            <Grid
              item
              xs={1.895}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Button
                id="delts-button"
                aria-controls={openMenuDelts ? "delts-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuDelts ? "true" : undefined}
                onClick={handleClickDelts}
                endIcon={<KeyboardArrowDownSharp />}
                sx={{
                  fontFamily: "Robotto",
                  fontSize: "18px",
                  color: myColors.gold,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  padding: "14px 24px",
                  borderRadius: "6px",
                }}
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
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={handleCloseDelts}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/deltoid" className="muscle-button-dropdown">
                    {/* <MuiLink
                    sx={{
                      textDecoration: "none",
                      color: myColors.gold,
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontFamily: "Robotto",
                      width: "100%",
                      "&:hover": {
                        backgroundColor: myColors.gold,
                        color: myColors["dark-silver"],
                      },
                      transition: "all 300ms",
                      padding: "12px",
                    }}
                  > */}
                    Shoulders {/* </MuiLink> */}
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseDelts}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/trapezius" className="muscle-button-dropdown">
                    {" "}
                    Trapezius
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>

            <Grid
              item
              xs={1.895}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link to="/back" className="muscle-button">
                {" "}
                Back
              </Link>
            </Grid>

            <Grid
              item
              xs={1.895}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Button
                id="arms-button"
                aria-controls={openMenuArms ? "arms-menu" : undefined}
                aria-expanded={openMenuArms ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClickArms}
                endIcon={<KeyboardArrowDownSharp />}
                sx={{
                  fontFamily: "Robotto",
                  fontSize: "18px",
                  color: myColors.gold,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  padding: "14px 24px",
                  borderRadius: "6px",
                }}
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
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={handleCloseArms}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/biceps" className="muscle-button-dropdown">
                    Biceps
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseArms}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/triceps" className="muscle-button-dropdown">
                    Triceps
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseArms}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/forearms" className="muscle-button-dropdown">
                    Forearms
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid
              item
              xs={1.895}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link to="/chest" className="muscle-button">
                Chest
              </Link>
            </Grid>
            <Grid
              item
              xs={1.895}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link to="/abs" className="muscle-button">
                ABS
              </Link>
            </Grid>
            <Grid
              item
              xs={1.895}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Button
                id="legs-button"
                aria-controls={openMenuLegs ? "legs-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMenuLegs ? "true" : undefined}
                onClick={handleClickLegs}
                endIcon={<KeyboardArrowDownSharp />}
                sx={{
                  fontFamily: "Robotto",
                  fontSize: "18px",
                  color: myColors.gold,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  padding: "14px 24px",
                  borderRadius: "6px",
                }}
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
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <MenuItem
                  onClick={handleCloseLegs}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/legs" className="muscle-button-dropdown">
                    Front thigh
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseLegs}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/legs" className="muscle-button-dropdown">
                    Back thigh
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseLegs}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link to="/calves" className="muscle-button-dropdown">
                    Calves
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Card>
      </Stack>
      <Box
        component="footer"
        sx={{
          marginTop: "910px",
        }}
      ></Box>
    </motion.div>
  );
};
