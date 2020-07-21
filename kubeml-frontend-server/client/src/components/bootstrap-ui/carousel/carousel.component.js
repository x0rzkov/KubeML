import React from "react";
import { Carousel } from "react-bootstrap";

import { ReactComponent as Logo } from "../../../assets/first-slide.svg";
import { ReactComponent as Logo2 } from "../../../assets/second-slide.svg";

const CarouselSlide = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Logo />
      </Carousel.Item>
      <Carousel.Item>
        <Logo2 />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;
