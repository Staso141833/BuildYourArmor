import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import {
  boxCopyRightStyles,
  boxStyles,
  linkStyles,
  mainStackStyles,
  socialMediaStyles,
  typographyStyles,
  typographyTitleStyles,
} from "./footer.styles.js";

export const Footer = () => {
  return (
    <Box component="footer" sx={boxStyles}>
      <Container maxWidth="lg" position="relative">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={typographyTitleStyles} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={typographyStyles}>
              Our purpose is to force people to start training, to start doing a
              momevemnt which is health.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={typographyTitleStyles} gutterBottom>
              Contact Us
            </Typography>
            <Stack sx={mainStackStyles}>
              <BusinessIcon />
              <Typography variant="body2" sx={typographyStyles}>
                40bl., Darvenitsa, Sofia
              </Typography>
            </Stack>
            <Stack sx={mainStackStyles}>
              <EmailIcon />
              <Typography variant="body2" sx={typographyStyles}>
                Email: buildYourArmor@gmail.com
              </Typography>
            </Stack>

            <Stack sx={mainStackStyles}>
              <AddIcCallIcon />
              <Typography variant="body2" sx={typographyStyles}>
                Phone: +359 888 888 888
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={typographyTitleStyles} gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" sx={linkStyles}>
              <Facebook sx={socialMediaStyles} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={linkStyles}
            >
              <Instagram sx={socialMediaStyles} />
            </Link>
            <Link href="https://www.twitter.com/" sx={linkStyles}>
              <Twitter sx={socialMediaStyles} />
            </Link>
          </Grid>
        </Grid>
        <Box sx={boxCopyRightStyles}>
          <Typography variant="body2" sx={typographyStyles} align="center">
            {"2023 Inferno - All rights reserved || Designed By: S. Stiptsov"}
            <Link sx={typographyStyles} href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
