import React from "react";
import classes from "../../Header/Header.module.scss";
import { Facebook, Instagram, Phone } from "react-feather";

const headerContact = ({ links }) => {
  const {social, contact} = links;
  return (
    <div className={classes.wcHeaderContact}>
      <span className={classes.contactIcon}>
        <a href={social?.facebook} target="_blank">
          <Facebook size={30} />
        </a>
      </span>
      <span className={classes.contactIcon}>
        <a href={social?.instagram} target="_blank">
          <Instagram size={30} />
        </a>
      </span>
      <span className={classes.contactIcon}>
        <a href={"tel:" + contact?.phone}>
          <Phone size={30} />
        </a>
      </span>
    </div>
  );
};

export default headerContact;
