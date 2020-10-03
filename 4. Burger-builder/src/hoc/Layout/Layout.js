import React, {useState} from "react";
import {connect} from 'react-redux'
import Aux from '../Aux/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDraw from "../../components/Navigation/SideDraw/SideDraw";

const Layout = props => {
    const [sideDrawIsVisible, setSideDrawIsVisible] = useState(false);

    const sideDrawClosedHandler = () => {
        setSideDrawIsVisible(false);
    }

    const sideDrawToggleHandler = () => {
        setSideDrawIsVisible(!sideDrawIsVisible);
    }

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawToggleClicked={sideDrawToggleHandler}/>
            <SideDraw
                isAuth={props.isAuthenticated}
                closed={sideDrawClosedHandler}
                open={sideDrawIsVisible}
            />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);