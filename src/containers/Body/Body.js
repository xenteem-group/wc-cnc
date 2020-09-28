import React, { Component } from "react";
import Carousel from "../../components/Body/Carousel/Carousel";
import About from "../../components/Body/About/About";
import Gallery from "../../components/Body/Gallery/Gallery";
import classes from "./body.module.scss";
import WorkImg from "../../assets/images/cnc-bg.jpg";

class Body extends Component {
  render() {
    const works = [
      { img: WorkImg, title: "3D Printing", desc: "This is my description" },
      { img: WorkImg, title: "Woo Carving", desc: "This is my description" },
      { img: WorkImg, title: "3D Printing", desc: "This is my description" },
      { img: WorkImg, title: "Title 4", desc: "This is my description" },
      { img: WorkImg, title: "Woo Carving", desc: "This is my description" },
      { img: WorkImg, title: "Title Six", desc: "This is my description" },
    ];

    return (
      <div className={classes.cncBody}>
        <Carousel />
        <About />
        <Gallery works={works} />
      </div>
    );
  }
}

export default Body;
