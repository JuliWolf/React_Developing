import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import classes from './NavItems.css'

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavLink to="/" active>Burger Builder</NavLink>
        <NavLink to="/checkout">Chekout</NavLink>
    </ul>
);

export default navItems;
