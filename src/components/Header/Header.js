import React from 'react';
import classes from './Header.module.scss'
import HeaderLogo from './HeaderLogo/HeaderLogo'
import HeaderContact from './HeaderContact/HeaderContact'

const header = (props) => (
    <div id="wc-header" className={classes.wcHeader}>
        <div className="row">
            <div className="col-5">
                <HeaderLogo/>
            </div>
            <div className="col-7">
                <HeaderContact links={props}/>
            </div>
        </div>
    </div>
)

export default header;