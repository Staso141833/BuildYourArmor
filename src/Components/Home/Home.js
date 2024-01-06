import React, { useState } from "react";
import { Typography, Box, Card, CardMedia, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import {
  cardMediaStyles,
  cardStyles,
  homeTitleStackStyles,
  homeTitleStyles,
  leftArrowStyles,
  quoteStackStyles,
  quoteStyles,
  rightArrowStyles,
  stackCardStyles,
  stackDotsStyles,
} from "./home.styles.js";
import {
  ArrowBack,
  ArrowCircleLeft,
  ArrowCircleLeftSharp,
  ArrowCircleRight,
} from "@mui/icons-material";
import { colors } from "../../metaData/colors.js";
import { Fade, Slide } from "react-slideshow-image";
import { RxDotFilled, RxDotsHorizontal, RxDotsVertical } from "react-icons/rx";
import "./home.css";

export const Home = () => {
  const slideShowImages = [
    {
      url: "https://www.evolutionofbodybuilding.net/wp-content/uploads/2016/01/Arnold_Schwarzenegger_Klassisch_Posing.jpg",
      quote: "The pain you feel today will be the strength you feel tomorrow.",
      alt: "Arnold",
    },

    {
      url: "https://quadra-force.com/wp-content/uploads/2020/04/dorian1.jpg",
      quote:
        "If you have things coming a little easy, you are not giving a hundred percent!",
      alt: "Dorian Yates",
    },
    {
      url: "https://i.ytimg.com/vi/FZDf0uyuN34/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBd1O-eZmZBEmlV40RO81fk-aP9Gg",
      quote: "",
      alt: "Tom Platz",
    },
  ];

  const variants = {
    initial: {
      x: (direction) => {
        return {
          x: direction > 0 ? 1000 : -1000,
          opacity: 0,
          scale: 0.5,
        };
      },
    },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 20 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        scale: 0.5,
        transition: {
          x: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        },
        // transition: "ease-in",
      };
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const previousSlide = () => {
    setDirection(-1);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? slideShowImages.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    setDirection(1);
    const isLastSlide = currentIndex === slideShowImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <div className="main-div">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            src={slideShowImages[currentIndex].url}
            key={slideShowImages[currentIndex]}
            custom={direction}
            className="slides"
          ></motion.img>
          <Typography sx={quoteStyles}>
            {slideShowImages[currentIndex].quote}
          </Typography>
        </AnimatePresence>

        <div>
          <ArrowCircleLeft
            onClick={previousSlide}
            sx={leftArrowStyles}
          ></ArrowCircleLeft>
        </div>
        <div>
          <ArrowCircleRight
            onClick={nextSlide}
            sx={rightArrowStyles}
          ></ArrowCircleRight>
        </div>
        <Stack sx={stackDotsStyles}>
          {slideShowImages.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled></RxDotFilled>
            </div>
          ))}
        </Stack>
      </div>
    </motion.div>
  );
};

{
  /* <div className="max-w-[1960px] h-[980px] w-full m-auto py-6 px-4 relative mb-4 ">
<div
  style={{
    backgroundImage: `url(${slideShowImages[currentIndex].url})`,
  }}
  className="w-full h-full rounded-2xl bg-center bg-cover duration-1000"
></div>

<Typography sx={quoteStyles}>
  {slideShowImages[currentIndex].quote}
</Typography>
<div>
  <ArrowCircleLeft
    onClick={previousSlide}
    sx={leftArrowStyles}
  ></ArrowCircleLeft>
</div>
<div>
  <ArrowCircleRight
    onClick={nextSlide}
    sx={rightArrowStyles}
  ></ArrowCircleRight>
</div>
<div className="flex top-4 justify-center py-2">
    {slideShowImages.map((slide, slideIndex) => (
    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
      <RxDotFilled></RxDotFilled>
    </div>
    ))}
</div>
</div> */
}

{
  /* <div className="main-div">
<AnimatePresence initial={false} custom={direction}>
  <motion.img
    variants={variants}
    animate="animate"
    initial="initial"
    exit="exit"
    src={slideShowImages[currentIndex].url}
    key={slideShowImages[currentIndex]}
    custom={direction}
    className="slides"
  ></motion.img>
</AnimatePresence>

<div>
  <ArrowCircleLeft
    onClick={previousSlide}
    sx={leftArrowStyles}
  ></ArrowCircleLeft>
</div>
<div>
  <ArrowCircleRight
    onClick={nextSlide}
    sx={rightArrowStyles}
  ></ArrowCircleRight>
</div>
<Stack sx={stackDotsStyles}>
  {slideShowImages.map((slide, slideIndex) => (
    <div
      key={slideIndex}
      onClick={() => goToSlide(slideIndex)}
      className="text-2xl cursor-pointer"
    >
      <RxDotFilled></RxDotFilled>
    </div>
  ))}
</Stack>
</div> */
}
