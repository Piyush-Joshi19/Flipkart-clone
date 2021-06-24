import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  makeStyles,
  Box,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  component: {
    marginTop: 12,
    backgroundColor: "#FFFFFF",
  },
  image: {
    height: 150,
  },
  dealText: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: "32px",
    marginRight: 25,
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  timer: {
    color: "#7f7f7f",
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    background: "#2874f0",
    borderRadius: 2,
    fontSize: 13,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  wrapper: {
    padding: "35px 20px",
  },
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ timer, title, products }) => {
  const classes = useStyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds} left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealText}>{title}</Typography>
        {timer && (
          <>
            <img style={{ width: 24 }} src={timerURL} alt="timer" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />,
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              View All
            </Button>
          </>
        )}
      </Box>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        s
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Box textAlign="center" className={classes.wrapper}>
              <img
                key={product.id}
                className={classes.image}
                src={product.url}
                alt={product.title}
              />
              <Typography
                style={{ fontWeight: 600, color: "#212121" }}
                className={classes.text}
              >
                {product.title.shortTitle}
              </Typography>
              <Typography
                style={{ fontWeight: 600, color: "green" }}
                className={classes.text}
              >
                {product.discount}
              </Typography>
              <Typography
                style={{ color: "#212121", opacity: ".6" }}
                className={classes.text}
              >
                {product.tagline}
              </Typography>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
