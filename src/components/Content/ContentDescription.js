import React from "react";
import { ChevronRight } from "react-feather";
import classes from "./Content.module.scss";

const contentDescription = ({ contentDesc }) => (
  <ul>
    {contentDesc.map((desc) => (
      <li>
        <ChevronRight className={classes.descBullet} size={20} />
        {desc}
      </li>
    ))}
  </ul>
);

export default contentDescription;
