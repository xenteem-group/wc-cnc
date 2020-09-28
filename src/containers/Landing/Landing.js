import React, { Component } from "react";
import $ from "jquery";
import Header from "../../components/Header/Header";
import Content from "../../containers/Content/Content";
import Footer from "../../components/Footer/Footer";
import landingData from "../../config/config"

const  setHeight = () => {
  if($(window).width() < 992){
    const headerHeight = $("#wc-header").height();
    const windowHeight = $(window).height();
    $(".wc-content-col").height(windowHeight - (headerHeight));
  } else {
    const headerHeight = $("#wc-header").height();
    const footerHeight = $("#wc-footer").height();
    const windowHeight = $(window).height();
    $(".wc-content-col").height(windowHeight - (headerHeight + footerHeight));
  }
 
}

class Landing extends Component {

 

  componentDidMount() {

    setHeight();    

    $(window).resize(function(){
      setHeight();
    });

  }

  render() {
    console.log(landingData.contact);
    const{social, contact, content} = landingData;

    return (
      <div className="wcApp">
        <Header social={social} contact={contact}/>
        <Content content={content}/>
        <Footer social={social} contac={contact}/>
      </div>
    );
  }
}

export default Landing;
