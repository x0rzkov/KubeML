import React from "react";
import { Carousel } from "react-bootstrap";

import { ReactComponent as Logo } from "../../../assets/background3-1.svg";
import { ReactComponent as Logo2 } from "../../../assets/background1.svg";

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
