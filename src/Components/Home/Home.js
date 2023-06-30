import React from "react";
import { Typography, Box, Card, CardMedia, Paper } from "@mui/material";

const myColors = {
  black: "#070707",
  "dark-silver": "#847470",
  "light-silver": "#b9b3ae",
  gold: "#fbc760",
  white: "#edebea",
};

export const Home = () => {
  return (
    <Box>
      <Card position="relative">
        <CardMedia
          position="absolute"
          component="img"
          // image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRMKr8W2IFRq066ZVGxH2fbq9SehxamcDHvQ&usqp=CAU"
          // image="https://www.bodybuildingmealplan.com/wp-content/uploads/Tom-Platz-Leg-Day-Hack-Squats.jpg"
          image="https://rare-gallery.com/uploads/posts/1182843-men-monochrome-Arnold-Schwarzenegger-Bodybuilder-bodybuilding-muscle-arm-black-and-white-monochrome-photography-wrestler.jpg"
          // image="https://i.pinimg.com/736x/bd/45/ba/bd45ba309354d9ad47c9cdc6125fd44d.jpg"
          alt="unsplash image"
          sx={{
            opacity: "0.9",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "80% 0%",
          }}
        />

        <Typography
          position="absolute"
          variant="body4"
          sx={{
            top: "10%",
            left: "4%",
            fontSize: "78px",
            color: "#f6f6f6",
            fontWeight: "bold",
            width: "46%",
            textShadow: "4px 12px 14px #847470",
            fontStyle: "Italic",
          }}
        >
          "The pain you feel today will be the strength you feel tomorrow."
        </Typography>
      </Card>
    </Box>
  );
};
