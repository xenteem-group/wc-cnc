import React from "react";
import classes from "./Content.module.scss";

const contentWrap = ({contentColCNC, contentCol3D, contentColLaser}) => (
  <div className={classes.wcContentWrap}>
    <div className={["row", classes.wcContentRow].join(" ")}>
      <div className={["col-xl-4 col-lg-4 col-md-12 col-sm-12", classes.wcCol].join(" ")}>{contentColCNC}</div>
      <div className={["col-xl-4 col-lg-4 col-md-12 col-sm-12", classes.wcCol].join(" ")}>{contentCol3D}</div>
      <div className={["col-xl-4 col-lg-4 col-md-12 col-sm-12", classes.wcCol].join(" ")}>{contentColLaser}</div>
    </div>
  </div>
);

export default contentWrap;
