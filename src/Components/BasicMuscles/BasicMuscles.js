import { KeyboardArrowDownSharp } from "@mui/icons-material";
import {
  Stack,
  Grid,
  Link,
  MenuItem,
  Menu,
  Button,
  Card,
  CardMedia,
  Box,
} from "@mui/material";
import { useState } from "react";

import "./basicMuscles.css";

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
    <>
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
            // image="https://img.freepik.com/free-photo/muscular-man-squeezing-biceps_1048-2641.jpg?w=2000"
            // image="https://www.teahub.io/photos/full/209-2099286_human-body-muscles-png.jpg"
            // image="https://www.interactive-biology.com/wp-content/uploads/2012/04/MuscularManPosing1-scaled.jpg"
            // image="https://knowledge.carolina.com/wp-content/uploads/2021/11/shutterstock_247631059_2048x1864.jpg"
            image="https://static.vecteezy.com/system/resources/previews/022/925/649/large_2x/human-anatomy-showcasing-male-muscles-with-nerves-isolated-on-black-background-generative-ai-photo.jpeg"
            // image="https://img.freepik.com/premium-psd/medical-illustration-running-man-anatomy_1401-2537.jpg?w=2000"
            // image="https://c8.alamy.com/comp/T6Y0AC/muscle-man-anatomy-in-an-white-background-will-put-some-creative-sensor-in-yours-creations-T6Y0AC.jpg"
            // image="https://img.freepik.com/premium-photo/anatomy-human-muscles-dark-background_297535-5107.jpg"
            // image="https://www.icns.es/img/news/298.jpg"
            // image="https://as2.ftcdn.net/v2/jpg/05/52/87/63/1000_F_552876384_UiQ318RImZtFohqoK33B4CdHl8GVKsyq.jpg"
            // image="https://t4.ftcdn.net/jpg/05/69/94/23/360_F_569942348_C80okrnDid1V5LDPaMf3b4e8j5l3kFlp.jpg"
            // image="https://t3.ftcdn.net/jpg/05/69/94/24/360_F_569942415_D64aNxqgPfa4KqXBKbPtT7GKALCPCxy4.jpg"
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
              xs={1.6}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link
                href="/trapezius"
                sx={{
                  textDecoration: "none",
                  color: myColors.gold,
                  padding: "14px 24px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "18px",
                }}
              >
                Trapezius
              </Link>
            </Grid>
            <Grid
              item
              xs={1.6}
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
                  <Link
                    href="/deltoid"
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
                  >
                    Front Delt
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseDelts}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link
                    href="/deltoid"
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
                  >
                    Side Delt
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseDelts}
                  sx={{
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <Link
                    href="/deltoid"
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
                  >
                    Back delt
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>

            <Grid
              item
              xs={1.6}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link
                href="/back"
                sx={{
                  textDecoration: "none",
                  color: myColors.gold,
                  padding: "14px 24px",
                  borderRadius: "6px",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
              >
                Back
              </Link>
            </Grid>

            <Grid
              item
              xs={1.6}
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
                  <Link
                    href="/biceps"
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
                  >
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
                  <Link
                    href="/triceps"
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
                  >
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
                  <Link
                    href="/forearms"
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
                  >
                    Forearms
                  </Link>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid
              item
              xs={1.6}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link
                href="/chest"
                sx={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: myColors.gold,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  padding: "14px 24px",
                  borderRadius: "6px",
                }}
              >
                Chest
              </Link>
            </Grid>
            <Grid
              item
              xs={1.6}
              sx={{
                backgroundColor: myColors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "6px",
                border: "2px outset #fbc760",
              }}
            >
              <Link
                href="/abs"
                sx={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: myColors.gold,
                  cursor: "pointer",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  padding: "14px 24px",
                  borderRadius: "6px",
                }}
              >
                Abs
              </Link>
            </Grid>
            <Grid
              item
              xs={1.6}
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
                  <Link
                    href="/legs"
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
                  >
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
                  <Link
                    href="/legs"
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
                  >
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
                  <Link
                    href="/calves"
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
                  >
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
    </>
  );
};
