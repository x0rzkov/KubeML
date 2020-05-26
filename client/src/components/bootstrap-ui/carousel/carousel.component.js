import React from "react";
import { Carousel } from "react-bootstrap";

import { ReactComponent as Logo } from "../../../assets/Latest-diagram.svg";

const CarouselSlide = () => {
  return (
    <Carousel
      style={{
        height: window.innerHeight * 0.48,
        width: "100%",
        backgroundColor: "aqua",
      }}
    >
      <Carousel.Item style={{ height: window.innerHeight * 0.44 }}>
        <Logo style={{ height: "100%", width: "100%" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: window.innerHeight * 0.44 }}>
        <Logo style={{ height: "100%", width: "100%" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: window.innerHeight * 0.44 }}>
        <Logo style={{ height: "100%", width: "100%" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselSlide;

//need to also set a minHeight
