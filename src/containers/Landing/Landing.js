import React, { Component } from "react";
import $ from "jquery";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Body from "../Body/Body";
import landingData from "../../config/config";
import { Container } from "react-bootstrap";

const setHeight = () => {
  if ($(window).width() < 992) {
    const headerHeight = $("#wc-header").height();
    const windowHeight = $(window).height();
    $(".wc-content-col").height(windowHeight - headerHeight);
  } else {
    const headerHeight = $("#wc-header").height();
    const footerHeight = $("#wc-footer").height();
    const windowHeight = $(window).height();
    $(".wc-content-col").height(windowHeight - (headerHeight + footerHeight));
  }
};

class Landing extends Component {
  componentDidMount() {
    setHeight();

    $(window).resize(function () {
      setHeight();
    });
  }

  render() {
    console.log(landingData.contact);
    const { social, contact } = landingData;

    return (
      <Container fluid className="wcApp">
        <Header social={social} contact={contact} />
        <Body />
        <Footer social={social} contac={contact} />
      </Container>
    );
  }
}

export default Landing;
