import React, { Component } from "react";
import classes from "../../components/Content/Content.module.scss";
import ContentWrap from "../../components/Content/ContentWrap";
import ContentCol from "../../components/Content/ContentCol";

class Content extends Component {


  onBtnClick = (url) => {
    console.log(url);
    window.open(url,"_blank")
  }


  render() {
    console.log(this.props)
    const {cnc, printing3d, laser} = this.props.content
    const cncBtn = cnc.btn
    const printingBtn = printing3d.btn
    const laserBtn = laser.btn

    return (
      <div id="wc-content" className={classes.wcContent}>
        <ContentWrap
          contentColCNC={
            <ContentCol
              contentBgStyle={classes.bgColCNC}
              contentTitle={cnc?.title}
              contentDesc={cnc?.desc}
              contentBtnStyle={classes.contentBtn}
              contentBtnTxt={cncBtn?.text}
              contentBtnClicked={() => this.onBtnClick(cncBtn?.link)}
            />
          }
          contentCol3D={
            <ContentCol
              contentBgStyle={classes.bgCol3d}
              contentTitle={printing3d?.title}
              contentDesc={printing3d?.desc}
              contentBtnStyle={classes.contentBtn}
              contentBtnTxt={printingBtn?.text}
              contentBtnClicked={() => this.onBtnClick(printingBtn?.link)}
            />
          }
          contentColLaser={
            <ContentCol
             contentBgStyle={classes.bgColLaser}
              contentTitle={laser?.title}
              contentDesc={laser?.desc}
              contentBtnStyle={classes.contentBtn}
              contentBtnTxt={laserBtn?.text}
              contentBtnClicked={() =>this.onBtnClick(laserBtn?.link)}
            />
          }
        />
      </div>
    );
  }

}

export default Content;
