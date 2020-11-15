import React from "react";
import { Carousel } from "react-bootstrap";

import { ReactComponent as Logo } from "../../../assets/background1.svg";

const CarouselSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Logo />
      </Carousel.Item>
      <Carousel.Item>
        <Logo />
      </Carousel.Item>
      <Carousel.Item>
        <Logo />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
