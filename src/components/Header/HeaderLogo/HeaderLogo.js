import React from 'react';
import classes from '../../Header/Header.module.scss'
import Logo from '../../../assets/images/woo-carving-logo-300.png'

const headerLogo = () => (
    <div className={classes.wcHeaderLogo}>
        <img src={Logo} alt=""/>
    </div>
)

export default headerLogo;