import React, { Component } from "react";
import Carousel from "../../components/Body/Carousel/Carousel";
import About from "../../components/Body/About/About";
import classes from "./body.module.scss";

class Body extends Component {
  render() {
    return (
      <div className={classes.cncBody}>
        <Carousel />
        <About />
      </div>
    );
  }
}

export default Body;
