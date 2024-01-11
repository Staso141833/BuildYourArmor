import React, { useState } from "react";
import { Typography, Box, Card, CardMedia, Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import {
  leftArrowStyles,
  quoteStyles,
  rightArrowStyles,
  stackDotsStyles,
} from "./home.styles.js";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { colors } from "../../metaData/colors.js";
import { Fade, Slide } from "react-slideshow-image";
import { RxDotFilled, RxDotsHorizontal, RxDotsVertical } from "react-icons/rx";
import "./home.css";

export const Home = () => {
  const slideShowImages = [
    {
      url: "https://www.evolutionofbodybuilding.net/wp-content/uploads/2016/01/Arnold_Schwarzenegger_Klassisch_Posing.jpg",
      quote: "The pain you feel today will be the strength you feel tomorrow.",
      alt: "Arnold Schwarzenegger",
    },
    {
      url: "https://www.goalcast.com/wp-content/uploads/2017/05/Arnold-Schwarzenegger-quotes-I-learned-that-we-are-always-stronger-than-we-know.jpg?w=708",
      quote: "",
      alt: "Arnold Schwarzenegger",
    },
    {
      url: "https://i.ebayimg.com/images/g/bFcAAOSwKH9g67K1/s-l1600.jpg",
      quote: "",
      alt: "Arnold",
    },

    {
      url: "https://quadra-force.com/wp-content/uploads/2020/04/dorian1.jpg",
      quote:
        "If you have things coming a little easy, you are not giving a hundred percent!",
      alt: "Dorian Yates",
    },
    {
      url: "https://i.ebayimg.com/images/g/wboAAOSw-1VhZiVu/s-l1200.webp",
      quote: "",
      alt: "Dorian Yates",
    },
    {
      url: "https://theconsciousbodybuilder.com/wp-content/uploads/2022/04/7-1-683x1024.png",
      quote: "",
      alt: "Dorian Yates",
    },
    {
      url: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69a0af23-3402-4d05-843e-24a4759011e9_516x778.jpeg",
      quote:
        "No tricks, no easy gain. It is just about authenticity and hard work.",
      alt: "Dorian Yates",
    },
    {
      url: "https://i.ytimg.com/vi/FZDf0uyuN34/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBd1O-eZmZBEmlV40RO81fk-aP9Gg",
      quote: "",
      alt: "Tom Platz",
    },
    {
      url: "https://i.pinimg.com/originals/af/0b/df/af0bdfddc659f38f5929cdc3edc9105e.jpg",
      quote: "",
      alt: "Tom Platz",
    },
    {
      url: "https://i.pinimg.com/564x/bd/f5/41/bdf5417915d80326400e61605393757a.jpg",
      quote: "",
      alt: "Tom Platz",
    },
    {
      url: "https://generationiron.com/wp-content/uploads/2014/12/Jay-Cutler-Quote.png",
      quote: "",
      alt: "Jay Cutler",
    },
    {
      url: "https://raw.githubusercontent.com/Npoubko/Mentzer-Quote-Images/main/images/mikementzer8-smaller.png",
      quote: "",
      alt: "Mike Mentzer",
    },
  ];

  const slidesLenght = slideShowImages.length;

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
          {slideShowImages.map((item, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index + 1)}
              className={currentIndex === index + 1 ? "dot-active" : "dot"}
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
