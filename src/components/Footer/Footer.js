import React from "react";
import classes from "./Footer.module.scss";
import { Facebook, Instagram, Phone, Mail } from "react-feather";

const footer = ({social, contact}) => (
  <div id="wc-footer" className={classes.wcFooter}>
    <div className={classes.wcfooterContact}>
      <span>
        <a href={"mailto:"+contact?.email}>
          <Mail className={classes.wcFooterContactIcon} size={38} />
          woo-carving@gmail.com
        </a>
        
      </span>
      <span>
        <a href={"tel:"+contact?.phone}>
          <Phone className={classes.wcFooterContactIcon} size={38} />
          +94777998546
        </a>
      </span>
      <span>
        <a href={social?.facebook} target="_blank">
          <Facebook className={classes.wcFooterContactIcon} size={38} />
          /woo-carving
        </a>
      </span>
      <span>
        <a href={social?.instagram} target="_blank">
          <Instagram className={classes.wcFooterContactIcon} size={38} />
          /woo-carving
        </a>
      </span>
    </div>
    <div className={classes.wcFooterCopyrights}>
    Copyright © 2020 WooCarving. All rights reserved.
    </div>
  </div>
);

export default footer;
