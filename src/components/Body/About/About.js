import React from "react";
import {Row, Col} from "react-bootstrap";
import cncData from "../../../config/config"
import classes from "./about.module.scss";


const about = () => (
  <Row>
    <Col sm className={classes.aboutImage}></Col>
    <Col sm className={classes.aboutContent}>{cncData.content.about}</Col>
  </Row>
);

export default about;
