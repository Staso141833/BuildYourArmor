import React from "react";
import { Typography, Box, Card, CardMedia, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { cardMediaStyles, cardStyles, homeTitleStackStyles, homeTitleStyles } from "./home.styles.js";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Home = () => {
  console.log(motion);
  return (
    <motion.div
      intial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Box>
        <Card position="relative" sx={cardStyles}>
          <CardMedia
            position="absolute"
            component="img"
            image="https://www.evolutionofbodybuilding.net/wp-content/uploads/2016/01/Arnold_Schwarzenegger_Klassisch_Posing.jpg"
            alt="Arnold"
            sx={cardMediaStyles}
          />
          <Stack sx={homeTitleStackStyles}>
            <Typography
              position="absolute"
              variant="body4"
              sx={homeTitleStyles}
            >
              "The pain you feel today will be the strength you feel tomorrow."
            </Typography>
          </Stack>
        </Card>
      </Box>
    </motion.div>
  );
};
