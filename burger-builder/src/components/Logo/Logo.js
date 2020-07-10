import React from 'react';
import classes from './Logo.css'

import burderLogo from '../../assets/images/burger-logo.png'
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burderLogo} alt="MyBurger"/>
    </div>
);

export default logo;
