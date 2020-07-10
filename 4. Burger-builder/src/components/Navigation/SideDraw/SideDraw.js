import React from 'react';

import classes from './SideDraw.css';

import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDraw = (props) => {
    let attachedClasses = [classes.SideDraw, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDraw, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavItems/>
                </nav>
            </div>
        </Aux>

    );
};

export default sideDraw;
