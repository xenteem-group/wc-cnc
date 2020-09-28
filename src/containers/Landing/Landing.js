import React, { Component } from "react";
import $ from "jquery";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Body from "../Body/Body";
import landingData from "../../config/config";



class Landing extends Component {
  
  render() {
    const { social, contact } = landingData;

    return (
      <div className="wcApp">
        <Header social={social} contact={contact} />
        <Body />
        <Footer social={social} contac={contact} />
      </div>
    );
  }
}

export default Landing;
