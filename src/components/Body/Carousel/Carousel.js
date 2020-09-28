import classes from "./carousel.module.scss";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../assets/images/cnc-bg.jpg";
import image2 from "../../../assets/images/cnc-bg1.jpg";
import image3 from "../../../assets/images/cnc-bg2.jpg";

const carousel = () => (
  <div className={classes.carouselWrap}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
          height="400"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
          height="400"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          height="400"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);
export default carousel;
