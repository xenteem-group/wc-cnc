import React from "react";

const button = (props) => (
  <button
    className={["btn", props.style].join(" ")}
    type={props.btnType}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
