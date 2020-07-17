import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems';
import DrawToggle from "../SideDraw/DrawToggle/DrawToggle";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawToggle clicked={props.drawToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavItems isAuthenticated={props.isAuth}/>
        </nav>
    </header>
);

export default toolbar;

