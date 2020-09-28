import React from "react";
import classes from "./Content.module.scss";
import Button from "../UI/Buttons/Button";
import ContentDescription from "./ContentDescription";

const contentCol = (props) => (
  <div
    className={[
      "wc-content-col",
      classes.wcContentCol,
      props.contentBgStyle,
    ].join(" ")}
  >
    <div className={classes.wcContentElements}>
      <h2 className={classes.contentTitle}>{props.contentTitle}</h2>
      <div className={classes.contentDescWrap}>
        <ContentDescription contentDesc={props.contentDesc} />
      </div>
      <Button
        btnType="button"
        style={props.contentBtnStyle}
        clicked={props.contentBtnClicked}
      >
        {props.contentBtnTxt}
      </Button>
    </div>
  </div>
);

export default contentCol;
